import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { InputRefProvider } from '../../app/context/InputRefContext'
import { analizeData, setIsFinal, timerData } from '../../features'
import Results from '../../features/results/Results'

import { Logo } from '../../shared'
import Game from '../../widgets/game/Game'
import OptionsText from '../../widgets/options/OptionsText'
import Timer from '../../widgets/timer/Timer'

import styles from './Home.module.scss'

const Home: FC = () => {
	const { isRunning, timeLeft } = useSelector(timerData)
	const { mistakes, wpm, isFinal } = useSelector(analizeData)
	const dispatch = useDispatch()
	React.useEffect(() => {
		if (timeLeft === 0) {
			setTimeout(() => {
				dispatch(setIsFinal(true))
			}, 1000)
		}
	}, [timeLeft])
	return (
		<div className={styles.home}>
			<Logo />
			<motion.h1
				className={styles.title}
				initial={{ opacity: 0, scale: 0.5, color: '#47a0ff' }} // Начальное состояние
				animate={{ opacity: 1, scale: 1, color: '#000' }} // Конечное состояние
				transition={{ duration: 2, ease: 'easeInOut' }} // Параметры анимации
			>
				Добро пожаловать в тренажер. Выберите опции и начните улучшать скорость
				своего печатания!
			</motion.h1>
			{isFinal === true && (
				<div className={styles.modal}>
					<div className={styles.wrapper}>
						<h3 className={styles.wpm}>Твой WPM: {wpm !== 0 ? wpm : ''}</h3>
						<h3 className={styles.mistakes}>
							Допущено ошибок: {wpm !== 0 ? mistakes : ''}
						</h3>
					</div>
				</div>
			)}
			<InputRefProvider>
				<OptionsText />
				<Timer />
				<Game />
				<Results />
			</InputRefProvider>
		</div>
	)
}

export default Home
