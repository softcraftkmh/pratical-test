import styles from '@/styles/components/app/layout/topNav.module.scss'
import Image from 'next/image'

import Link from 'next/link'

const TopNav = () => {
	return (
		<nav className={styles.main}>
			<div className={styles.top}>
				<Link href="/">
					<a className={styles.content}>
						<p className={styles.title}>TCG Marketplace</p>
						<div className={styles.logo}>
							<Image
								src="/assets/logo.svg"
								alt="Logo"
								layout="fill"
							/>
						</div>
					</a>
				</Link>
			</div>
		</nav>
	)
}

export default TopNav
