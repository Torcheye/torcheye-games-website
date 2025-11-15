import { en } from "./en";
import { zh } from "./zh";

export const languages = {
  en: "English",
  zh: "中文",
};

export const defaultLang = "en";

export const ui = {
  en,
  zh,
} as const;

export type SupportedLanguage = keyof typeof ui;

/**
 * Extracts the locale from a URL pathname
 * @param url - The URL object or pathname string
 * @returns The locale code ("en" or "zh")
 */
export function getLocaleFromUrl(url: URL | string): SupportedLanguage {
  const pathname = typeof url === "string" ? url : url.pathname;
  const segments = pathname.split("/").filter(Boolean);

  // Check if first segment is a supported locale
  const firstSegment = segments[0];
  if (firstSegment && firstSegment in ui) {
    return firstSegment as SupportedLanguage;
  }

  return defaultLang;
}

/**
 * Returns the translation object for the given locale
 * @param lang - The locale code
 * @returns The translation object
 */
export function useTranslations(lang: SupportedLanguage = defaultLang) {
  return ui[lang] || ui[defaultLang];
}

/**
 * Removes the locale prefix from a pathname
 * @param pathname - The pathname to process
 * @returns The pathname without locale prefix
 */
export function removeLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && firstSegment in ui) {
    return "/" + segments.slice(1).join("/");
  }

  return pathname;
}

/**
 * Adds the locale prefix to a pathname (unless it's the default locale)
 * @param pathname - The pathname to process
 * @param locale - The target locale
 * @returns The pathname with locale prefix if needed
 */
export function addLocalePrefix(pathname: string, locale: SupportedLanguage): string {
  // Don't add prefix for default locale (English)
  if (locale === defaultLang) {
    return pathname;
  }

  // Remove any existing locale prefix first
  const cleanPath = removeLocalePrefix(pathname);

  // Ensure the path starts with /
  const normalizedPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;

  return `/${locale}${normalizedPath}`;
}

/**
 * Gets the alternate locale URL for the current page
 * @param currentUrl - The current URL
 * @param targetLocale - The target locale
 * @returns The URL for the same page in the target locale
 */
export function getAlternateLocaleUrl(currentUrl: URL | string, targetLocale: SupportedLanguage): string {
  const currentPath = typeof currentUrl === "string" ? currentUrl : currentUrl.pathname;
  const currentLocale = getLocaleFromUrl(currentPath);

  if (currentLocale === targetLocale) {
    return currentPath;
  }

  const pathWithoutLocale = removeLocalePrefix(currentPath);
  return addLocalePrefix(pathWithoutLocale, targetLocale);
}

/**
 * Formats a date according to the given locale
 * @param date - The date to format
 * @param locale - The locale code
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: SupportedLanguage = defaultLang): string {
  const localeMap: Record<SupportedLanguage, string> = {
    en: "en-US",
    zh: "zh-CN",
  };

  return new Intl.DateTimeFormat(localeMap[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

/**
 * Returns the localized reading time text
 * @param minutes - Reading time in minutes
 * @param locale - The locale code
 * @returns Localized reading time string
 */
export function getReadingTime(minutes: number, locale: SupportedLanguage = defaultLang): string {
  return ui[locale].blog.readingTime(minutes);
}
