import React from 'react'
import { useDispatch } from 'react-redux'
import ButtonStyleTwo from '../../../shared/buttons/buttonTwo/ButtonStyleTwo'
import {
	getCalculateData,
	resetAnswers,
	setIsFinal,
	setValue
} from '../../store/analize/slice'
import { resetCaretPosition } from '../../store/caret/slice'
import { setStopGame } from '../../store/game/slice'
import { resetTimer, setTimerDuration } from '../../store/timer/slice'
import styles from './TimesButtons.module.scss'

// Кнопки для выбора  времени тренировки
export const quantityTimer = [{ time: 15 }, { time: 30 }, { time: 60 }]
const TimesButtons = () => {
	const dispatch = useDispatch()

	const handleClickTime = React.useCallback(
		(time: number) => {
			dispatch(resetTimer())
			dispatch(resetAnswers())
			dispatch(setIsFinal(false))

			dispatch(setStopGame())
			dispatch(setValue(''))
			dispatch(resetCaretPosition())
			dispatch(setTimerDuration(time))
			dispatch(getCalculateData(time))
		},
		[dispatch]
	)
	return (
		<div className={styles.timesBtns}>
			<div className={styles.wrapper__btns}>
				{quantityTimer.map(({ time }) => (
					<ButtonStyleTwo key={time} onClick={() => handleClickTime(time)}>
						{time}
					</ButtonStyleTwo>
				))}
			</div>
			<h3 className={styles.subtitle}>Выберете время(сек.)</h3>
		</div>
	)
}

export default TimesButtons
