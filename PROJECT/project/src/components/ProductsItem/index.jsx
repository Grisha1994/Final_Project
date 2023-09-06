import React, { useContext } from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { basket } from '../../store/slice/basketSlice';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import context from '../../store/context/context';
import { useBasketProducts } from '../hooks/useBasketProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import audioMP3 from '../media/thalmic_chatreceived.mp3';

export default function ProductsItem({ id, image, price, discont_price, title }) {
  const dispatch = useDispatch();
  const sale = (((price - discont_price) / price) * 100).toFixed(2);

  const { handleMouseEnter, handleMouseLeave } = useContext(context);

  const basketProducts = useBasketProducts();
  const productInBasket = basketProducts.find((el) => el.id === id);
  const countInBasket = productInBasket ? productInBasket.count : '';

  const audioClick = () => {
    const audio = new Audio(audioMP3);
    audio.play();
  };

  const renderPrice = () => {
    if (discont_price !== null) {
      return (
        <>
          <p className={s.discont_price}>{discont_price}$</p>
          <p className={s.price}>{price}$</p>
          <p className={s.sale}>-{sale}%</p>
        </>
      );
    } else {
      return <p className={s.price_noSale}>{price}$</p>;
    }
  };

  const addToCart = () => {
    dispatch(basket(id));
    toast.success("Add to cart!");
    audioClick();
  };

  const {mode} = useContext(context);

  return (
    <div className={mode ? [s.card, s.active].join(' ') : s.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLink to={`/product/${id}`} className={s.item}>
        <div className={s.img}>
          <div
            className={s.count}
            style={countInBasket ? { background: 'rgb(17, 199, 0)' } : { display: 'none' }}
          >
            {countInBasket && (
              <>
                <FontAwesomeIcon className={s.icon} icon={faBasketShopping} />
                <p>{countInBasket}</p>
              </>
            )}
          </div>
          <img src={`http://127.0.0.1:3333${image}`} alt={title} />
        </div>
        <div className={s.item_sale}>
          <div className={s.item_info}>{renderPrice()}</div>
          <p>{title}</p>
        </div>
      </NavLink>
      <div className={s.btn_container}>
        <button className={s.btn} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
