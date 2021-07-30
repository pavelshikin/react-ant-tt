import { appTypes } from '../types'
import * as postActions from './postActions'

export const showLoader = () => {
  return {
    type: appTypes.SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type: appTypes.HIDE_LOADER
  }
}

export const actions = {
  postActions,
}

