import Image from 'next/image'

import Button from '@/components/forms/button'

import type { Card as CardType } from '@/models/index'

import styles from '@/styles/components/home/card.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/app/hooks'
import { addItem } from '@/store/features/cartSlice'
import clsx from 'clsx'

type CardProps = {
	card: CardType
}

const Card = (props: CardProps) => {
	const { card } = props
	const dispatch = useAppDispatch()
	const cart = useAppSelector((state) => state.cart)
	const isSelected = cart.items.find((item) => item.id === props.card.id)

	const handleSelectCard = () => {
		if (isSelected) {
			return
		} else {
			dispatch(
				addItem({
					id: props.card.id,
					quantity: 1,
				})
			)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image src={card.images.large} layout="fill" alt={card.name} />
			</div>
			<div className={styles.content}>
				<span className={styles.name}>{card.name}</span>
				<span className={styles.rarity}>{card.rarity}</span>
				<div className={styles.priceQuantityContainer}>
					<span className={styles.price}>
						$ {card.cardmarket.prices.averageSellPrice}
					</span>
					<span className={styles.quantity}>
						{card.set.total} left
					</span>
				</div>
			</div>
			<Button
				className={clsx(
					styles.button,
					isSelected && styles.buttonSelected
				)}
				onClick={handleSelectCard}
			>
				{isSelected ? 'Selected' : 'Select card'}
			</Button>
		</div>
	)
}

export default Card
