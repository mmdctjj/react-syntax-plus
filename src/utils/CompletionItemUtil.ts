import * as vscode from "vscode";

export class CompletionItemUtil {
  providerName: string;
  regexs: RegExp[];
  snippetStringTemplate: string;
  markdownStringTemplate: string;

  constructor(providerName: string) {
    this.providerName = providerName;
    this.regexs = [];
    this.snippetStringTemplate = "";
    this.markdownStringTemplate = "";
  }
  setRegexs(regexs: RegExp[]) {
    this.regexs = regexs;
  }
  setSnippetStringTemplate(template: string) {
    this.snippetStringTemplate = template;
  }
  renderSnippetString(variableName: string) {
    return this.snippetStringTemplate.replaceAll("#{}", variableName);
  }
  setMarkdownStringTemplate(template: string) {
    this.markdownStringTemplate = template;
  }
  renderMarkdownString(variableName: string) {
    return this.markdownStringTemplate.replaceAll("#{}", variableName);
  }
  excuteImportCommand(
    completionItem: vscode.CompletionItem,
    document: vscode.TextDocument
  ) {
    completionItem.command = {
      command: "extension.addOrUpdateImport",
      title: "Add or Update Import",
      arguments: [document, [this.providerName]],
    };
  }
  createCompletionItem(variableName: string) {
    const completionItem = new vscode.CompletionItem(
      `${this.providerName} with ${variableName}`,
      vscode.CompletionItemKind.Function
    );

    completionItem.detail = this.providerName;

    // insert code
    completionItem.insertText = new vscode.SnippetString(
      this.renderSnippetString(variableName)
    );
    // preview insert code
    completionItem.documentation = new vscode.MarkdownString(
      this.renderMarkdownString(variableName)
    );
    return completionItem;
  }

  getCompletionItems(document: vscode.TextDocument) {
    let match;

    const text = document.getText();

    const completionItems: vscode.CompletionItem[] = [];

    this.regexs.map((regex) => {
      while ((match = regex.exec(text)) !== null) {
        const variables = match[1];

        // Check if it's an object or array destructuring
        if (variables.startsWith("{") || variables.startsWith("[")) {
          // Remove braces or brackets, split by commas, and remove "..." from the start of any variable
          const cleanedVariables = variables
            .slice(1, -1)
            .split(",")
            .map((v) => v.trim().replace(/^\.{3}/, ""));
          cleanedVariables.map((variable) => {
            const completionItem = this.createCompletionItem(variable);

            // Command to modify the import statement
            this.excuteImportCommand(completionItem, document);

            completionItems.push(completionItem);
          });
        } else {
          const completionItem = this.createCompletionItem(variables);

          // Command to modify the import statement
          this.excuteImportCommand(completionItem, document);

          completionItems.push(completionItem);
        }
      }
    });

    return completionItems.length > 0 ? completionItems : undefined;
  }
}
