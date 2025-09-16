import { SchematicsException, Tree } from "@angular-devkit/schematics";
import { modify, applyEdits } from "jsonc-parser";

/**
 * Add skipLibCheck to tsconfig.json due to type errors
 */
export function skipLibCheckTsConfig(host: Tree): Tree {
  const tsConfigPath = "tsconfig.json";
  if (host.exists(tsConfigPath)) {
    const tsConfigBuffer = host.read(tsConfigPath);
    if (tsConfigBuffer === null) {
      throw new SchematicsException(`Could not find ${tsConfigPath}`);
    }
    const tsConfigContent = tsConfigBuffer.toString("utf-8");

    const editResults = modify(
      tsConfigContent,
      ["compilerOptions", "skipLibCheck"],
      true,
      {
        formattingOptions: {
          tabSize: 4,
        },
      }
    );

    const newTsconfig = applyEdits(tsConfigContent, editResults);

    host.overwrite(tsConfigPath, newTsconfig);
  }

  return host;
}