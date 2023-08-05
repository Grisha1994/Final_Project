import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsItem from '../../components/ProductsItem';
import Container from '../../components/UI/Container';
import Search from '../../components/Search';


export default function CategoriesIdPage() {

  const {id} = useParams();
  const newId = +id;
  
  const listCategoryId = useSelector(({ categories }) => categories);
  // console.log('категория', catId);
  const categoryId = listCategoryId.list.filter(item => newId === item.id)
  // console.log(typeof newId);
  const title = categoryId.map(item => item.title)
  
  const listProductId = useSelector(({ products }) => products);
  // console.log('продукты', listId);
  const categoryIdProduct = listProductId.list.filter(item => newId === item.categoryId)

  return (
    <div>
       <Container className={s.container}>
        <h2>{title}</h2>
        <Search/>
        <div className={s.products}>
            {
            categoryIdProduct
            .filter(({show}) => Object.values(show).every((item) => item))
            .map(item => <ProductsItem key={item.id} {...item} />)
            }
        </div>
      </Container>
    </div>
  );
}