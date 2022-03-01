import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Item = {
	id: string
	quantity: number
}

type ItemWithPrice = {
	id: string
	price: number
}

export type CartState = {
	items: Item[]
	itemsWithPrice: ItemWithPrice[]
}

const initialState: CartState = {
	items: [],
	itemsWithPrice: [],
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
		},
		removeItem: (state, action: PayloadAction<Item>) => {
			const { id, quantity } = action.payload
			const item = state.items.find((item) => item.id === id)
			if (item) {
				item.quantity -= quantity
				if (item.quantity <= 0) {
					state.items = state.items.filter((item) => item.id !== id)
					state.itemsWithPrice = state.itemsWithPrice.filter(
						(item) => item.id !== id
					)
				}
			}
		},
		// Note: this is a temporary solution to get the price of the item
		setItemWithPrices: (state, action: PayloadAction<ItemWithPrice>) => {
			const index = state.items.findIndex(
				(item) => item.id === action.payload.id
			)
			state.itemsWithPrice[index] = action.payload
		},
		clearAll: (state) => {
			state.items = []
			state.itemsWithPrice = []
		},
	},
})

export const { addItem, removeItem, setItemWithPrices, clearAll } =
	cartSlice.actions

export default cartSlice.reducer
