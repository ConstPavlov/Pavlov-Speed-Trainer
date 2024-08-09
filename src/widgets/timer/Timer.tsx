import React, { useState, useEffect } from 'react'
import StartTest from '../../features/buttons/startTest/StartTest'
import ResetTest from '../../features/buttons/stopTest/ResetTest'
import styles from './Timer.module.scss'
import {
	calculateResult,
	resetAnswers,
	resetCaretPosition,
	resetTimer,
	saveResult,
	setIsFinal,
	setIsRunning,
	setStartGame,
	setTimeLeft,
	setTimerDuration,
	startTimer
} from '../../features/index'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
	setStopGame,
	setValue,
	timerData,
	toggleBanner
} from '../../features/index'
import { useInputRefContext } from '../../app/context/InputRefContext'
import TimesButtons from '../../features/buttons/times/TimesButtons'

// Виджет таймера, опций таймера , также включение алализатора теста и в конце калькуляцию и сохранение результатов в Local Storage
const Timer = () => {
	const { inputRef, focusInput, blurInput } = useInputRefContext()
	const dispatch = useDispatch()
	const { isRunning, timeLeft } = useSelector(timerData)

	const startTrainer = React.useCallback(() => {
		setTimeout(() => {
			focusInput()
		}, 0)

		dispatch(toggleBanner(true))
		dispatch(startTimer())
		dispatch(setStartGame())
	}, [inputRef])

	const stopTrainer = React.useCallback(() => {
		dispatch(resetTimer())
		dispatch(resetAnswers())
		dispatch(setIsFinal(false))

		dispatch(setStopGame())
		dispatch(setValue(''))
		dispatch(resetCaretPosition())
	}, [])

	const timesUp = React.useCallback(() => {
		setTimeout(() => {
			blurInput()
		}, 0)
		dispatch(toggleBanner(false))
		dispatch(calculateResult())
		dispatch(saveResult())
		dispatch(resetAnswers())

		dispatch(setStopGame())
		dispatch(setValue(''))
		dispatch(resetCaretPosition())
	}, [inputRef])

	useEffect(() => {
		if (timeLeft === 0) {
			timesUp()
			setTimeout(() => {
				dispatch(setTimerDuration(30))
			}, 1000)
		}
	}, [timeLeft, timesUp])

	useEffect(() => {
		if (isRunning && timeLeft > 0) {
			const timerId = setInterval(() => {
				dispatch(setTimeLeft())
			}, 1000)
			return () => clearInterval(timerId)
		} else if (timeLeft === 0) {
			dispatch(setIsRunning())
		}
	}, [isRunning, timeLeft])

	return (
		<div className={styles.wrapper}>
			<div className={styles.timeNumBlock}>
				<h2>{timeLeft === 0 ? 'Время вышло!' : ''}</h2>
				{timeLeft !== 0 && (
					<>
						<h1>{timeLeft}</h1>
						<span>секунд</span>
					</>
				)}
			</div>
			<div className={styles.innerBlock}>
				<div className={styles.baseBtns}>
					<StartTest startTrainer={startTrainer} disabled={isRunning} />
					<ResetTest stopTrainer={stopTrainer} />
				</div>
				<TimesButtons />
			</div>
		</div>
	)
}

export default Timer
