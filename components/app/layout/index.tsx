import CartButton from '@/components/app/layout/cartButton'
import CartModal from '@/components/app/layout/cartModal'
import ScrollFade from '@/components/app/layout/scrollFade'
import TopNav from '@/components/app/layout/topNav'
import { useAppSelector } from '@/store/app/hooks'
import styles from '@/styles/components/app/layout/index.module.scss'

const Layout: React.FC = (props) => {
	const { children } = props
	const { isLoading } = useAppSelector((state) => state.loading)

	return (
		<>
			<CartModal />
			<TopNav />
			<div className={styles.container}>
				{isLoading && <div className={styles.loading} />}
				{children}
			</div>
			<CartButton />
			<ScrollFade />
		</>
	)
}

export default Layout
