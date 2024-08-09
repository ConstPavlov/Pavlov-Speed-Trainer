import React, { FC } from 'react'

import { FaStop } from 'react-icons/fa'
import { StopTestProps } from './resetTest-interface'
import { useDispatch } from 'react-redux'
import { CustomButton } from '../../../shared'

const ResetTest: FC<StopTestProps> = React.memo(({ stopTrainer }) => {
	const handleClick = () => {
		stopTrainer()
	}
	console.log('ResetTest button render')
	return (
		<div onClick={handleClick}>
			<CustomButton>
				<FaStop />
			</CustomButton>
		</div>
	)
})

export default ResetTest
