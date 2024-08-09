import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { analizeData } from '../store/analize/selector'
import { setValue } from '../store/analize/slice'
import { IuseInputEvents } from './types'

// Хук ля корректной работы каретки когда мы нажимаем Backspace и Delete и другие клавиши и  тут мы используем updateCaretPosition из хука useCaretka для передвижения каретки
export const useInputEvents = ({
	inputRef,
	updateCaretPosition
}: IuseInputEvents) => {
	const { value } = useSelector(analizeData)
	const dispatch = useDispatch()
	const handleInputChange = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const inputValue = event.target.value
			const caretIndex = inputRef.current?.selectionStart ?? inputValue.length
			dispatch(setValue(inputValue))
			updateCaretPosition(caretIndex)
		},
		[value, inputRef, updateCaretPosition]
	)

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			const input = inputRef.current
			if (input) {
				const { key } = event
				const start = input.selectionStart ?? 0

				switch (key) {
					case 'Backspace':
					case 'Delete':
						// Let browser handle the default behavior
						setTimeout(() => {
							const newStart = input.selectionStart ?? 0

							updateCaretPosition(newStart)
						}, 0)
						break
					default:
						setTimeout(() => {
							const newStart = input.selectionStart ?? 0
							updateCaretPosition(newStart)
						}, 0)
						break
				}
			}
		},
		[value, setValue, inputRef, updateCaretPosition]
	)
	return { handleInputChange, handleKeyDown }
}
