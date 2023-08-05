import React from 'react'
import BasketItem from '../BasketItem';
import { useBasketProducts } from '../hooks/useBasketProducts';
import BasketCalculation from '../BasketCalculation';
import Container from '../UI/Container';
import s from './style.module.css'

export default function BasketContainer() {

    const result = useBasketProducts();

    console.log(result);
    const style = {fontSize: '40px', padding: '20px', fontWeight: 600};
    
  return (
    <Container className={s.container}>      
        { 
            result.length !== 0 
            ?<> 
            <div>
                {
                    result.map(item => <BasketItem key={item.id} {...item}/>)
                }
            </div>
            <BasketCalculation/>
            </>
            : <p style={style}>Корзина пуста</p> 
        }

    </Container>
  )
}


