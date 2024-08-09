import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { caretPositionData } from '../store/caret/selector'
import { ICaretka } from './caretka-interface'
import styles from './Caretka.module.scss'

// Кастомная  каретка
const Caretka: FC = () => {
	const position = useSelector(caretPositionData)
	return (
		<div
			className={styles.customCaret}
			style={{
				left: `${position.left}px`,
				top: `${position.top}px`
			}}
		></div>
	)
}

export default Caretka
