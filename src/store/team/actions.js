import { SAVE_DATA } from './types';

export const saveData = (data) => ({ type: SAVE_DATA, payload: data });

export default saveData;
