import React, { useContext } from 'react'
import BasketItem from '../BasketItem';
import { useBasketProducts } from '../hooks/useBasketProducts';
import BasketCalculation from '../BasketCalculation';
import Container from '../UI/Container';
import s from './style.module.css'
import { NavLink } from 'react-router-dom';
import src from '../media/basket_empty.jpg'
import context from '../../store/context/context';

export default function BasketContainer() {
    const result = useBasketProducts();
    const { mode } = useContext(context);
    
  return (
    <Container>   
        { 
            result.length !== 0 
            ?
            <div className={s.container}>
                <div className={s.title}>
                    <h2>Shopping cart</h2>
                    <div className={s.back_store}>
                        <NavLink to='/products/all'>Back to the store</NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M4.49653 1.19763C4.37465 1.19763 4.26567 1.27146 4.21879 1.38396C4.17309 1.49763 4.20004 1.62654 4.28793 1.71208L10.0758 7.49998L4.28793 13.2879C4.20942 13.3629 4.17778 13.4754 4.2059 13.5797C4.23286 13.6851 4.31489 13.7672 4.42036 13.7941C4.52465 13.8222 4.63715 13.7906 4.71215 13.7121L10.7122 7.71208C10.8293 7.5949 10.8293 7.40505 10.7122 7.28787L4.71215 1.28787C4.6559 1.22927 4.57856 1.19763 4.49653 1.19763Z" fill={mode ? "white" : "black"}/>
                        </svg>
                    </div>
                    {
                        result.map(item => <BasketItem key={item.id} {...item}/>)
                    }
                </div>
                <BasketCalculation/>
            </div>  
            :
            <div className={s.info}>
                <img src={src} alt="Basket is e"/>
            </div>
        } 
    </Container>
  )
}


