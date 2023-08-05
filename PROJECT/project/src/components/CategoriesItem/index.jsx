import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'

export default function CategoriesItem({id, image, title}) {
  return (
    <NavLink to={`/categories/${id}`} className={s.item}>
        <img src={'http://127.0.0.1:3333'+image} alt={title} />
        <p>{title}</p>
    </NavLink>
  )
}
