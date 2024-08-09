import { configureStore } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import game from './game/slice'
import timer from './timer/slice'
import banner from './banner/slice'
import analize from './analize/slice'
import caret from './caret/slice'

export const store = configureStore({
	reducer: {
		game,
		timer,
		analize,
		banner,
		caret
	}
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
