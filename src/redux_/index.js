import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import search from './reducers';

const preloadedState = {val : 0}
// const reducer = {rootReducer}

const store = configureStore({
  reducer : search,
  middleware: [ ...getDefaultMiddleware()],
  enhancers: [],
})

export default store;
