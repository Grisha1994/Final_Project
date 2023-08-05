import React from 'react'
import { useSelector } from 'react-redux'
import Categories from '../Categories'
import Container from '../UI/Container';
import s from './style.module.css'

export default function CategoriesContainer() {

    const data = useSelector(({ categories }) => categories.list)

    return (
        <section>
            <Container className={s.container} >
                <div className={s.catalog}>
                    <h2>Categories</h2>
                </div>
                <Categories categories={data} />
            </Container>
        </section>
    )
}
