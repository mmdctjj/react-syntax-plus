// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import {
  useCallbackProvider,
  useEffectProvider,
  useLayoutEffectProvider,
  useMemoProvider,
  useRefProvider,
  useStateProvider,
} from "./provider";
import { importFunction } from "./utils/import";
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "react-syntax-plus" is now active!'
  );
  context.subscriptions.push(useCallbackProvider);
  context.subscriptions.push(useEffectProvider);
  context.subscriptions.push(useLayoutEffectProvider);
  context.subscriptions.push(useMemoProvider);
  context.subscriptions.push(useRefProvider);
  context.subscriptions.push(useStateProvider);
}

vscode.commands.registerCommand("extension.addOrUpdateImport", importFunction);

// This method is called when your extension is deactivated
export function deactivate() {
  console.log(
    'Congratulations, your extension "react-syntax-plus" is now stoped!'
  );
}
