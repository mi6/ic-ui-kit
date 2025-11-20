import { Path, join } from "@angular-devkit/core";
import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  move,
  SchematicsException,
  template,
  url,
} from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import {
  getWorkspace,
  ProjectDefinition,
} from "@schematics/angular/utility/workspace";

import { addICDSModuleImportToNgModule } from "../utils/ast";

import { addStyle, getDefaultAngularApp } from "./../utils/config";
import { addPackageToPackageJson } from "./../utils/package";
import { Schema as IonAddOptions } from "./schema";
import { skipLibCheckTsConfig } from "../utils/tsconfig";

function addICDSAngularToPackageJson(): Rule {
  return (host: Tree) => {
    addPackageToPackageJson(host, "dependencies", "@ukic/angular", "latest");
    return host;
  };
}

function addSkipLibCheckToTsConfigJson(): Rule {
  return (host: Tree) => {
    skipLibCheckTsConfig(host);
    return host;
  };
}

/**
 * Adds the `ICDSModule` usage to the project's `AppModule`.
 * If the project does not use modules this will operate as a noop.
 * @param projectSourceRoot The source root path of the project.
 */
function addICDSAngularModuleToAppModule(projectSourceRoot: Path): Rule {
  return (host: Tree) => {
    const appModulePath = `${projectSourceRoot}/app/app.module.ts`;
    if (host.exists(appModulePath)) {
      addICDSModuleImportToNgModule(host, appModulePath);
    }
    return host;
  };
}

function addICDSStyles(project: ProjectDefinition, projectName: string): Rule {
  return (host: Tree) => {
    const icdsStyles = [
      "node_modules/@ukic/fonts/dist/fonts.css",
      "node_modules/@ukic/angular/css/core.css",
      "node_modules/@ukic/angular/css/normalize.css",
      `${project.sourceRoot}/styles/icds/variables.css`,
    ];

    icdsStyles.forEach((entry) => {
      addStyle(host, project, projectName, entry);
    });
    return host;
  };
}

function installNodeDeps() {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function ngAdd(options: IonAddOptions): Rule {
  return async (host: Tree) => {
    const workspace = await getWorkspace(host);

    const [projectName, config] = getDefaultAngularApp(
      workspace,
      options?.project
    );

    const sourcePath: Path = join(config.sourceRoot as Path);
    const rootTemplateSource = apply(url("./files/root"), [
      template({ ...options }),
      move(sourcePath),
    ]);
    return chain([
      addICDSAngularToPackageJson(),
      addSkipLibCheckToTsConfigJson(),
      addICDSAngularModuleToAppModule(sourcePath),
      addICDSStyles(config, projectName),
      mergeWith(rootTemplateSource),
      installNodeDeps(),
    ]);
  };
}
