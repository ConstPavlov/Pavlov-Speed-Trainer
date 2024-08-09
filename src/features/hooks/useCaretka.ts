import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { setCaretPosition } from '../store/caret/slice'

// Хук для изменения позиции карентки по left и top вдоль сгенерированного текста , возвразает 		updateCaretPosition,и  setCaretPosition которые я использую в Game и Timer

export const useCaretPosition = (
	value: string,
	spanRefs: React.RefObject<(HTMLSpanElement | null)[]>
) => {
	const dispatch = useDispatch()
	const updateCaretPosition = useCallback(
		(index: number = value.length) => {
			if (spanRefs.current && spanRefs.current.length > 0) {
				const spanElements = spanRefs.current
				// Инициализируем начальные значения позиции
				let left = 0
				let top = 0

				if (index > 0 && spanElements[index - 1]) {
					const prevSpan = spanElements[index - 1]
					if (prevSpan && prevSpan.parentElement) {
						const rect = prevSpan.getBoundingClientRect()
						const parentRect = prevSpan.parentElement.getBoundingClientRect()

						const offsetLeft = rect.left - parentRect.left
						const offsetTop = rect.top - parentRect.top

						// Получаем отступы
						const computedStyle = window.getComputedStyle(prevSpan)
						const marginRight = parseInt(computedStyle.marginRight, 10)
						const marginLeft = parseInt(computedStyle.marginLeft, 10)

						// Вычисляем позицию каретки
						left = offsetLeft + rect.width + marginRight + marginLeft
						top = offsetTop

						const positon = { left, top }

						dispatch(setCaretPosition(positon))
					}
				} else {
					const firstSpan = spanElements[0]

					if (firstSpan && firstSpan.parentElement) {
						const rect = firstSpan.getBoundingClientRect()
						const parentRect = firstSpan.parentElement.getBoundingClientRect()

						const offsetLeft = rect.left - parentRect.left
						const offsetTop = rect.top - parentRect.top

						dispatch(
							setCaretPosition({
								left: offsetLeft,
								top: offsetTop
							})
						)
					}
				}
			}
		},
		[value, spanRefs]
	)

	return {
		updateCaretPosition,
		setCaretPosition
	}
}
