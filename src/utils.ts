import * as vscode from "vscode";
import { getPackage, prompt } from "vscode-extras";

export const castArray = <T>(value: T | T[]): T[] => {
  return Array.isArray(value) ? value : [value];
};

export const castArraySplitted = (value: string | string[]): string[] => {
  const splitRe = /[\s,]+/g;
  const splits = castArray(value)
    .map((value) => value.split(splitRe))
    .flat()
    .filter(Boolean);

  return splits;
};

export const getPackagesFromEditor = (): string[] | undefined => {
  const { activeTextEditor } = vscode.window;

  if (!activeTextEditor) return;

  const { document, selections } = activeTextEditor;
  const texts = selections.map((selection) => document.getText(selection)).filter(Boolean);

  if (!texts.length) return;

  return texts;
};

export const getPackagesFromProject = (): string | undefined => {
  const pkg = getPackage()?.content;
  const isPackage = isObject(pkg) && "name" in pkg && isString(pkg.name);

  if (!isPackage) return;

  return `${pkg.name}`;
};

export const getPackagesFromPrompt = async (value?: string): Promise<string | undefined> => {
  return prompt.string("package name...", value);
};

export const isObject = (value: unknown): value is object => {
  return typeof value === "object" && value !== null;
};

export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};
