import { useSelector } from 'react-redux'
import { analizeData } from '../../features'
// import '../../app/scss/_variables'

export const changeColor = (idx: number, answers: any) => {
	let color = '#646669'

	const currentAnswer = answers.find((obj: any) => obj.numberOfWord === idx)

	if (currentAnswer) {
		if (currentAnswer.isRight === true) {
			color = '#39a460'
		}
		if (currentAnswer.isRight === false) {
			color = '#a70a1d'
		}
	}
	// console.log('Index:', 'Color:', color)

	return color
}
