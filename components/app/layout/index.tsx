import CartButton from '@/components/app/layout/cartButton'
import CartModal from '@/components/app/layout/cartModal'
import ScrollFade from '@/components/app/layout/scrollFade'
import TopNav from '@/components/app/layout/topNav'
import { useAppSelector } from '@/store/app/hooks'
import styles from '@/styles/components/app/layout/index.module.scss'
import { useState } from 'react'

const Layout: React.FC = (props) => {
	const { children } = props
	const { isLoading } = useAppSelector((state) => state.loading)
	const [isCartModalOpen, setCartModalOpen] = useState(true)

	return (
		<>
			<CartModal
				isOpen={isCartModalOpen}
				onRequestClose={() => setCartModalOpen(false)}
			/>
			<TopNav />
			<div className={styles.container}>
				{isLoading && <div className={styles.loading} />}
				{children}
			</div>
			<CartButton
				onClick={() => {
					setCartModalOpen(true)
				}}
			/>
			<ScrollFade />
		</>
	)
}

export default Layout
