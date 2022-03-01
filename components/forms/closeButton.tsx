import clsx from 'clsx'
import React from 'react'

import styles from '@/styles/components/app/forms/modalCloseButton.module.scss'

type ModalCloseButtonProps = {
	onClick: () => void
	className?: string
}

const ModalCloseButton = (props: ModalCloseButtonProps) => {
	const { className, onClick } = props
	return (
		<button
			className={clsx(styles.container, className)}
			onClick={onClick}
		/>
	)
}

export default ModalCloseButton
