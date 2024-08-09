export const numberShufle = (array: string[]) => {
	console.log(array)
	const random = (): number => {
		return Math.floor(Math.random() * array.length)
	}

	const num: any = random()
	// const changeLengthBaseArray = () => {
	// 	let newBaseLengthArray: string[] = []
	// 	if (num > 0 && num < array.length) {
	// 		for (let index = 0; index < array.length - num; index++) {
	// 			newBaseLengthArray.push(array[index])
	// 		}
	// 		return newBaseLengthArray
	// 	}
	// 	return array
	// }

	// const strsArr = changeLengthBaseArray()
	const strsArr = [...array]

	const shufleStrWithNum = () => {
		let randomNumber
		let fromZerotoFive
		let randomIdx
		let count = 0

		if (num && Array.isArray(strsArr)) {
			while (count < num) {
				randomIdx = Math.floor(Math.random() * strsArr.length)
				// console.log(randomIdx, 'randomIdx')
				// console.log(strsArr, 'strsArr')
				randomNumber =
					Math.floor((Math.random() * (strsArr.length + 1)) / 3) + ''

				if (count % 2 == 0) {
					strsArr.splice(randomIdx, 0, randomNumber)
					count++
				} else {
					fromZerotoFive = Math.floor(Math.random() * 6)
					let currentWord = [...strsArr[randomIdx]]

					currentWord.splice(fromZerotoFive, 0, randomNumber)

					strsArr[randomIdx] = currentWord.join('')
					count++
				}
			}
			return strsArr
		}

		return strsArr
	}
	shufleStrWithNum()

	return strsArr
}

// array: string[], num: number
