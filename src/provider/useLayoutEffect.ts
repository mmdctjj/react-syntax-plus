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

export const useLayoutEffectProvider =
  vscode.languages.registerCompletionItemProvider(
    ["javascriptreact", "typescriptreact"],
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        const linePrefix = document.lineAt(position).text.trim().substr(0, 2);
        // Check if the linePrefix ends with 'ul' to trigger 'useLayoutEffect' suggestions
        if (!linePrefix.endsWith("ul")) {
          return undefined;
        }

        const regexs = [HOOKREG, PROPSREG, FUNPROPSREG, ARROWPROPSREG];

        const completionItemUtil = new CompletionItemUtil(
          "useLayoutEffect",
          document
        );
        completionItemUtil.setRegexs(regexs);
        completionItemUtil.setMarkdownStringTemplate(
          `This useLayoutEffect hook logs the value of \`#{}\` to the console whenever it changes.\n\`\`\`javascript\nuseLayoutEffect(() => {\nconsole.log("#{}", #{});\n}, [#{}]);\n\`\`\`\n`
        );
        completionItemUtil.setSnippetStringTemplate(
          `useLayoutEffect(() => {\n\tconsole.log("#{}", #{});\n}, [#{}]);`
        );
        return completionItemUtil.getCompletionItems(document);
      },
    },
    "l"
  );
