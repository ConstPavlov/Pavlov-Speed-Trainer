export enum Status {
	LOADING = 'loading',
	ERROR = 'error',
	SUCCESS = 'success'
}

export interface IGame {
	textOfGame: string[]
	startGame: boolean
	stopGame: boolean
	quntityWords: number
}
