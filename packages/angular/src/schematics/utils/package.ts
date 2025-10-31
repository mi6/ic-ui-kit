import { Tree } from "@angular-devkit/schematics";

/**
 * Adds a package to the package.json
 */
export function addPackageToPackageJson(
  host: Tree,
  type: string,
  pkg: string,
  version: string
): Tree {
  const packageJsonPath = "package.json";
  if (host.exists(packageJsonPath)) {
    const sourceText = host.read(packageJsonPath)?.toString("utf-8") as string;
    const json = JSON.parse(sourceText);
    if (!json[type]) {
      json[type] = {};
    }

    if (!json[type][pkg]) {
      json[type][pkg] = version;
    }

    host.overwrite(packageJsonPath, JSON.stringify(json, null, 2));
  }

  return host;
}