import React from 'react'
import styles from './TextQuantityButtons.module.scss'
import { useDispatch } from 'react-redux'
import ButtonStyleTwo from '../../../shared/buttons/buttonTwo/ButtonStyleTwo'

import { setStopGame, setText } from '../../store/game/slice'
import { resetTimer } from '../../store/timer/slice'
import { resetAnswers, setIsFinal, setValue } from '../../store/analize/slice'
import { resetCaretPosition } from '../../store/caret/slice'

type TypeQuantityData = {
	quant: number
}
export const quntityData: TypeQuantityData[] = [
	{ quant: 15 },
	{ quant: 25 },
	{ quant: 30 }
]
// Кнопка для выбора колличества слов во время тренировки
const TextQuantityButtons = React.memo(() => {
	const dispatch = useDispatch()

	const handleClick = (quant: number) => {
		dispatch(resetTimer())
		dispatch(setText(quant))
		dispatch(resetAnswers())
		dispatch(setIsFinal(false))

		dispatch(setStopGame())
		dispatch(setValue(''))
		dispatch(resetCaretPosition())
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.btnWrrapper}>
				{quntityData.map(({ quant }: any) => (
					<ButtonStyleTwo key={quant} onClick={() => handleClick(quant)}>
						{quant}
					</ButtonStyleTwo>
				))}
			</div>
			<h3 className={styles.subtitle}>
				Выберете колличество <br /> слов
			</h3>
		</div>
	)
})

export default TextQuantityButtons
