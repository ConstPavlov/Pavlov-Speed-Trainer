import React, { FC } from 'react'

import styles from './Options.module.scss'

import TextChanger from '../../features/buttons/text-changer/TextChanger'
import TextNumber from '../../features/buttons/text-number/TextNumber'
import TextQuantityButtons from '../../features/buttons/quantity/TextQuantityButtons'
import Helper from '../../features/buttons/help/Helper'

// Виджет разных опций тренинга
const OptionsText: FC = () => {
	return (
		<div className={styles.options}>
			<div className={styles.textBtns}>
				<TextChanger />
				<TextNumber />
				<Helper />
			</div>
			<TextQuantityButtons />
		</div>
	)
}

export default OptionsText
