import { CardsGetResponse } from '@/services/types'
import useSWR from 'swr'

import styles from '@/styles/pages/home.module.scss'
import Card from '@/components/home/card'
import Filter from '@/components/home/filter'
import { useRouter } from 'next/router'

const Home = () => {
	const router = useRouter()

	const { data } = useSWR<CardsGetResponse>(
		router.query.q
			? `/cards?q=${router.query.q}&pageSize=12`
			: '/cards?pageSize=12'
	)

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Filter onSubmit={(filterQuery) => router.push(filterQuery)} />
			<div className={styles.container}>
				{data.data?.map((card) => (
					<Card key={card.id} card={card} />
				))}
			</div>
		</>
	)
}

export default Home
