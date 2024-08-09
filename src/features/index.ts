export { randomizer } from './helpers/randomizer'
export { numberShufle } from './helpers/number-shufle'

export { analizeData } from './store/analize/selector'
export {
	compareValue,
	setTempText,
	setValue,
	resetAnswers,
	getCalculateData,
	calculateResult,
	saveResult,
	setIsFinal,
	deleteAllResults
} from './store/analize/slice'
export { timerData } from './store/timer/selector'

// hooks

export { useCaretPosition } from './hooks/useCaretka'
export { useInputEvents } from './hooks/useInputEvents'

// banner

export { toggleBanner, bannerData } from './store/banner/slice'
// game
export {
	setText,
	setNumbers,
	setStopGame,
	setStartGame
} from './store/game/slice'

// caretka

export { caretPositionData } from './store/caret/selector'

export { setCaretPosition, resetCaretPosition } from './store/caret/slice'

// timer

export {
	resetTimer,
	setIsRunning,
	setTimeLeft,
	setTimerDuration,
	startTimer
} from './store/timer/slice'
