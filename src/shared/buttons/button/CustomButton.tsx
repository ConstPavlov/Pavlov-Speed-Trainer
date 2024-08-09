import React, { FC, forwardRef, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import { IButton } from './button.interface'

const CustomButton = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
	const { children, ...rest } = props

	return (
		<button {...rest} ref={ref} className={styles.button}>
			{children}
		</button>
	)
})

export default CustomButton
