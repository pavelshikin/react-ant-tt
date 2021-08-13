import { appTypes } from '../types';

const initialState = {
  auth: {
    user: null,
    isAuth: false
  },
  loading: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.SHOW_LOADER:
      return { ...state, loading: true };
    case appTypes.HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
