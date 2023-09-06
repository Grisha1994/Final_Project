import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import Container from '../UI/Container'
import Search from '../Search'
import Products from '../Products'

export default function ProductsContainer() {
  const products = useSelector(({ products }) => products.list)
 
  return (
    <section>
      <Container className={s.container} >
        <div className={s.title}>
          <h2>All products</h2>
        </div>
        <Search visible={true}/>
        <Products products={products} />
      </Container>
    </section>
  )
}
