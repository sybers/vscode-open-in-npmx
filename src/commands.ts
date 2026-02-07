/* IMPORT */

import { openInExternal } from "vscode-extras";
import {
  castArraySplitted,
  getPackagesFromEditor,
  getPackagesFromProject,
  getPackagesFromPrompt,
} from "./utils";

const NPMX_PACKAGE_URL = "https://npmx.dev/package/";

export async function open(names?: string | string[]): Promise<void> {
  names ||= getPackagesFromEditor() || (await getPackagesFromPrompt(getPackagesFromProject()));

  if (!names?.length) return;

  for (const name of castArraySplitted(names)) {
    const url = `${NPMX_PACKAGE_URL}${name}`;

    openInExternal(url);
  }
};
