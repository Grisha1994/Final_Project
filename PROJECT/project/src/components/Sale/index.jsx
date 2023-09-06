import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.css'
import Container from '../UI/Container'
import Products from '../Products'
import { discont_item, filterAction, priceAction, sortAction } from '../../store/slice/productsSlice'

export default function Sale() {

    const products = useSelector(({products}) => products.list)
    const filteredSale = products.filter(item => item.discont_price !== null).slice(0,4)

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(priceAction({min: 0, max: Infinity}));
      dispatch(discont_item(false));
      dispatch(sortAction({value: 'default'}));
      dispatch(filterAction(''))
    }, [dispatch, products]);

  return (
      <section>
        <Container className={s.container} > 
          <h2>Sale</h2>
            <Products products={filteredSale}/>
        </Container>
    </section>
  )
}
