/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './constants';

export function changeLocale(languageLocale) {
  console.log("changeLocale===" + languageLocale);
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
