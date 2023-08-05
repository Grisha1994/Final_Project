import React from 'react'
import { useSelector } from 'react-redux'
import CategoriesContainer from '../Categories'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
import Container from '../UI/Container'

export default function Catalog() {

  const list = useSelector(({ categories }) => categories.list)
  const new_list = list.slice(0, 4);

  return (

    <Container className={s.container} >
      <div className={s.catalog}>
        <h2>Catalog</h2>
        {/* <button className={s.btn}>All categories</button> */}
        <NavLink className={s.btn} to='/categories'>All categories</NavLink>
      </div>
      <CategoriesContainer className={s.catalog_categories} categories={new_list} />
    </Container>

  )
}
