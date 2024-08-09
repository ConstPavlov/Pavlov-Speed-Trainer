import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import { PiHandTapBold } from 'react-icons/pi'
import { TfiWrite } from 'react-icons/tfi'

const Logo: FC = React.memo(() => {
	console.log('logo rend')
	return (
		<div className={styles.logo}>
			<h2 className={styles.title}>Pavlov Speed Trainer</h2>
			<TfiWrite className={styles.ico} />
		</div>
	)
})

export default Logo
