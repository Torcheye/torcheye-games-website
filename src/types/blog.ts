import type { CollectionEntry } from "astro:content";
import type { SupportedLanguage } from "@i18n/utils";

export type BlogEntry = CollectionEntry<"blog"> & {
  data: CollectionEntry<"blog">["data"] & {
    locale: SupportedLanguage;
  };
};
