import React from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsItem from '../../components/ProductsItem';
import Container from '../../components/UI/Container';
import Search from '../../components/Search';

export default function CategoriesIdPage() {
  const { id } = useParams();
  const newId = +id;

  const { list: listCategoryId } = useSelector(({ categories }) => categories);
  const category = listCategoryId.find(item => newId === item.id);
  const { title } = category;

  const { list: listProductId } = useSelector(({ products }) => products);
  const categoryIdProduct = listProductId.filter(item => newId === item.categoryId);

  const visibleProducts = categoryIdProduct
    .filter(({ show }) => Object.values(show).every(item => item));

  return (
    <div>
      <Container className={s.container}>
        <h2>{title}</h2>
        <Search visible={true} />
        <div className={s.products}>
          {visibleProducts.map(item => (
            <ProductsItem key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
