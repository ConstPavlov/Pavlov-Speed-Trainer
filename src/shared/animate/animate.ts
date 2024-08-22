export const CALM_ENTRY = {
	initial: { opacity: 0, y: -20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 20 }
}

export const transitionEinO = {
	duration: 0.8, // Увеличиваем продолжительность анимации
	ease: 'easeInOut' // Используем функцию сглаживания
}
