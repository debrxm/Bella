import { ActionTypes } from './types'

export const setCurrentUser = (user) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const setWishes = (wishes) => ({
  type: ActionTypes.SET_WISHES,
  payload: wishes,
});
export const setWisher = (wisher) => ({
  type: ActionTypes.SET_WISHER,
  payload: wisher,
});
