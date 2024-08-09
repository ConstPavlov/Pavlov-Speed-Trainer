export type TypeAnswer = {
	numberOfWord: number
	isRight: boolean | null
}

export type TypeResultObj = {
	id: number
	right: number
	mistakes: number
	wpm: number
	time: number
}

export interface IAnalize {
	value: string
	resultsData: TypeResultObj[]
	answers: TypeAnswer[]
	tempText: string
	dataForCalculating: number
	mistakes: number
	wpm: number
	isFinal: boolean
	right: number
}
