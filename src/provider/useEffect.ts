import * as vscode from "vscode";
import { CompletionItemUtil } from "../utils/CompletionItemUtil";
import { HOOKREG } from "../utils/constant";

export const useEffectProvider =
  vscode.languages.registerCompletionItemProvider(
    ["javascriptreact", "typescriptreact"],
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        const linePrefix = document.lineAt(position).text.trim().substr(0, 2);

        // Check if the linePrefix ends with 'ue' to trigger 'useEffect' suggestions
        if (!linePrefix.endsWith("ue")) {
          return undefined;
        }

        const regexs = [HOOKREG];

        const completionItemUtil = new CompletionItemUtil("useEffect");
        completionItemUtil.setRegexs(regexs);
        completionItemUtil.setMarkdownStringTemplate(
          `\nThis useEffect hook logs the value of \`#{}\` to the console whenever it changes.\n\`\`\`javascript\nuseEffect(() => {\n  console.log("#{}", #{});\n}, [#{}]);\n\`\`\`\n`
        );
        completionItemUtil.setSnippetStringTemplate(
          `useEffect(() => {\n\tconsole.log("#{}", #{});\n}, [#{}]);`
        );
        return completionItemUtil.getCompletionItems(document);
      },
    },
    "e" // Trigger for 'ue' prefix
  );
