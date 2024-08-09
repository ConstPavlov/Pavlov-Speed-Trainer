import React, { forwardRef } from 'react'
import { IButton } from '../button/button.interface'
import styles from './ButtonStyleTwo.module.scss'

const ButtonStyleTwo = <HTMLButtonElement, IButton>({ ...props }) => {
	const { children, ...rest } = props

	return (
		<button {...rest} className={styles.btnSec}>
			{children}
		</button>
	)
}

export default ButtonStyleTwo
