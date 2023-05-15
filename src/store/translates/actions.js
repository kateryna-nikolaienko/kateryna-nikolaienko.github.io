import i18n from '../../i18n';
import { toggleLocale } from './reducers';

export const changeLanguage = (language) => {
  return (dispatch) => {
    i18n.changeLanguage(language);
    dispatch(toggleLocale(language));
  };
}; 

export default changeLanguage;
