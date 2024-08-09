import { createSlice } from '@reduxjs/toolkit'
import { getFromLS, getResultsLS } from '../../utils/getFromLS'
import { setToLS } from '../../utils/setToLS'
import { selectTextOfGame } from '../game/selector'
import { IAnalize, TypeAnswer } from './types'

const { results } = getResultsLS('results')
const initialState: IAnalize = {
	value: '',
	resultsData: results,
	answers: [{ numberOfWord: 0, isRight: null }],
	tempText: '',
	dataForCalculating: 30,
	mistakes: 0,
	wpm: 0,
	isFinal: false,
	right: 0
}

export const analizeSlice = createSlice({
	name: 'analize',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload
		},
		setTempText: (state, action) => {
			state.tempText = action.payload
		},

		compareValue: (state, action) => {
			const inputValue = action.payload
			const currentIndex = inputValue.length - 1
			const isRightCurrentWord =
				inputValue[currentIndex] === state.tempText[currentIndex]

			const answer: TypeAnswer = {
				numberOfWord: currentIndex,
				isRight: isRightCurrentWord
			}

			// Создаем новый массив для `answers`, чтобы React увидел изменения
			const newAnswers = [...state.answers]

			if (newAnswers[currentIndex]) {
				newAnswers[currentIndex] = answer
			} else {
				newAnswers.push(answer)
			}

			// Обновляем состояние с новым массивом
			state.answers = newAnswers
		},
		getCalculateData: (state, action) => {
			state.dataForCalculating = action.payload
		},
		calculateResult: (state) => {
			const timeInMinute = state.dataForCalculating / 60
			state.wpm = state.value.length / timeInMinute

			const missks = state.answers.filter((el) => el.isRight === false)

			state.mistakes = missks.length
			state.right = state.value.length - missks.length
		},
		saveResult: (state) => {
			const result = {
				id: state.resultsData.length,
				right: state.right,
				mistakes: state.mistakes,
				wpm: state.wpm,
				time: state.dataForCalculating
			}
			state.resultsData.push(result)
			const resultArray = state.resultsData
			setToLS(resultArray, 'results')
		},
		deleteAllResults: (state) => {
			state.resultsData = []
			setToLS([], 'results')
		},

		resetAnswers: (state) => {
			state.answers = [{ numberOfWord: 0, isRight: null }]
		},
		setIsFinal: (state, action) => {
			state.isFinal = action.payload
		}
	}
})

export const {
	compareValue,
	setTempText,
	setValue,
	resetAnswers,
	getCalculateData,
	calculateResult,
	saveResult,
	setIsFinal,
	deleteAllResults
} = analizeSlice.actions

export default analizeSlice.reducer
