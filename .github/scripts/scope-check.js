const { execSync } = require('child_process');

const rawBaseBranch = process.env.BASE_BRANCH || "develop";
const baseBranch = rawBaseBranch.startsWith("origin/") ? rawBaseBranch : `origin/${rawBaseBranch}`;

function getCommits() {
  try {
    const commitsRaw = execSync(`git log ${baseBranch}..HEAD --pretty=format:%H`).toString().trim();
    if (!commitsRaw) return [];
    return commitsRaw.split('\n');
  } catch (error) {
    console.error('Error fetching commits:', error.message);
    process.exit(1);
  }
}

function getCommitMessage(commitHash) {
  try {
    const message = execSync(`git log -1 --format=%s ${commitHash}`).toString().trim();
    if (message.startsWith('Merge ')) {
      return null;
    }
    return message;
  }  catch (error) {
    console.error(`Error fetching commit message for ${commitHash}:`, error.message);
    process.exit(1);
  }
}

function getFilesChanged(commitHash) {
  try {
    const filesRaw = execSync(`git diff-tree --no-commit-id --name-only -r ${commitHash}`).toString().trim();
    if (!filesRaw) return [];
    return filesRaw.split('\n');
  } catch (error) {
    console.error(`Error fetching changed files for ${commitHash}:`, error.message);
    process.exit(1);
  }
}

function validateScope(commitMessage, changedFiles, scopeToPathMap) {
  const scopeMatch = commitMessage.match(/^[a-z]+\(([^)]+)\):/);
  if (!scopeMatch) {
    console.error(`❌ Commit message missing scope (expected "type(scope): ..."): "${commitMessage}"`);
    process.exit(1);
  }
  const scope = scopeMatch[1];
  const allowedPrefix = scopeToPathMap[scope];

  if (!allowedPrefix && scope !== "root") {
    console.error(`❌ Scope "${scope}" is not defined in your scope-path mapping.`);
    process.exit(1);
  }

  if (scope === "root") {
    const forbiddenPrefixes = Object.values(scopeToPathMap).filter(Boolean);
    for (const file of changedFiles) {
      if (forbiddenPrefixes.some(prefix => file.startsWith(prefix))) {
        console.error(`❌ File "${file}" is inside a package folder but scope is "root".`);
        process.exit(1);
      }
    }
  } else {
    for (const file of changedFiles) {
      if (!file.startsWith(allowedPrefix)) {
        console.error(`❌ File "${file}" changed in commit, but does not match scope "${scope}" (expected path prefix: "${allowedPrefix}")`);
        process.exit(1);
      }
    }
  }
  console.log(`✅ Commit scope "${scope}" matches all changed files.`);
}

function main() {
  const scopeToPathMap = {
    "web-components": "packages/web-components/",
    "docs": "packages/docs/",
    "react": "packages/react/",
    "canary-web-components": "packages/canary-web-components/",
    "canary-docs": "packages/canary-docs/",
    "canary-react": "packages/canary-react/",
    "nextjs": "packages/nextjs/",
    "codemod": "packages/codemod/",
    "fonts": "packages/fonts/",
    "root": null,
    "release": null,
  };
  const commits = getCommits(baseBranch);
  if (commits.length === 0) {
    console.log("No new commits to check against", baseBranch);
    process.exit(0);
  }
  for (const commit of commits) {
    const message = getCommitMessage(commit);
    if (!message) continue;
    console.log(`\nChecking commit: "${message}"`);
    const files = getFilesChanged(commit);
    validateScope(message, files, scopeToPathMap);
  }
}

main();