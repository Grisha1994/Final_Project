import React, { useContext } from 'react';
import { useBasketProducts } from '../hooks/useBasketProducts';
import s from './style.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { addOrder } from '../../store/request/order_req';
import { toast } from 'react-toastify';
import audioMP3 from '../media/earnings.mp3';
import context from '../../store/context/context';

export default function BasketCalculation() {
  const result = useBasketProducts();
  const totalSum = result.reduce((acc, { price, count }) => acc + price * count, 0).toFixed(2);
  const [resp, setResp] = useState({});
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onBlur',
  });

  const submit = (data) => {
    console.log('привет', data);
    reset();
    addOrder(data, setResp, toast.success('Discount has been received!'));
  };

  const numberRegexp = /^[1-9]\d{10}$/;
  const numberRegister = register('number', {
    required: '*Required field',
    pattern: {
      value: numberRegexp,
      message: '*Not valid number format',
    },
  });

  const audioClick = () => {
    const audio = new Audio(audioMP3);
    if (!errors.number) {
      audio.play();
    }
  };

  const {mode} = useContext(context);
  const style = mode ? [s.order, s.active].join(' ') : s.order;

  return (
    <div className={style}>
      <p className={s.text}>Order details</p>
      <div className={s.total}>
        <p>Total</p>
        <p>{totalSum}</p>
      </div>
      <form onSubmit={handleSubmit(submit)} className={s.number}>
        <p className={s.error_text}>{errors.number?.message}</p>
        <input type="number" name="number" placeholder="Phone number" {...numberRegister} />
        <button onClick={audioClick}>
          {resp.status === 'OK' ? 'Order has been received' : 'Get an order'}
        </button>
      </form>
    </div>
  );
}
