// Тут мы реализовываем перретасовку слов
export const randomizer = (
	array: string[],
	quantityWords: number
): string[] => {
	const strings = [...array]
	for (let i = strings.length - 1; i > 0; i--) {
		const newWord = Math.floor(Math.random() * (i + 1))
		;[strings[i], strings[newWord]] = [strings[newWord], strings[i]]
	}
	return strings.slice(0, quantityWords)
}
