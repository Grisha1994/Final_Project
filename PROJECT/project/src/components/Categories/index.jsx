import React from 'react'
import CategoriesItem from '../CategoriesItem'
import s from './style.module.css'
import Loading from '../UI/Loading';
import img from '../media/error.png'
import { useSelector } from 'react-redux';

export default function Categories({categories}) {

  const state = useSelector(({ categories }) => categories)

  return (
    <div className={s.catalog_categories}>
        {
            state.status === 'loding'
            ?<Loading/>
            :state.status === 'rejected'
            ?<img src={img} alt="" />
            :categories.map(item => <CategoriesItem className={s.card} key={item.id} {...item} />)
        }
    </div> 
  )
}
