import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import type { Dict } from "./types";

const dictionaries: Record<Locale, Dict> = { pt, en, es };

export const getDict = (locale: Locale): Dict => dictionaries[locale];
export type { Dict };
