import React from 'react'
import { useDispatch } from 'react-redux'
import { CustomButton } from '../../../shared'
import { toggleBanner } from '../../store/banner/slice'

import { setNumbers } from '../../store/game/slice'

// Кнопка для перетасовки слов с цифрами по алгоритму
const TextNumber = () => {
	const dispatch = useDispatch()

	const handleNewText = () => {
		dispatch(setNumbers())
		dispatch(toggleBanner(true))
	}
	return <CustomButton onClick={handleNewText}>123...</CustomButton>
}

export default TextNumber
