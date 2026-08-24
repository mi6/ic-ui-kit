import { workspaces } from "@angular-devkit/core";
import { Tree, SchematicsException } from "@angular-devkit/schematics";
import { parse } from "jsonc-parser";

const ANGULAR_JSON_PATH = "angular.json";

type JsonValue = boolean | string | number | JsonArray | JsonObject | null;
type JsonArray = JsonValue[];
type JsonObject = { [property: string]: JsonValue };
type WorkspaceDefinition = workspaces.WorkspaceDefinition;
type ProjectDefinition = workspaces.ProjectDefinition;

export function readConfig<T extends JsonObject = JsonObject>(host: Tree): T {
  return host.readJson(ANGULAR_JSON_PATH) as T;
}

export function writeConfig(
  host: Tree,
  config: JsonObject | ProjectDefinition,
): void {
  host.overwrite(ANGULAR_JSON_PATH, JSON.stringify(config, null, 2));
}

function isAngularBrowserProject(projectConfig: ProjectDefinition): boolean {
  if (projectConfig.extensions.projectType === "application") {
    const buildConfig = projectConfig.targets.get("build");
    // Angular 16 and lower
    const legacyAngularBuilder =
      buildConfig?.builder === "@angular-devkit/build-angular:browser";
    // Angular 17+
    const modernAngularBuilder =
      buildConfig?.builder === "@angular-devkit/build-angular:application";
    // Angular 20+
    const latestAngularBuilder =
      buildConfig?.builder === "@angular/build:application";

    return legacyAngularBuilder || modernAngularBuilder || latestAngularBuilder;
  }
  return false;
}

export function getDefaultAngularApp(
  workspace: WorkspaceDefinition,
  projectName?: string,
): [string, ProjectDefinition] {
  const projects = workspace.projects;

  if (projectName) {
    const projectConfig = projects.get(projectName);
    if (projectConfig && isAngularBrowserProject(projectConfig)) {
      return [projectName, projectConfig];
    }
  }

  const projectNames = projects.keys();
  for (const projectName of projectNames) {
    const projectConfig = projects.get(projectName);
    if (projectConfig && isAngularBrowserProject(projectConfig)) {
      return [projectName, projectConfig];
    }
  }

  throw new SchematicsException(
    `ICDS Add requires a project type of "application".`,
  );
}

export function addStyle(
  host: Tree,
  project: ProjectDefinition,
  projectName: string,
  stylePath: string,
): void {
  const config = readConfig(host);
  const stylesList = project.targets.get("build")?.options?.styles as string[];
  if (stylesList && !stylesList.includes(stylePath)) {
    stylesList.push(stylePath);
  }
  const projectConfig = (
    config.projects as unknown as Record<string, JsonObject> | undefined
  )?.[projectName];
  const architect = projectConfig?.architect as JsonObject | undefined;
  const build = architect?.build as JsonObject | undefined;
  const options = build?.options as JsonObject | undefined;
  if (options?.styles) {
    options.styles = stylesList;
    writeConfig(host, config);
  }
}

export function getWorkspacePath(host: Tree): string {
  const possibleFiles = ["/angular.json", "/.angular.json"];
  return possibleFiles.filter((path) => host.exists(path))[0];
}

export function getWorkspace(host: Tree): WorkspaceDefinition {
  const path = getWorkspacePath(host);
  const configBuffer = host.read(path);
  if (configBuffer === null) {
    throw new SchematicsException(`Could not find (${path})`);
  }
  const content = configBuffer.toString();

  return parse(content) as WorkspaceDefinition;
}
