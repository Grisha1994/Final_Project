import React from 'react'
import s from './style.module.css'

export default function Checkbox({...props}) {
  return (
    <div>
        <input className={s.checkbox} type="checkbox" {...props}/>
    </div>
  )
}
