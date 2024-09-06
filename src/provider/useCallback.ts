// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { CompletionItemUtil } from "../utils/CompletionItemUtil";
import {
  ARROWPROPSREG,
  FUNPROPSREG,
  HOOKREG,
  PROPSREG,
} from "../utils/constant";

export const useCallbackProvider =
  vscode.languages.registerCompletionItemProvider(
    ["javascriptreact", "typescriptreact"],
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        const linePrefix = document.lineAt(position).text.trim().substr(0, 2);
        // Check if the linePrefix ends with 'uc' to trigger 'useCallback' suggestions
        if (!linePrefix.endsWith("uc")) {
          return undefined;
        }

        const regexs = [HOOKREG, PROPSREG, FUNPROPSREG, ARROWPROPSREG];

        const completionItemUtil = new CompletionItemUtil(
          "useCallback",
          document
        );
        completionItemUtil.setRegexs(regexs);
        completionItemUtil.setMarkdownStringTemplate(
          `\nThis useCallback hook logs the value of \`#{}\` to the console whenever it changes.\n\`\`\`javascript\nconst $1 = useCallback((#{}) => {\nconsole.log("#{}", #{});\n}, [#{}]);\n\`\`\`\n`
        );
        completionItemUtil.setSnippetStringTemplate(
          `const $1 = useCallback((#{}$2) => {\n\tconsole.log("#{}", #{}$2);$3\n}, [#{}]);`
        );
        return completionItemUtil.getCompletionItems(document);
      },
    },
    "c"
  );
