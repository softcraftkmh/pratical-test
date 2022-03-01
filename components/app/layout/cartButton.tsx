import styles from '@/styles/components/app/layout/cartButton.module.scss'

type CartButtonProps = {
	onClick: () => void
}

const CartButton = (props: CartButtonProps) => {
	const { onClick } = props

	return (
		<button className={styles.container} onClick={onClick}>
			View Cart
		</button>
	)
}

export default CartButton
