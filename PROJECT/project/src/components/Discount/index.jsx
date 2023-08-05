import React from 'react'
import Container from '../UI/Container'
import src from '../media/Garden_gnome.png'
import s from './style.module.css'

export default function Discount() {
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
                    
                    <div className={s.discount_get}>
                        <input type="text" placeholder='+49'/>
                        <button>Get a discount</button>
                    </div>

                </div>
            </div>
        </Container>
    </section>
  )
}
