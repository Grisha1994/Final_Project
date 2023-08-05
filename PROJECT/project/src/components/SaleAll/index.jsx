import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import Container from '../UI/Container'
import Products from '../Products'
import Search from '../Search'

export default function SaleAll() {

  const list = useSelector(({ products }) => products.list)

  const filteredSaleAll = list
    ? list.filter(item => item.discont_price !== null)
    : list;

  return (
    <section>
      <Container className={s.container} >
        <h2>All sales</h2>
        <Search />
        <Products products={filteredSaleAll} />
      </Container>
    </section>
  )
}