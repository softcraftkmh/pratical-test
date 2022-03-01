import styles from '@/styles/components/home/filterInput.module.scss'
import { useField } from 'formik'

type FilterInputProps = {
	name: string
	placeholder: string
}

const FilterInput = (props: FilterInputProps) => {
	const [field] = useField(props.name)

	return (
		<input className={styles.container} type="text" {...field} {...props} />
	)
}

export default FilterInput
