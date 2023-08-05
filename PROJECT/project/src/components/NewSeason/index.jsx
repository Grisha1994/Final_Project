import React from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import { NavLink } from 'react-router-dom'

export default function NewSeason() {
  return (
    <section>
        <Container className={s.container}>
            <div className={s.container_sale}>
                <div className={s.sale}>
                    <h1 className={s.h1}>
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
