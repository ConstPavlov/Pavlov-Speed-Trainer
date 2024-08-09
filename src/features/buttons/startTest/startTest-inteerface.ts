import { AnyAction } from '@reduxjs/toolkit'

export interface StartTestProps {
	startTrainer: () => void
	disabled?: boolean
}
