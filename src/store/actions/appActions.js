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

export const showError = text => {
  return {
    type: appTypes.SHOW_ERROR,
    payload: text
  };
};

export const hideError = () => {
  console.log('hise');
  return {
    type: appTypes.HIDE_ERROR
  };
};
