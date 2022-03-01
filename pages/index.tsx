import { CardsGetResponse } from '@/services/types'
import useSWR from 'swr'

import styles from '@/styles/pages/home.module.scss'
import Card from '@/components/home/card'
import Filter from '@/components/home/filter'
import { useRouter } from 'next/router'
import { useState } from 'react'

type HomeProps = {
	initialCardsData: CardsGetResponse
}

const Home = (props: HomeProps) => {
	const router = useRouter()
	const [pageSize, setPageSize] = useState(12)

	const { data } = useSWR<CardsGetResponse>(
		router.query.q
			? `/cards?q=${router.query.q}&pageSize=${pageSize}`
			: `/cards?pageSize=${pageSize}`,
		{
			fallbackData: props.initialCardsData,
		}
	)

	if (!data) {
		return <div>Loading...</div>
	}

	const onShowMore = () => {
		setPageSize(pageSize + 12)
	}

	return (
		<>
			<Filter onSubmit={(filterQuery) => router.push(filterQuery)} />
			<div className={styles.container}>
				{data.data?.map((card) => (
					<Card key={card.id} card={card} />
				))}
			</div>
			<button className={styles.showMore} onClick={onShowMore}>
				show more
			</button>
		</>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(
		process.env.NEXT_PUBLIC_API_URL + '/cards?pageSize=12'
	)
	const data = await res.json()

	return {
		props: {
			initialCardsData: data,
		},
	}
}

export default Home
