import { isNil, isDefined } from "./object";
import zip from "lodash/zip";
import flatten from "lodash/flatten";

const externalRegex = /^(?:(?:http|https):\/\/(?!(?:www\.)?docs.ninjabot.site)[\w./=?#-_]+)|(?:mailto:.+)$/;
export function isExternal(href) {
  return externalRegex.test(href);
}

const fileRegex = /^[\w./=:?#-]+[.]\w+$/;
export function isFile(href) {
  return fileRegex.test(href);
}

export function isEmptyOrNil(string) {
  if (typeof string !== "string") return true;
  return isNil(string) || string.trim().length === 0;
}

const logPrefix = "docs.ninjabot.site";
export const log = message => console.log(`[${logPrefix}] ${message}`);

export const addMissingUnit = dimension =>
  isNaN(dimension) ? dimension : `${dimension}px`;

export const multiplyDimension = (dimension, scalar) => {
  if (typeof dimension === "number") return dimension * scalar;
  else if (!isNaN(dimension)) return Number.parseFloat(dimension) * scalar;
  else {
    const dimensionRegex = /^([0-9]*\.?[0-9]*)([A-Za-z%]+)$/g;
    const matches = dimensionRegex.exec(dimension);
    return `${(Number.parseFloat(matches[1]) * scalar).toFixed(3)}${
      matches[2]
    }`;
  }
};

// ? ===============
// ? Regex functions
// ? ===============

export function splitFragments(string, regex) {
  const excludedFragments = string.split(regex);
  const matchedFragments = allMatches(string, regex);
  return flatten(zip(excludedFragments, matchedFragments)).filter(isDefined);
}

export function remakeRegex(source) {
  return new RegExp(source.source, source.flags);
}

export function allMatches(string, regex) {
  regex = remakeRegex(regex);
  let matches = [];
  let currentMatch;
  do {
    currentMatch = regex.exec(string);
    if (currentMatch) matches.push(currentMatch[0]);
  } while (currentMatch);
  return matches;
}
