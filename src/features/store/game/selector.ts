import { RootState } from '../store'

export const selectTextOfGame = (state: RootState) => state.game.textOfGame
