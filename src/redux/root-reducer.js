import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer, wisherReducer, wishesReducer } from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['wisher', 'user']
};

const rootReducer = combineReducers({
  user: userReducer,
  wisher: wisherReducer,
  wishes: wishesReducer,
});

export default persistReducer(persistConfig, rootReducer);
