import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchCache from './searchCacheSlice';

const store = configureStore({
	reducer: {
		app: appSlice,
		searchCache: searchCache,
	},
});

export default store;
