import {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
	RefObject
} from 'react'

type TypeOut = {
	ref: RefObject<HTMLDivElement>
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialState: boolean): TypeOut => {
	const [isShow, setIsShow] = useState(initialState)
	const ref = useRef<HTMLDivElement>(null)

	const handleClickOutside = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return { isShow, setIsShow, ref }
}
