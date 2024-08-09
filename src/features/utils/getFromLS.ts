import { TypeResultObj } from '../store/analize/types'

export const getFromLS = (keyObj: string) => {
	const textLS = localStorage.getItem(keyObj)

	const text: string[] = textLS ? JSON.parse(textLS) : []

	return { text }
}

export const getResultsLS = (keyObj: string) => {
	const textLS = localStorage.getItem(keyObj)

	const results: TypeResultObj[] = textLS ? JSON.parse(textLS) : []

	return { results }
}
