import * as vscode from "vscode";

export const importFunction = (document: any, [importName]: string[]) => {
  const edit = new vscode.WorkspaceEdit();
  const text = document.getText();
  const importRegex = /import\s*{([^}]+)}\s*from\s*['"]react['"]/;
  const match = text.match(importRegex);

  if (match) {
    // Update existing import
    const imports = match[1].split(",").map((imp: any) => imp.trim());

    // if importName not in imports
    if (!imports.includes(importName)) {
      imports.push(importName);
      const newImport = `import { ${imports.join(", ")} } from 'react'`;
      const importPosition = document.positionAt(match.index);
      const importRange = new vscode.Range(
        importPosition,
        document.positionAt(match.index + match[0].length)
      );
      edit.replace(document.uri, importRange, newImport);
    }
  } else {
    // Add new import at the top
    edit.insert(
      document.uri,
      new vscode.Position(0, 0),
      `import { ${importName} } from 'react';\n`
    );
  }

  vscode.workspace.applyEdit(edit);
};
