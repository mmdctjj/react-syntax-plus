import * as vscode from "vscode";
import { CompletionItemUtil } from "../utils/CompletionItemUtil";
import {
  CALLBACKREG,
  MEMOREG,
  REDUCERREG,
  REFREG,
  STATEREG,
} from "../utils/constant";

export const useEffectProvider =
  vscode.languages.registerCompletionItemProvider(
    ["javascriptreact", "typescriptreact"],
    {
      provideCompletionItems(document: vscode.TextDocument) {
        const text = document.getText();

        const regexs = [STATEREG, MEMOREG, REFREG, CALLBACKREG, REDUCERREG];

        const completionItemUtil = new CompletionItemUtil("useEffect");
        completionItemUtil.setRegexs(regexs);
        completionItemUtil.setMarkdownStringTemplate(
          `\nThis useEffect hook logs the value of \`#{}\` to the console whenever it changes.\n\`\`\`javascript\nuseEffect(() => {\nconsole.log("#{}", #{});\n}, [#{}]);\n\`\`\`\n`
        );
        completionItemUtil.setSnippetStringTemplate(
          `\nuseEffect(() => {\n\tconsole.log("#{}", #{});\n}, [#{}]);`
        );
        return completionItemUtil.getCompletionItems(document, text);
      },
    },
    "ue" // Trigger for 'ue' prefix
  );
