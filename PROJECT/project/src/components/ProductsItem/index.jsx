import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { basket } from '../../store/slice/basketSlice';
import { NavLink } from 'react-router-dom';

import { toast } from 'react-toastify';

export default function ProductsItem({id, image, price, discont_price, title}) {

const dispatch = useDispatch()
const sale = (((price - discont_price) / price) * 100).toFixed(2);

  return (
    <div className={s.card}>
      <NavLink to={`/product/${id}`} className={s.item}> 
          <img className={s.img} src={`http://127.0.0.1:3333${image}`} alt={title}/>
          <div className={s.item_sale}>
              <div className={s.item_info}>
                {
                  discont_price !== null 
                  ? <p className={s.discont_price}>{discont_price}$</p> 
                  : <p className={s.price_noSale}>{price}$</p>
                }
                {
                  discont_price === null ? '' : <p className={s.price}>{price}$</p>
                }
                {
                  discont_price === null ? '' : <p className={s.sale}>-{sale}%</p>
                }
              </div>  
              <p>{title}</p>
          </div>
      </NavLink>
      <button className={s.btn} onClick={() => dispatch(basket(id)) && toast.success("Add to cart!")}>Add to cart</button>
    </div>
  )
}
