import * as vscode from "vscode";
import { CompletionItemUtil } from "../utils/CompletionItemUtil";

export const useRefProvider = vscode.languages.registerCompletionItemProvider(
  ["javascriptreact", "typescriptreact"],
  {
    provideCompletionItems(
      document: vscode.TextDocument,
      position: vscode.Position
    ) {
      const linePrefix = document
        .lineAt(position)
        .text.trim()
        .substr(0, position.character);

      const match = linePrefix.match(/uf(\w+)/);

      if (match) {
        const variableName = match[1];

        const completionItemUtil = new CompletionItemUtil("useRef", document);

        completionItemUtil.setMarkdownStringTemplate(
          `Generates a useRef hook for the variable \`${variableName}\`.\n\`\`\`javascript\nconst ${variableName} = useRef();\n\`\`\`\n`
        );
        completionItemUtil.setSnippetStringTemplate(
          `const ${variableName} = useRef($1);`
        );
        const completionItem =
          completionItemUtil.createCompletionItem(variableName);

        return [completionItem];
      }

      return undefined;
    },
  },
  "f"
);
