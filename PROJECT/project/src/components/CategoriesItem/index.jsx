import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import context from '../../store/context/context'

export default function CategoriesItem({id, image, title}) {
  const {handleMouseEnter, handleMouseLeave, mode} = useContext(context);
  const style = mode ? [s.item, s.active].join(' ') : s.item;
  
  return (
    <NavLink to={`/categories/${id}`} className={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={'http://127.0.0.1:3333'+image} alt={title} />
        <p>{title}</p>
    </NavLink>
  )
}
