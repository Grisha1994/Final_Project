import React, { useContext } from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import { NavLink } from 'react-router-dom'
import context from '../../store/context/context';

export default function NewSeason() {
    const {mode} = useContext(context);
    const style = mode ? [s.container, s.active].join(' ') : s.container;
  return (
    <section>
        <Container className={style}>
            <div className={s.container_sale}>
                <div className={s.sale}>
                    <h1 className={s.title}>
                        <span>Sale</span>
                        <span>New season</span>    
                    </h1>
                    <NavLink to='/sales/all' className={s.btn} >Sale</NavLink>
                </div>
            </div>
        </Container>
    </section>
  )
}
