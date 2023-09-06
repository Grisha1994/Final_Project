import React from 'react';
import Container from '../UI/Container';
import src from '../media/Garden_gnome.png';
import s from './style.module.css';
import { addSale } from '../../store/request/sale_req';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import audioMP3 from '../media/earnings.mp3';

export default function Discount() {
  const [resp, setResp] = useState({});
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onBlur"
  });

  const submit = data => {
    reset();
    addSale(data, setResp, toast.success("Discount has been received!"));
  };

  const numberRegexp = /^[1-9]\d{10}$/;
  const numberRegister = register('number', {
    required: '*Required field',
    pattern: {
      value: numberRegexp,
      message: '*Not a valid number format'
    }
  });

  const audioClick = () => {
    const audio = new Audio(audioMP3);
    if (!errors.number) {
      audio.play();
    }
  };

  return (
    <section>
      <Container className={s.container}>
        <div className={s.discount}>
          <img src={src} alt="Garden_gnome" />
          <div className={s.discount_info}>
            <div className={s.title}>
              <h2>5% off</h2>
              <p>on the first order</p>
            </div>
            <form onSubmit={handleSubmit(submit)} className={s.discount_get}>
              <p className={s.error_text}>{errors.number?.message}</p>
              <input type="number" name='number' placeholder='Phone number' {...numberRegister} />
              <button onClick={audioClick}>{resp.status === 'OK' ? 'Discount has been received' : 'Get a discount'}</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
