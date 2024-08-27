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

export const useCallbackProvider =
  vscode.languages.registerCompletionItemProvider(
    ["javascriptreact", "typescriptreact"],
    {
      provideCompletionItems(document: vscode.TextDocument) {
        const text = document.getText();

        const regexs = [STATEREG, MEMOREG, REFREG, CALLBACKREG, REDUCERREG];

        const completionItemUtil = new CompletionItemUtil("useCallback");
        completionItemUtil.setRegexs(regexs);
        completionItemUtil.setMarkdownStringTemplate(
          `\nThis useCallback hook logs the value of \`#{}\` to the console whenever it changes.\n\`\`\`javascript\nconst $1 = useCallback(() => {\nconsole.log("#{}", #{});\n}, [#{}]);\n\`\`\`\n`
        );
        completionItemUtil.setSnippetStringTemplate(
          `const $1 = useCallback(() => {\n\tconsole.log("#{}", #{});$2\n}, [#{}]);`
        );
        return completionItemUtil.getCompletionItems(document, text);
      },
    },
    "uc"
  );
