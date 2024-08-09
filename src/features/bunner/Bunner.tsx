import { LuMousePointerClick } from 'react-icons/lu'

import React, { FC, SetStateAction } from 'react'
import styles from './Bunner.module.scss'
import { useDispatch } from 'react-redux'
import { toggleBanner } from '../store/banner/slice'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'

// Тут логика баннера который появляетсяя после первой отрисовки компонента и если Иговое поле не в фокусе

const Bunner: FC = () => {
	const dispatch = useDispatch()

	const { isBanner } = useSelector((state: RootState) => state.banner)

	const handleClick = () => {
		dispatch(toggleBanner(true))
	}
	return (
		<>
			{!isBanner && (
				<div onClick={handleClick} className={styles.banner}>
					<p className={styles.title}>
						Нажмите сюда чтобы увидеть текст,
						<br />а затем нажмите Enter <br />
						или кнопку ▶ под временем
					</p>
					<LuMousePointerClick className={styles.icon} />
				</div>
			)}
		</>
	)
}

export default Bunner
