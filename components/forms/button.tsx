import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import styles from '@/styles/components/app/forms/button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string
}

const Button: React.FC<ButtonProps> = (props) => {
	const { className, children, ...others } = props

	return (
		<button className={clsx(styles.container, className)} {...others}>
			{children}
		</button>
	)
}

export default Button
