import configureStore from 'redux-mock-store'
import React from 'react'
import { RootState } from '../../store/store'
import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'
import TextQuantityButtons from './TextQuantityButtons'
import { resetTimer } from '../../store/timer/slice'
import { setStopGame, setText } from '../../store/game/slice'
import { resetAnswers, setIsFinal, setValue } from '../../store/analize/slice'
import { resetCaretPosition } from '../../store/caret/slice'

const mockStore = configureStore<RootState>([])

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => mockDispatch
}))

describe('TestQuantityButtons', () => {
	let store: ReturnType<typeof mockStore>
	beforeEach(() => {
		store = mockStore()
	})

	it('должен корректно рендерить кнопки с количеством слов', () => {
		const quantityData = [{ quant: '15' }, { quant: '25' }, { quant: '30' }]
		render(
			<Provider store={store}>
				<TextQuantityButtons />
			</Provider>
		)

		quantityData.forEach(({ quant }) => {
			expect(screen.getByText(quant)).toBeInTheDocument
		})
	})
	it('должен вызывать корректные действия при нажатии на кнопку', () => {
		render(
			<Provider<any> store={store}>
				<TextQuantityButtons />
			</Provider>
		)
		fireEvent.click(screen.getByText('30'))

		expect(mockDispatch).toHaveBeenCalledWith(resetTimer())
		expect(mockDispatch).toHaveBeenCalledWith(setText(30))
		expect(mockDispatch).toHaveBeenCalledWith(resetAnswers())
		expect(mockDispatch).toHaveBeenCalledWith(setIsFinal(false))
		expect(mockDispatch).toHaveBeenCalledWith(setStopGame())
		expect(mockDispatch).toHaveBeenCalledWith(setValue(''))
		expect(mockDispatch).toHaveBeenCalledWith(resetCaretPosition())
	})
})
