
const fs = require("node:fs");
const path = require("path");
require('ts-node/register');
  
const { excludeComps } = require("../packages/web-components/comps-list");

const coreDocsPath = path.resolve(__dirname, "../packages/docs/docs.json");
const canaryDocsPath = path.resolve(__dirname, "../packages/canary-docs/docs.json");

let coreDocs, canaryDocs;

try {
  coreDocs = JSON.parse(fs.readFileSync(coreDocsPath, "utf8"));
} catch (e) {
  coreDocs = null;
}

try {
  canaryDocs = JSON.parse(fs.readFileSync(canaryDocsPath, "utf8"));
} catch (e) {
  canaryDocs = null;
}

if (!coreDocs && !canaryDocs) {
  process.exit(1);
}

const componentList = [
  ...(canaryDocs?.components || []),
  ...(coreDocs?.components || [])
];

const usedByMap = {};
const dependsOnMap = {};

for (const component of componentList) {
  if (component.dependencies) {
    for (const dependency of component.dependencies) {
      if (dependency === component.tag) continue;
      if (!usedByMap[dependency]) usedByMap[dependency] = new Set();
      usedByMap[dependency].add(component.tag);
      if (!dependsOnMap[component.tag]) dependsOnMap[component.tag] = new Set();
      dependsOnMap[component.tag].add(dependency);
    }
  }
}

function findComponentReadme(component) {
  if (!component.filePath) return null;
  let packageBase;
  if (component.filePath.includes("canary-web-components")) {
    packageBase = path.resolve(__dirname, "../packages/canary-web-components");
  } else if (component.filePath.includes("web-components")) {
    packageBase = path.resolve(__dirname, "../packages/web-components");
  } else {
    packageBase = path.resolve(__dirname);
  }
  const srcIndex = component.filePath.indexOf("src/components");
  if (srcIndex === -1) return null;
  const relCompDir = path.dirname(component.filePath.slice(srcIndex));
  const dir = path.join(packageBase, relCompDir);
  let readmePath = path.join(dir, "readme.md");
  let readmeExists = fs.existsSync(readmePath);
  if (!readmeExists) {
    readmePath = path.join(dir, "README.md");
    readmeExists = fs.existsSync(readmePath);
  }
  if (!readmeExists) return null;
  return { dir, readmePath };
}

function getComponentLink(component) {
  if (!component || !component.tag) return component?.tag || "";
  const componentName = component.tag;
  if (excludeComps.includes(componentName)) {
    return `../${componentName}`;
  } else {
    return `../../../../canary-web-components/src/components/${componentName}`;
  }
}

function generateMarkdown(title, tags, noLeadingSpace = false) {
  if (!tags.length) return '';
  let section = `### ${title}\n\n`;
  const uniqueTags = new Set();
  for (const tag of tags.sort()) {
    if (uniqueTags.has(tag)) continue;
    uniqueTags.add(tag);
    const component = componentList.find(c => c.tag === tag);
    const componentPath = getComponentLink(component);
    section += (noLeadingSpace ? '-' : ' -') + ` [${tag}](${componentPath})\n`;
  }
  return section;
}

function generateGraphMarkdown(tag) {
  const dependsOn = Array.from(dependsOnMap[tag] || []);
  const usedBy = Array.from(usedByMap[tag] || []);
  if (!dependsOn.length && !usedBy.length) return '';
  let mermaid = '```mermaid\ngraph TD;\n';
  const componentRelationships = new Set();

  for (const dependency of dependsOn.sort()) {
    const relationship = `${tag} --> ${dependency}`;
    if (!componentRelationships.has(relationship)) {
      mermaid += `  ${relationship}\n`;
      componentRelationships.add(relationship);
    }
  }

  for (const user of usedBy.sort()) {
    const relationship = `${user} --> ${tag}`;
    if (!componentRelationships.has(relationship)) {
      mermaid += `  ${relationship}\n`;
      componentRelationships.add(relationship);
    }
  }

  for (const dependency of dependsOn) {
    const subDependencies = Array.from(dependsOnMap[dependency] || []);
    for (const subDependency of subDependencies) {
      if (subDependency === tag) continue;
      const relationship = `${dependency} --> ${subDependency}`;
      if (!componentRelationships.has(relationship)) {
        mermaid += `  ${relationship}\n`;
        componentRelationships.add(relationship);
      }
    }
  }
  mermaid += `  style ${tag} fill:#f9f,stroke:#333,stroke-width:4px\n`;
  mermaid += '```';
  return `### Graph\n${mermaid}`;
}

function getDependencySections(sections) {
  const order = ['Used by', 'Depends on', 'Graph'];
  const nonEmptySections = order.map(key => sections[key]).filter(Boolean);
  return nonEmptySections.length ? nonEmptySections.join('\n\n') : '';
}

function insertDependenciesSection(readme, newSections) {
  if (!newSections.trim()) return readme;
  return readme.replace(/\n*$/, '\n\n') + '## Dependencies\n\n' + newSections + '\n';
}

function removeAndReplaceContent(readme, newSections) {
  if (!newSections.trim()) return readme;
  const endLineRegex = /\n[-_]{30,}\s*\n/m;
  const endLineMatch = endLineRegex.exec(readme);
  if (!endLineMatch) return insertDependenciesSection(readme, newSections);
  let beforeEndLine = readme.slice(0, endLineMatch.index).replace(/\n*$/, '\n\n');
  beforeEndLine = beforeEndLine.replace(/\n{2,}$/, '\n\n\n');
  const afterEndLine = readme.slice(endLineMatch.index);
  return beforeEndLine + '## Dependencies\n\n' + newSections + '\n' + afterEndLine;
}

function replaceDependencies(readme, sections) {
  const headerRegex = /^## Dependencies[\t ]*\n?/m;
  const headerMatch = headerRegex.exec(readme);
  const endLineRegex = /\n[-_]{30,}\s*\n/m;
  const newSections = getDependencySections(sections);

  if (!newSections.trim()) {
    if (!headerMatch) return readme;
    const headerIdx = headerMatch.index;
    const headerEnd = headerIdx + headerMatch[0].length;
    endLineRegex.lastIndex = headerEnd;
    const endLineMatch = endLineRegex.exec(readme);
    if (!endLineMatch) {
      return readme.slice(0, headerIdx).replace(/\n*$/, '\n');
    }
    return readme.slice(0, headerIdx) + readme.slice(endLineMatch.index);
  }

  if (!headerMatch) {
    return removeAndReplaceContent(readme, newSections);
  }

  const headerIdx = headerMatch.index;
  const headerEnd = headerIdx + headerMatch[0].length;
  endLineRegex.lastIndex = headerEnd;
  const endLineMatch = endLineRegex.exec(readme);
  if (!endLineMatch) {
    return readme.slice(0, headerEnd) + newSections;
  }
  const before = readme.slice(0, headerEnd).replace(/\n*$/, '\n\n');
  const after = readme.slice(endLineMatch.index);
  return before + newSections + '\n' + after;
}

for (const component of componentList) {
  const tag = component.tag;
  let usedBy = Array.from(usedByMap[tag] || []);
  const dependsOn = Array.from(dependsOnMap[tag] || []);
  const componentInfo = findComponentReadme(component);
  if (!componentInfo) {
    continue;
  }
  let readme = fs.readFileSync(componentInfo.readmePath, "utf8");

  if (tag === "ic-toggle-button-group" && usedBy.length === 0) {
    const canaryComponent = (canaryDocs?.components || []).find(c => c.tag === tag);
    if (canaryComponent && canaryComponent.usedBy) {
      usedBy = Array.from(canaryComponent.usedBy);
    }
  }

  const usedBySection = generateMarkdown("Used by", usedBy);
  const dependsOnSection = generateMarkdown("Depends on", dependsOn, true);
  const graphSection = generateGraphMarkdown(tag);

  readme = replaceDependencies(readme, {
    "Used by": usedBySection,
    "Depends on": dependsOnSection,
    "Graph": graphSection
  });

  fs.writeFileSync(componentInfo.readmePath, readme, "utf8");
}
