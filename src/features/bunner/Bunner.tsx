import { LuMousePointerClick } from 'react-icons/lu'

import React, { FC, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import styles from './Bunner.module.scss'
import { useDispatch } from 'react-redux'
import { setClicked, toggleBanner } from '../store/banner/slice'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'

// Тут логика баннера который появляетсяя после первой отрисовки компонента и если Иговое поле не в фокусе

const Bunner: FC = () => {
	const dispatch = useDispatch()

	const { isBanner, isClicked } = useSelector(
		(state: RootState) => state.banner
	)

	const handleClick = () => {
		dispatch(setClicked(true))
		// Запуск анимации при клике

		setTimeout(() => {
			dispatch(toggleBanner(true)) // Скрытие баннера после анимации
		}, 1000) // Время завершения анимации должно совпадать с длительностью анимации
	}
	React.useEffect(() => {
		if (!isBanner) {
			// Когда баннер показывается, сбрасываем состояние clicked
			dispatch(setClicked(false))
		}
	}, [isBanner, dispatch])
	return (
		<>
			{!isBanner && ( // Отображение баннера только если isBanner === false
				<motion.div
					className={styles.banner}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }} // Появление баннера
					transition={{ duration: 2 }} // Увеличьте это значение для более долгой анимации
					onClick={handleClick}
				>
					<motion.p
						className={styles.title}
						initial={{ scale: 1, filter: 'blur(0px)' }}
						animate={
							isClicked
								? { scale: 3, filter: 'blur(2px)' }
								: { scale: 1, filter: 'blur(0px)' }
						}
						transition={{ duration: 1 }} // Увеличьте это значение для более долгой анимации
					>
						Нажмите сюда чтобы увидеть текст,
						<br />а затем нажмите Enter <br />
						или кнопку ▶ под временем
					</motion.p>
					<LuMousePointerClick className={styles.icon} />
				</motion.div>
			)}
		</>
	)
}

export default Bunner
