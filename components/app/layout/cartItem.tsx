import clsx from 'clsx'
import Image from 'next/image'
import { useEffect } from 'react'
import useSWR from 'swr'

import { useAppDispatch } from '@/store/app/hooks'
import {
	addItem,
	removeItem,
	setItemWithPrices,
} from '@/store/features/cartSlice'
import styles from '@/styles/components/app/layout/cartItem.module.scss'

import type { CardGetResponse } from '@/services/types'
type CartItemProps = {
	id: string
	quantity: number
}

const CartItem = (props: CartItemProps) => {
	const dispatch = useAppDispatch()
	const { id, quantity } = props
	const { data, error } = useSWR<CardGetResponse>('/cards/' + id)

	useEffect(() => {
		if (data && data.data) {
			dispatch(
				setItemWithPrices({
					id: data.data.id,
					price: data.data.cardmarket.prices.averageSellPrice,
				})
			)
		}
	}, [data])

	// TODO: Improve with skeleton UI
	if (!data || !data.data) {
		return <div>Loading...</div>
	} else if (error) {
		return <div>Error!</div>
	}

	const card = data.data

	const isIncreaseValid = quantity < card.set.total

	const onIncreaseQuantity = () => {
		dispatch(addItem({ id, quantity: 1 }))
	}

	const onDecreaseQuantity = () => {
		dispatch(removeItem({ id, quantity: 1 }))
	}

	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image src={card.images.small} alt={card.name} layout="fill" />
			</div>
			<div className={styles.col}>
				<span className={styles.name}>{card.name}</span>
				<div className={styles.price}>
					<span className={styles.priceContent}>
						$ {card.cardmarket.prices.averageSellPrice}
					</span>
					<span className={styles.priceDescription}> per card</span>
				</div>
				<div className={styles.stock}>
					<span className={styles.stockContent}>
						{card.set.total}
					</span>
					<span className={styles.stockDescription}> cards left</span>
				</div>
			</div>
			<div className={styles.col}>
				<div className={styles.quantity}>
					<span>{quantity}</span>
					<div className={styles.quantityButtonContainer}>
						<button
							className={clsx(
								styles.quantityButton,
								styles.quantityButtonIncrease,
								!isIncreaseValid &&
									styles.quantityButtonDisabled
							)}
							disabled={!isIncreaseValid}
							onClick={onIncreaseQuantity}
						/>
						<button
							className={clsx(
								styles.quantityButton,
								styles.quantityButtonDecrease,
								quantity === 1 && styles.quantityButtonRemove
							)}
							onClick={onDecreaseQuantity}
						/>
					</div>
				</div>
				<div className={styles.totalPrice}>
					<span className={styles.totalPriceDescription}>price</span>
					<span className={styles.totalPriceContent}>
						{card.cardmarket.prices.averageSellPrice}
					</span>
				</div>
			</div>
		</div>
	)
}

export default CartItem
