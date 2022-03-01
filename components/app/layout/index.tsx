import { useState } from 'react'

import CartButton from '@/components/app/layout/cartButton'
import CartModal from '@/components/app/layout/cartModal'
import MessageModal from '@/components/app/layout/messageModal'
import ScrollFade from '@/components/app/layout/scrollFade'
import TopNav from '@/components/app/layout/topNav'
import { useAppSelector } from '@/store/app/hooks'
import styles from '@/styles/components/app/layout/index.module.scss'

const Layout: React.FC = (props) => {
	const { children } = props
	const { isLoading } = useAppSelector((state) => state.ui)
	const [isCartModalOpen, setCartModalOpen] = useState(false)

	return (
		<>
			<CartModal
				isOpen={isCartModalOpen}
				onRequestClose={() => setCartModalOpen(false)}
			/>
			<MessageModal />
			<TopNav />
			{/* TODO: Separate component */}
			<div className={styles.container}>
				{isLoading && <div className={styles.loading} />}
				{children}
			</div>
			{!isCartModalOpen && (
				<CartButton
					onClick={() => {
						setCartModalOpen(true)
					}}
				/>
			)}
			<ScrollFade />
		</>
	)
}

export default Layout
