import { TOGGLE_LOCALE, DELETE_LOCALE } from './types';

export const toggleLocale = (locale) => ({ type: TOGGLE_LOCALE, locale });

export const deleteLocale = (index) => ({ type: DELETE_LOCALE, index });
