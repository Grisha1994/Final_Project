import React from 'react'
import { useSelector } from 'react-redux'
import CategoriesContainer from '../Categories'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'
import Container from '../UI/Container'
import audioMP3 from '../media/aa_1.mp3'
import { useContext } from 'react'
import context from '../../store/context/context'

export default function Catalog() {
  const list = useSelector(({ categories }) => categories.list)
  const new_list = list.slice(0, 4);

  const audioClick = () => {
    const audio = new Audio(audioMP3);
    audio.play();
  };

  const {mode} = useContext(context);
  const style = mode ? [s.container, s.active].join(' ') : s.container;

  return (

    <Container className={style} >
      <div className={s.catalog}>
        <h2>Catalog</h2>
        <NavLink className={s.btn} onClick={audioClick} to='/categories'>All categories</NavLink>
      </div>
      <CategoriesContainer className={s.catalog_categories} categories={new_list} />
    </Container>

  )
}
