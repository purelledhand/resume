import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export interface Translation {
  [key: string]: string;
}

export enum SupportLanguage {
  EN = 'en',
  KR = 'kr',
}

const DEFAULT_LANGUAGE = SupportLanguage.EN;

i18next
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANGUAGE,
    resources: {},
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      prefixEscaped: '\\',
      prefix: '{',
      suffix: '}',
    },
  });

export const getTranslation = async (locale: string) => {
  let translation;

  try {
    translation = await import(`../../i18n/${locale}/strings.json`);
  } catch (e) {
    translation = await import(`../../i18n/${DEFAULT_LANGUAGE}/strings.json`);
  }

  return translation;
};

export const initializeI18next = async (locale: string, translation: Translation) => {
  i18next.addResourceBundle(locale, 'translation', translation);
  i18next.changeLanguage(locale);
  return i18next;
};

export const getLocale = () => {
  const userLanguage = navigator.language.substring(0, 2) as SupportLanguage;

  return Object.values(SupportLanguage).includes(userLanguage) ? userLanguage : DEFAULT_LANGUAGE;
};
