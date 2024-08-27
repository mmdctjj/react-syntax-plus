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
  getCompletionItems(document: vscode.TextDocument, text: string) {
    let match;

    const completionItems: vscode.CompletionItem[] = [];

    this.regexs.map((regex) => {
      while ((match = regex.exec(text)) !== null) {
        const variableName = match[1];

        const completionItem = new vscode.CompletionItem(
          `${this.providerName} with ${variableName}`,
          vscode.CompletionItemKind.Snippet
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

        // Command to modify the import statement
        this.excuteImportCommand(completionItem, document);

        completionItems.push(completionItem);
      }
    });

    return completionItems.length > 0 ? completionItems : undefined;
  }
}
