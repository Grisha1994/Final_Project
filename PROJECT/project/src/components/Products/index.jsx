import React from 'react'
import s from './style.module.css'
import ProductsItem from '../ProductsItem'
import Loading from '../UI/Loading'
import img from '../media/error.png'
import { useSelector } from 'react-redux'

export default function Products({products}) {
    const state = useSelector(({ products }) => products)

    return (
        
        <div className={s.products}>
            {
                state.status === 'loding'
                ?<Loading/>
                :state.status === 'rejected'
                ?<img src={img} alt="" />
                :products
                .filter(({show}) => Object.values(show).every((item) => item))
                .map(item => <ProductsItem key={item.id} {...item} />)
            }
        </div>
        
    )
}
