import React from 'react'
import { TbReload } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { CustomButton } from '../../../shared'

import { setText } from '../../store/game/slice'
import styles from './TextChanger.module.scss'

// Кнопка для смены текста на новый , передаём default 25 слов
const TextChanger = () => {
	const dispatch = useDispatch()

	const handleNewText = () => {
		dispatch(setText(25))
	}
	return (
		<CustomButton onClick={handleNewText}>
			<TbReload />
		</CustomButton>
	)
}

export default TextChanger
