import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import loadingReducer from "../features/loadingSlice";

export function makeStore() {
	return configureStore({
		reducer: { loading: loadingReducer },
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

export default store;
