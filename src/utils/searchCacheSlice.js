import { createSlice } from '@reduxjs/toolkit';

const searchCache = createSlice({
	name: 'searchCache',
	initialState: {},
	reducers: {
		setSearchCache: (state, action) => {
			// state = Object.assign(state, action.payload);
			return { ...state, ...action.payload };
		},
	},
});

export const { setSearchCache } = searchCache.actions;
export default searchCache.reducer;
