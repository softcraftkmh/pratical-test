import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Message = {
	type: 'success' | 'error' | 'info'
	text: string
}

export type UIState = {
	isLoading: boolean
	message?: Message
}

const initialState: UIState = {
	isLoading: false,
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showLoading: (state) => {
			state.isLoading = true
		},
		hideLoading: (state) => {
			state.isLoading = false
		},
		showMessage: (state, action: PayloadAction<Message>) => {
			state.message = action.payload
		},
		hideMessage: (state) => {
			state.message = undefined
		},
	},
})

export const { showLoading, hideLoading, showMessage, hideMessage } =
	uiSlice.actions

export default uiSlice.reducer
