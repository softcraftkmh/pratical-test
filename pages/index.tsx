import { CardGetResponse } from '@/services/types'
import useSWR from 'swr'

import styles from '@/styles/pages/home.module.scss'
import Card from '@/components/home/card'

const Home = () => {
	const { data, error } = useSWR<CardGetResponse>('/cards?pageSize=12')

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<div className={styles.container}>
			{data.data.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	)
}

export default Home
