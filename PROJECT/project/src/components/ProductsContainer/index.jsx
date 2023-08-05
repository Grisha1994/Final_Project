import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import Container from '../UI/Container'
import Search from '../Search'
import Products from '../Products'

export default function ProductsContainer() {

  const products = useSelector(({ products }) => products.list)
  // console.log(products);
 
  return (
    <section>
      <Container className={s.container} >
        <h2>All products</h2>
        <Search />
        <Products products={products} />
      </Container>
    </section>
  )
}
