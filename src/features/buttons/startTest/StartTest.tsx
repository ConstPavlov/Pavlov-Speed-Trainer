import React, { FC } from 'react'
import { IoPlay } from 'react-icons/io5'
import { StartTestProps } from './startTest-inteerface'
import { CustomButton } from '../../../shared'

const StartTest: FC<StartTestProps> = React.memo(({ startTrainer }) => {
	const handleClick = () => {
		startTrainer()
	}
	console.log('StartTest button render')
	return (
		<div onClick={handleClick}>
			<CustomButton>
				<IoPlay />
			</CustomButton>
		</div>
	)
})

export default StartTest
