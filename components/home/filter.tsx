import { Form, Formik } from 'formik'
import Select from 'react-select'
import useSWR from 'swr'

import FilterInput from '@/components/home/filterInput'
import styles from '@/styles/components/home/filter.module.scss'

import type { StylesConfig } from 'react-select'
import type {
	RarityGetResponse,
	SetGetResponse,
	TypeGetResponse,
} from '@/services/types'

const customStyles: StylesConfig = {
	control: () => ({
		backgroundColor: 'white',
		display: 'flex',
		fontSize: '1.2rem',
	}),
	menu: (base) => ({ ...base, zIndex: 9999 }),
}

type FilterProps = {
	onSubmit: (query: string) => void
}

const Filter = (props: FilterProps) => {
	const { onSubmit } = props

	const { data: typeData } = useSWR<TypeGetResponse>('/types')
	const { data: rarity } = useSWR<RarityGetResponse>('/rarities')
	const { data: setData } = useSWR<SetGetResponse>('/sets')

	return (
		<Formik
			initialValues={{
				name: '',
				type: '',
				rarity: '',
				set: '',
			}}
			onSubmit={(v) => {
				const query = `?q=${v.name ? `name:${v.name}` : ''}${
					v.type ? ` type:${v.type}` : ''
				}${v.rarity ? ` rarity:${v.rarity}` : ''}${
					v.set ? ` set:${v.set}` : ''
				}`
				onSubmit(query)
			}}
		>
			{({ values, setFieldValue, errors }) => (
				<Form className={styles.container}>
					<FilterInput name="name" placeholder="Name..." />
					<Select
						name="type"
						options={typeData?.data?.map((type) => ({
							value: type,
							label: type,
						}))}
						styles={customStyles}
						components={{
							IndicatorSeparator: () => null,
						}}
						onChange={(v: any) => setFieldValue('type', v.value)}
						placeholder="Type"
					/>
					<Select
						name="rarity"
						options={rarity?.data?.map((rarity) => ({
							value: rarity,
							label: rarity,
						}))}
						styles={customStyles}
						components={{
							IndicatorSeparator: () => null,
						}}
						onChange={(v: any) => setFieldValue('rarity', v.value)}
						placeholder="Rarity"
					/>
					<Select
						name="set"
						options={setData?.data?.map((set) => ({
							value: set.id,
							label: set.name,
						}))}
						styles={customStyles}
						components={{
							IndicatorSeparator: () => null,
						}}
						onChange={(v: any) => setFieldValue('set', v.value)}
						placeholder="Set"
					/>
					<button type="submit" className={styles.submit} />
				</Form>
			)}
		</Formik>
	)
}

export default Filter
