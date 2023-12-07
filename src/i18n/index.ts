import { useState, useEffect } from "react";
import en, { en_project0, en_project1, en_project2 } from "@/src/i18n/en";
import ch, { ch_project0, ch_project1, ch_project2 } from "@/src/i18n/ch";

export function getLocale() {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage.getItem("locale") ?? "en";
  } else {
    return "en";
  }
}

export function toggleLocale() {
  const nextLocale = getLocale() === "en" ? "ch" : "en";
  localStorage?.setItem("locale", nextLocale);
}

export function getLocalizedMessages() {
  return messages[getLocale()];
}

// index should be 0, 1, or 2
// 0: 618 Carnarvon
// 1: 1650 West 2nd
// 2: Pendrell St
export function getLocalizedProjects() {
  return projects[getLocale()];
}

export const messages = { en, ch };

// write a 2d array with 3 element, each element is a {en, ch} object
export const projects = {
  "en": 
  {0: en_project0, 1: en_project1, 2: en_project2},
  "ch": 
  {0: ch_project0, 1: ch_project1, 2: ch_project2},
};

// export const projects2 = [
//   {en_project0, ch_project0},
//   {en_project1, ch_project1},
//   {en_project2, ch_project2},
// ];

// projects[0].TITLE;
