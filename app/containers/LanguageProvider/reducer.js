/*
 *
 * LanguageProvider reducer
 *
 */

/* eslint-disable */

import produce from 'immer';

import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

export const initialState = {
  locale: DEFAULT_LOCALE,
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        console.log("languageProviderReducer==" + CHANGE_LOCALE)
        draft.locale = action.locale;
        //state.locale = 'de';
        break;
    }
  });

export default languageProviderReducer;
