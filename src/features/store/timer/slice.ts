import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITimer } from './types'

const initialState: ITimer = {
	isRunning: false,
	duration: 30,
	timeLeft: 30
}

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		startTimer: (state) => {
			state.isRunning = true
		},
		resetTimer: (state) => {
			state.isRunning = false
			state.duration = 30
			state.timeLeft = 30
		},
		setTimerDuration: (state, action) => {
			state.isRunning = false
			state.timeLeft = action.payload
			state.duration = action.payload
		},
		setTimeLeft: (state) => {
			state.timeLeft = state.timeLeft - 1
		},
		setIsRunning: (state) => {
			state.isRunning = false
		}
	}
})

export const {
	startTimer,
	resetTimer,
	setTimerDuration,
	setTimeLeft,
	setIsRunning
} = timerSlice.actions

export default timerSlice.reducer
