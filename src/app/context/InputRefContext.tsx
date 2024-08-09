import React, { createContext, useContext, useRef } from 'react'

interface InputRefContextType {
	inputRef: React.RefObject<HTMLInputElement>
	focusInput: () => void
	blurInput: () => void
}

// Создаем контект
const InputRefContext = createContext<InputRefContextType | null>(null)

// Провайдер контекста, который будет оборачивать компоненты
export const InputRefProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const focusInput = () => {
		if (inputRef.current) {
			console.log('Фокус инпут')
			inputRef.current.focus()
		} else {
			console.log('Input ref is null')
		}
	}
	const blurInput = () => {
		if (inputRef.current) {
			console.log('убираем фокусс инпут')
			inputRef.current.blur()
		} else {
			console.log('Input ref is null')
		}
	}
	return (
		<InputRefContext.Provider value={{ inputRef, focusInput, blurInput }}>
			{children}
		</InputRefContext.Provider>
	)
}

export const useInputRefContext = () => {
	const context = useContext(InputRefContext)
	if (!context) {
		throw new Error('err context InputRefContext')
	}
	return context
}
