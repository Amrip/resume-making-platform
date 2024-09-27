import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import globalStore from './globalStore';
const reduxModel = new RcReduxModel([globalStore]);
const reduceList = combineReducers(reduxModel.reducers);

export default configureStore({
  reducer: reduceList,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxModel.thunk, logger),
});
