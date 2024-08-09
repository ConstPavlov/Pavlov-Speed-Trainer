import React from 'react'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { CustomButton } from '../../shared'
import { analizeData } from '../store/analize/selector'
import { deleteAllResults } from '../store/analize/slice'
import { getFromLS, getResultsLS } from '../utils/getFromLS'
import { setToLS } from '../utils/setToLS'
import styles from './Results.module.scss'

const Results = React.memo(() => {
	const { results } = getResultsLS('results')
	const isMounted = React.useRef<boolean>(false)
	const dispatch = useDispatch()
	const { resultsData } = useSelector(analizeData)

	React.useEffect(() => {
		console.log(resultsData)
	}, [resultsData, results])
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Результаты прошлых тренировок</h2>
			<div className={styles.results}>
				<div className={styles.labels}>
					<span className={styles.id}>№ </span>
					<span className={styles.rights}>Правильных</span>
					<span className={styles.miss}>Ошибок</span>
					<span className={styles.wps}>WPS</span>
					<span className={styles.time}>Время(сек)</span>
				</div>
				{resultsData.length !== 0 ? (
					resultsData.map((res) => (
						<div className={styles.result} key={res.id}>
							<div className={styles.id}>{res.id}</div>
							<div className={styles.rights}>{res.right}</div>
							<div>{res.mistakes}</div>
							<div>{res.wpm}</div>
							<div className={styles.time}>{res.time}</div>
						</div>
					))
				) : (
					<h2 className={styles.subtitle}>Вы еще ни разу не тренировались</h2>
				)}
			</div>
			<CustomButton onClick={() => dispatch(deleteAllResults())}>
				Сбросить результаты
			</CustomButton>
		</div>
	)
})

export default Results
