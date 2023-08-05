import React from 'react'
import s from './style.module.css'

export default function Loading() {
  return (
	<div className={s.loading}>
		<div className={s.preloader}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
  )
}
