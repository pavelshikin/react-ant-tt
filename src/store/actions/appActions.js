import { appTypes } from '../types';

export const showLoader = () => {
  return {
    type: appTypes.SHOW_LOADER
  };
};

export const hideLoader = () => {
  return {
    type: appTypes.HIDE_LOADER
  };
};
