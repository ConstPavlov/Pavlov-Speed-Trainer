import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shuffle } from 'lodash'
import { strs } from '../../../shared'
import { numberShufle, randomizer } from '../../index'

import { getFromLS } from '../../utils/getFromLS'
import { setToLS } from '../../utils/setToLS'
import { IGame } from './types'

const { text } = getFromLS('text')
const initialState: IGame = {
	textOfGame: text || [],
	startGame: false,
	stopGame: true,
	quntityWords: 0
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setNumbers: (state) => {
			const baseQuantityWords =
				state.quntityWords === 0 ? 30 : state.quntityWords
			const newTextNum = randomizer(strs, baseQuantityWords)
			const newText = numberShufle(newTextNum)
			setToLS(newText, 'text')

			state.textOfGame = newText
		},
		setText: (state, action) => {
			state.quntityWords = action.payload
			const newText = randomizer(strs, action.payload)
			setToLS(newText, 'text')

			state.textOfGame = newText
		},
		setStartGame: (state) => {
			state.startGame = true
		},
		setStopGame: (state) => {
			state.stopGame = false
		}
	}
})

export const { setText, setNumbers, setStopGame, setStartGame } =
	gameSlice.actions

export default gameSlice.reducer
