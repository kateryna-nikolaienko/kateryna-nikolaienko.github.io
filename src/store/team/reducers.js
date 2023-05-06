import { SAVE_DATA } from './types';

const initialState = {
  teamArray: []
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        ...state,
        teamArray: action.payload
      };
    }

    default:
      return state;
  }
};

export default teamReducer;
