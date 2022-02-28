import Image from 'next/image'

import Button from '@/components/forms/button'

import type { Card as CardType } from '@/models/index'

import styles from '@/styles/components/home/card.module.scss'

type CardProps = {
	card: CardType
}

const Card = (props: CardProps) => {
	const { card } = props

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
			<Button className={styles.button}>Select card</Button>
		</div>
	)
}

export default Card
