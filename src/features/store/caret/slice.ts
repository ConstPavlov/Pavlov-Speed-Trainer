import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICaretPosition } from './types'

const initialState: ICaretPosition = {
	left: 0,
	top: 0
}

const caretSlice = createSlice({
	name: 'caret',
	initialState,
	reducers: {
		setCaretPosition: (
			state,
			action: PayloadAction<{ left: number; top: number }>
		) => {
			state.left = action.payload.left
			state.top = action.payload.top
		},
		resetCaretPosition: (state) => {
			state.left = 0
			state.top = 0
		}
	}
})

export const { setCaretPosition, resetCaretPosition } = caretSlice.actions

export default caretSlice.reducer
