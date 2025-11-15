import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { SupportedLanguage } from "@i18n/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, locale: SupportedLanguage = "en") {
  const localeMap: Record<SupportedLanguage, string> = {
    en: "en-US",
    zh: "zh-CN",
  };

  return Intl.DateTimeFormat(localeMap[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function readingTime(html: string, locale: SupportedLanguage = "en") {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();

  const readingTimeText: Record<SupportedLanguage, string> = {
    en: `${readingTimeMinutes} min read`,
    zh: `${readingTimeMinutes} 分钟阅读`,
  };

  return readingTimeText[locale];
}
