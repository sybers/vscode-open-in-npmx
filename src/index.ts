import * as vscode from "vscode";
import * as Commands from "./commands.js";

export const activate = (): void => {
  vscode.commands.registerCommand("open-in-npmx.open", Commands.open);
};
