import { createSlice } from "@reduxjs/toolkit";

export type LoadingState = {
	isLoading: boolean;
};

const initialState: LoadingState = {
	isLoading: false,
};

export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		showLoading: (state) => {
			state.isLoading = true;
		},
		hideLoading: (state) => {
			state.isLoading = false;
		},
	},
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
