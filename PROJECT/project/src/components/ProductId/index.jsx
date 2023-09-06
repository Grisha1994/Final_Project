import React from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import { useDispatch } from 'react-redux'
import { basket } from '../../store/slice/basketSlice';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import audioMP3 from '../media/thalmic_chatreceived.mp3'
import { useContext } from 'react';
import context from '../../store/context/context';

export default function ProductId({id, discont_price, price, image, title, description}) {

    const dispatch = useDispatch();

    const audioClick = () => {
        const audio = new Audio(audioMP3);
        audio.play();
      };

      const addToCart = () => {
        dispatch(basket(id));
        toast.success("Add to cart!");
        audioClick();
      };

      const {mode} = useContext(context);
      const style = mode ? [s.container, s.active].join(' ') : s.container;

  return (
    <Container className={style}>
        <h2>{title}</h2>
        <div className={s.product}>
            <img className={s.img} src={`http://127.0.0.1:3333${image}`} alt={title}/>
            <div className={s.info}>
                <div className={s.item_info}>
                    <div className={s.item_price}>
                        {
                            discont_price !== null 
                            ? <div className={s.discont_price}>{discont_price}<p>$</p></div> 
                            : <div className={s.price_noSale}>{price}<p>$</p></div>
                        }
                    </div>
                    { discont_price === null ? '' : <p className={s.price}>{price}$</p> }
                    { discont_price === null ? '' : <p className={s.sale}>-{(((price - discont_price) / price) * 100).toFixed(2)}%</p> }
                </div>
                <button className={s.btn} onClick={addToCart}>To cart</button>
                <div className={s.description}>
                        <p>Description</p>
                        <p>{description}</p>
                </div>
            </div>
        </div> 
    </Container>
  )
}

