import React from 'react'
import { IoMdHelp } from 'react-icons/io'
import { CustomButton, useOutside } from '../../../shared'
import styles from './Helper.module.scss'
;<IoMdHelp />

// Кнопка для справки
const Helper = () => {
	const [isTooltipVisible, setTooltipVisible] = React.useState<boolean>(false)
	const tooltipRef = React.useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: any) => {
		if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
			setTooltipVisible(false)
		}
	}

	React.useEffect(() => {
		if (isTooltipVisible) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isTooltipVisible])
	return (
		<div className={styles.helperWrapper}>
			<CustomButton
				className={styles.helperButton}
				onClick={() => setTooltipVisible(!isTooltipVisible)}
			>
				<IoMdHelp />
			</CustomButton>

			<div
				ref={tooltipRef}
				className={`${styles.tooltip} ${isTooltipVisible ? styles.tooltipVisible : ''}`}
			>
				<h3 className={styles.title}>Выберите опции</h3>
				<div>
					<p className={styles.text}> ▶ - Кнопка запуска</p>
					<p className={styles.text}> ⏹ - Кнопка сброса теста</p>
					<p className={styles.text}>
						🔄 - Кнопка для обновления нового текста
					</p>
					<p className={styles.text}>
						🔢 - Выбирайте услоэженный режим с цифрами
					</p>
					<p className={styles.text}>⏳ - Устанавливайте время удобное вам</p>
					<p className={styles.text}>
						⚠ - Количество слов в тексте можно регулировать
					</p>
					<h3 className={styles.title}>
						Чтобы начать нажмите клавишу <span>Enter</span> или нажмите{' '}
						<span>▶</span>
					</h3>
					<p className={styles.text}>
						⬇ - Снизу странички вы увидите свои результаты
					</p>
				</div>
			</div>
		</div>
	)
}

export default Helper
