import Modal from 'react-modal'

import CartItem from '@/components/app/layout/cartItem'
import { useAppSelector } from '@/store/app/hooks'
import styles from '@/styles/components/app/layout/cartModal.module.scss'
import { useDispatch } from 'react-redux'
import { clearAll } from '@/store/features/cartSlice'

type CartModalProps = {
	isOpen: boolean
	onRequestClose: () => void
}

const CartModal = (props: CartModalProps) => {
	const { isOpen, onRequestClose } = props

	const dispatch = useDispatch()

	const { items, itemsWithPrice } = useAppSelector((state) => state.cart)

	const onClearAll = () => {
		dispatch(clearAll())
		onRequestClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName={styles.overlay}
			className={styles.content}
		>
			<div className={styles.cartItems}>
				{items.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
			<div className={styles.checkOut}>
				<div className={styles.fade} />
				<div className={styles.checkOutInner}>
					<button className={styles.clearAll} onClick={onClearAll}>
						Clear all
					</button>
					<div className={styles.totalCards}>
						<span className={styles.totalCardsDescription}>
							Total cards
						</span>
						<span className={styles.totalCardsContent}>
							{items.reduce(
								(acc, item) => acc + item.quantity,
								0
							)}
						</span>
					</div>
					<div className={styles.totalPrice}>
						<span className={styles.totalPriceDescription}>
							Total price
						</span>
						<span className={styles.totalPriceContent}>
							{itemsWithPrice.reduce(
								(acc, item, index) =>
									acc + item.price * items[index].quantity,
								0
							)}
						</span>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default CartModal
