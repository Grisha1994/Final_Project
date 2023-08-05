import React from 'react'
import { useBasketProducts } from '../hooks/useBasketProducts';
import s from './style.module.css'

export default function BasketCalculation() {

    const result = useBasketProducts();

    const totalSum = result.reduce((acc, {price, count}) => acc + price * count, 0).toFixed(2);

  return (
    <div className={s.order}>
        <p>Order details</p>
        <div className={s.total}>
            <p>Total</p>
            <p>{totalSum}</p>
        </div>
        <div className={s.number}>
          <input type="text" placeholder='Phone number'/>
          <button>Order</button>
        </div>
        
    </div>
  )
}
