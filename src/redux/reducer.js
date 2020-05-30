import { ActionTypes } from './types'

const INITIAL_USER_STATE = {
  currentUser: null,
};
const INITIAL_WISHER_STATE = {
  wisher: null
};
const INITIAL_WISHES_STATE = {
  wishes: []
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
export const wisherReducer = (state = INITIAL_WISHER_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_WISHER:
      return {
        ...state,
        wisher: action.payload,
      };

    default:
      return state;
  }
};
export const wishesReducer = (state = INITIAL_WISHES_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_WISHES:
      return {
        ...state,
        wishes: action.payload,
      };

    default:
      return state;
  }
};


