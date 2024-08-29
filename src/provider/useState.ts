import * as vscode from "vscode";
import { CompletionItemUtil } from "../utils/CompletionItemUtil";

export const useStateProvider = vscode.languages.registerCompletionItemProvider(
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

      const match = linePrefix.match(/us(\w+)/);

      if (match) {
        const variableName = match[1];

        const completionItemUtil = new CompletionItemUtil("useState");

        completionItemUtil.setMarkdownStringTemplate(
          `Generates a useState hook for the variable \`${variableName}\`.\n\`\`\`javascript\nconst [${variableName}, set${
            variableName.charAt(0).toUpperCase() + variableName.slice(1)
          }] = useState();\n\`\`\`\n`
        );
        completionItemUtil.setSnippetStringTemplate(
          `const [${variableName}, set${
            variableName.charAt(0).toUpperCase() + variableName.slice(1)
          }] = useState($1);`
        );
        const completionItem =
          completionItemUtil.createCompletionItem(variableName);

        completionItemUtil.excuteImportCommand(completionItem, document);

        return [completionItem];
      }

      return undefined;
    },
  },
  "s" // 只在输入 "us" 后触发
);
