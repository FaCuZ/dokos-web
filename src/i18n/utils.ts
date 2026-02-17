import en from './en.json';
import es from './es.json';
import pt from './pt.json';
import zh from './zh.json';
import fr from './fr.json';
import hi from './hi.json';
import de from './de.json';
import ja from './ja.json';
import ru from './ru.json';
import ko from './ko.json';
import it from './it.json';
import tr from './tr.json';
import vi from './vi.json';
import id from './id.json';
import bn from './bn.json';
import th from './th.json';

export type Translations = typeof en;

export type Locale = 'en' | 'es' | 'pt' | 'zh' | 'fr' | 'hi' | 'de' | 'ja' | 'ru' | 'ko' | 'it' | 'tr' | 'vi' | 'id' | 'bn' | 'th';

export const locales: Locale[] = ['en', 'es', 'pt', 'zh', 'fr', 'hi', 'de', 'ja', 'ru', 'ko', 'it', 'tr', 'vi', 'id', 'bn', 'th'];

export const defaultLocale: Locale = 'en';

const translations: Record<Locale, Translations> = { en, es, pt, zh, fr, hi, de, ja, ru, ko, it, tr, vi, id, bn, th };

export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  zh: '中文',
  fr: 'Français',
  hi: 'हिन्दी',
  de: 'Deutsch',
  ja: '日本語',
  ru: 'Русский',
  ko: '한국어',
  it: 'Italiano',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
  bn: 'বাংলা',
  th: 'ไทย',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  zh: 'zh_CN',
  fr: 'fr_FR',
  hi: 'hi_IN',
  de: 'de_DE',
  ja: 'ja_JP',
  ru: 'ru_RU',
  ko: 'ko_KR',
  it: 'it_IT',
  tr: 'tr_TR',
  vi: 'vi_VN',
  id: 'id_ID',
  bn: 'bn_BD',
  th: 'th_TH',
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function getAlternateLinks(currentPath: string) {
  return locales.map((locale) => ({
    locale,
    href: `https://dokos.app${getLocalePath(locale)}${currentPath}`,
  }));
}
