import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const timerData = (state: RootState) => state.timer
