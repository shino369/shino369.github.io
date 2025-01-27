import { i18nT, isTranslationModel, NavPath, TranslationModel } from "@/types";
import fs from "fs";
import { getTranslations } from "next-intl/server";
import path from "path";

const root = process.cwd();

const pipe =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduce((v, f) => f(v), x);

const flattenArray = (input: any[]) =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

const map = (fn: any) => (input: any[]) => input.map(fn);

// const getPageOnly = (fullPath: string) => {
//   const regx = new RegExp(`.${path.sep}page.[A-Za-z]+`);
//   return regx.test(fullPath) ? fullPath : '';
// };

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix: string) => (extraPath: string) =>
  path.join(prefix, extraPath);

export const getAllFilesRecursively = (folder: string): string[] =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);

export const getPathsFromAppStructure = (folder?: string): string[] => {
  const prefixPaths = path.join(root, "src", folder || "");
  const allPaths = getAllFilesRecursively(prefixPaths);
  return allPaths;
};

export const getRootPaths = (): NavPath[] => {
  const rootPaths = path.join(root, "src", "app", "[locale]");
  const paths = fs.readdirSync(rootPaths);
  return paths
    .filter((p) => !fs.statSync(path.join(rootPaths, p)).isFile())
    .map((p) => {
      return {
        name: p,
        icon: p,
        path: "/" + p,
      };
    });
};

export const translateArr = <T>(
  arr: Record<string, string[] | TranslationModel>[],
  t: i18nT,
  checker: (obj: any) => obj is T
) => {
  return arr.map((work) => {
    const formatted: Record<string, string | string[]> = {};
    for (const key in work) {
      if (isTranslationModel(work[key])) {
        const obj = work[key] as TranslationModel;
        formatted[key] = obj.shouldTranslate ? t(obj.key) : obj.key;
      } else {
        formatted[key] = work[key];
      }
    }

    console.log(formatted);

    if (checker(formatted)) {
      return formatted;
    }

    throw new Error("Invalid type casting");
  });
};
