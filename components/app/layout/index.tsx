import ScrollFade from '@/components/app/layout/scrollFade'
import TopNav from '@/components/app/layout/topNav'
import { useAppSelector } from '@/store/app/hooks'
import styles from '@/styles/components/app/layout/index.module.scss'

const Layout: React.FC = (props) => {
	const { children } = props
	const { isLoading } = useAppSelector((state) => state.loading)

	return (
		<>
			<TopNav />
			<div className={styles.container}>
				{isLoading && <div className={styles.loading} />}
				{children}
			</div>
			<ScrollFade />
		</>
	)
}

export default Layout
