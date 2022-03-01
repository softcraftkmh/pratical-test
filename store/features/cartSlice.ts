import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Item = {
	id: string
	quantity: number
}

export type CartState = {
	items: Item[]
	totalPrice: number
}

const initialState: CartState = {
	items: [],
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Item>) => {
			const { id, quantity } = action.payload
			const item = state.items.find((item) => item.id === id)
			if (item) {
				item.quantity += quantity
			} else {
				state.items.push({ id, quantity })
			}
			state.totalPrice += quantity * 100
		},
		removeItem: (state, action: PayloadAction<Item>) => {
			const { id, quantity } = action.payload
			const item = state.items.find((item) => item.id === id)
			if (item) {
				item.quantity -= quantity
				if (item.quantity <= 0) {
					state.items = state.items.filter((item) => item.id !== id)
				}
				state.totalPrice -= quantity * 100
			}
		},
	},
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
