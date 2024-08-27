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

export const useMemoProvider = vscode.languages.registerCompletionItemProvider(
  ["javascriptreact", "typescriptreact"],
  {
    provideCompletionItems(document: vscode.TextDocument) {
      const text = document.getText();

      const regexs = [STATEREG, MEMOREG, REFREG, CALLBACKREG, REDUCERREG];

      const completionItemUtil = new CompletionItemUtil("useMemo");
      completionItemUtil.setRegexs(regexs);
      completionItemUtil.setMarkdownStringTemplate(
        `This useMemo hook logs the value of \`#{}\` to the console whenever it changes.\n\`\`\`javascript\nconst $1 = useMemo(() => {\nconsole.log("#{}", #{});\n}, [#{}]);\n\`\`\`\n`
      );
      completionItemUtil.setSnippetStringTemplate(
        `const $1 = useMemo(() => {\n\tconsole.log("#{}", #{});\nreturn #{}$2\n}, [#{}]);$0`
      );
      return completionItemUtil.getCompletionItems(document, text);
    },
  },
  "um"
);
