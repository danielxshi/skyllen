import { useState, useEffect } from "react";
import en from "@/src/i18n/en";
import ch from "@/src/i18n/ch";

export function getLocale() {
  return localStorage.getItem("locale") ?? "en";
}

export function toggleLocale() {
  const nextLocale = getLocale() === "en" ? "ch" : "en";
  localStorage.setItem("locale", nextLocale);
}

export function getLocalizedMessages() {
  return messages[getLocale()];
}

export const messages = { en, ch };
