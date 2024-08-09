import React from 'react'
import styles from './Game.module.scss'
import {
	analizeData,
	bannerData,
	compareValue,
	getCalculateData,
	randomizer,
	setIsFinal,
	setTempText,
	timerData,
	toggleBanner
} from '../../features/index'
import { strs } from '../../shared'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store/store'
import { startTimer } from '../../features/store/timer/slice'
import { setStartGame } from '../../features/store/game/slice'
import { useDispatch } from 'react-redux'
import { useCaretPosition } from '../../features/hooks/useCaretka'
import { useInputEvents } from '../../features/hooks/useInputEvents'
import Caretka from '../../features/caretka/Caretka'

import { useInputRefContext } from '../../app/context/InputRefContext'
import { changeColor } from '../utils/change-color'
import Bunner from '../../features/bunner/Bunner'
import { setToLS } from '../../features/utils/setToLS'

// Консоль тренинга и одновременно инпут
const Game = () => {
	const dispatch = useDispatch()

	const isMounted = React.useRef<boolean>(false)
	const spanRefs = React.useRef<(HTMLSpanElement | null)[]>([])

	const { inputRef, focusInput } = useInputRefContext()

	const { textOfGame } = useSelector((state: RootState) => state.game)
	const { isBanner } = useSelector(bannerData)
	const { value, answers } = useSelector(analizeData)
	const { duration } = useSelector(timerData)

	const { updateCaretPosition, setCaretPosition } = useCaretPosition(
		value,
		spanRefs
	)

	const { handleInputChange, handleKeyDown } = useInputEvents({
		inputRef,
		updateCaretPosition
	})

	React.useEffect(() => {
		if (isMounted.current) {
			if (!textOfGame) {
				const text = randomizer(strs, 25)
				const jsonObj = JSON.stringify(text)
				setToLS(jsonObj, 'text')
				// setToLS([], 'results')
			}
		}
		isMounted.current = true
	}, [textOfGame])

	React.useEffect(() => {
		updateCaretPosition()
	}, [value, textOfGame, compareValue, answers])
	React.useEffect(() => {
		if (textOfGame.length > 0) {
			dispatch(setTempText(textOfGame.join(' ')))
		}
	}, [textOfGame, dispatch])

	React.useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'Enter') {
				focusInput()
			}
		}
		window.addEventListener('keydown', handleKeyPress)
		return () => {
			window.removeEventListener('keydown', handleKeyPress)
		}
	}, [focusInput])

	const handleStartGame = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			console.log(event.target.value)
			dispatch(getCalculateData(duration))
			dispatch(setIsFinal(false))
			dispatch(compareValue(event.target.value))
			handleInputChange(event)
			setCaretPosition({ left: 0, top: 0 })
			dispatch(toggleBanner(true))
			dispatch(startTimer())
			dispatch(setStartGame())
		},
		[handleInputChange, setCaretPosition, compareValue, value]
	)

	return (
		<div className={styles.game}>
			<Bunner />
			<div className={styles.WrapperGame}>
				<div className={styles.trainerTextWrapper}>
					{textOfGame &&
						isBanner &&
						textOfGame
							.join(' ')
							.split('')
							.map((char: string, index: number) => (
								<span
									style={{ color: changeColor(index, answers) }}
									className={styles.trainerText}
									ref={(el) => (spanRefs.current[index] = el)}
									key={`${char}-${index}`}
								>
									{char}
								</span>
							))}
					{isBanner && (
						<input
							ref={inputRef}
							className={styles.input}
							value={value}
							onChange={handleStartGame}
							onKeyDown={handleKeyDown}
							type='text'
						/>
					)}
					{isBanner && <Caretka />}
				</div>
			</div>
		</div>
	)
}

export default Game
