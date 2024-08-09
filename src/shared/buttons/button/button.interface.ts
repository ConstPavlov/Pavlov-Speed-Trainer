import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	forwardedRef?: React.RefObject<HTMLButtonElement>
}
