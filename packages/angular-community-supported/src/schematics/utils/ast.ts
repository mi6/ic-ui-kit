import type { Tree } from "@angular-devkit/schematics";
import {
  addSymbolToNgModuleMetadata,
  insertImport,
  isImported,
} from "@schematics/angular/utility/ast-utils";
import { applyToUpdateRecorder } from "@schematics/angular/utility/change";
import * as ts from "typescript";

/**
 * Reads file given path and returns TypeScript source file.
 */
function getSourceFile(host: Tree, path: string): ts.SourceFile {
  const content = host.readText(path);
  return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}

/**
 * Import and add module to root app module.
 */
export function addICDSModuleImportToNgModule(
  host: Tree,
  modulePath: string
): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const moduleSource = getSourceFile(host, modulePath) as any;
  if (!isImported(moduleSource, "ICDSModule", "@ukic/angular")) {
    const recorder = host.beginUpdate(modulePath);
    const icdsModuleChange = insertImport(
      moduleSource,
      modulePath,
      "ICDSModule",
      "@ukic/angular"
    );

    if (icdsModuleChange) {
      applyToUpdateRecorder(recorder, [icdsModuleChange]);
    }

    const metadataChange = addSymbolToNgModuleMetadata(
      moduleSource,
      modulePath,
      "imports",
      "ICDSModule"
    );
    if (metadataChange) {
      applyToUpdateRecorder(recorder, metadataChange);
    }
    host.commitUpdate(recorder);
  }
}