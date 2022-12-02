import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countrySlice from './countries/countries';
import detailslice from './countries/details';

const rootReducer = combineReducers({
  countrySlice,
  detailslice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
