import { useAppSelector } from '@/store/app/hooks'
import styles from '@/styles/components/app/layout/cartButton.module.scss'

type CartButtonProps = {
	onClick: () => void
}

const CartButton = (props: CartButtonProps) => {
	const { items } = useAppSelector((state) => state.cart)
	const { onClick } = props

	return (
		<button className={styles.container} onClick={onClick}>
			{!!items.length && (
				<span className={styles.itemsCount}>{items.length}</span>
			)}
			View Cart
		</button>
	)
}

export default CartButton
