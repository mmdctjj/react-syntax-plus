// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { CompletionItemUtil } from "../utils/CompletionItemUtil";
import {
  CALLBACKREG,
  MEMOREG,
  REDUCERREG,
  REFREG,
  STATEREG,
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
        // Check if the linePrefix ends with 'ue' to trigger 'useEffect' suggestions
        if (!linePrefix.endsWith("ul")) {
          return undefined;
        }
        const text = document.getText();

        const regexs = [STATEREG, MEMOREG, REFREG, CALLBACKREG, REDUCERREG];

        const completionItemUtil = new CompletionItemUtil("useLayoutEffect");
        completionItemUtil.setRegexs(regexs);
        completionItemUtil.setMarkdownStringTemplate(
          `This useLayoutEffect hook logs the value of \`#{}\` to the console whenever it changes.\n\`\`\`javascript\nuseLayoutEffect(() => {\nconsole.log("#{}", #{});\n}, [#{}]);\n\`\`\`\n`
        );
        completionItemUtil.setSnippetStringTemplate(
          `\nuseLayoutEffect(() => {\n\tconsole.log("#{}", #{});\n}, [#{}]);`
        );
        return completionItemUtil.getCompletionItems(document, text);
      },
    },
    "ul"
  );
