import React from 'react'
import s from './style.module.css'
import { plus, minus, remove} from '../../store/slice/basketSlice';
import { useDispatch } from 'react-redux';

export default function BasketItem({id, image, price, discont_price, title, count}) {

    const dispatch = useDispatch();

  return (
    <div className={s.card}>

        <button className={s.btn_top} onClick={() => dispatch(remove(id))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M8.6438 7.79999L7.80005 8.64374L14.175 15L7.80005 21.3562L8.6438 22.2L15.0375 15.8437L21.4125 22.2L22.2563 21.3562L15.8813 15L22.2563 8.64374L21.4125 7.79999L15.0375 14.1562L8.6438 7.79999Z" fill="black"/>
            </svg>
        </button>

        <div className={s.img}>
            <img className={s.img} src={'http://127.0.0.1:3333'+image} alt={title}/>
        </div>
        
        <div className={s.info}>
            <p>{title}</p>
            <div className={s.count}>
                <button onClick={() => dispatch(minus(id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <rect y="8" width="18" height="2" fill="black"/>
                    </svg>
                </button>
                <p>{count}</p>
                <button onClick={() => dispatch(plus(id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect y="8" width="18" height="2" fill="black"/>
                        <rect x="8" y="18" width="18" height="2" transform="rotate(-90 8 18)" fill="black"/>
                    </svg>
                </button>
            </div>
        </div>
        
        <div className={s.info_price}>
            <div className={s.price}>
                {
                    discont_price !== null 
                    ? <p className={s.discont_price}>{discont_price}$</p> 
                    : <p className={s.price_noSale}>{price}$</p>
                }
                {
                    discont_price === null ? '' : <p className={s.price}>{price}$</p>
                }
            </div>
        </div>
        
        <button className={s.btn} onClick={() => dispatch(remove(id))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M8.6438 7.79999L7.80005 8.64374L14.175 15L7.80005 21.3562L8.6438 22.2L15.0375 15.8437L21.4125 22.2L22.2563 21.3562L15.8813 15L22.2563 8.64374L21.4125 7.79999L15.0375 14.1562L8.6438 7.79999Z" fill="black"/>
            </svg>
        </button>
        
    </div>
  )
}
