// import React from 'react'
// import ProductsItem from '../ProductsItem'
// import s from './style.module.css'
// import { useSelector } from 'react-redux';
// import Container from '../UI/Container';
// import Search from '../Search';
// import { useParams } from 'react-router-dom';

// export default function CategoriesId() {

// const extractCategoriesIdFromURL = () => {
//     const url = window.location.href;
//     const lastSlashIndex = url.lastIndexOf('/');
//     const id = url.slice(lastSlashIndex + 1);
//     return id;
// };
// const id = extractCategoriesIdFromURL();

// const {id} = useParams();
// const newId = +id;

// const listCategoryId = useSelector(({ categories }) => categories);
// // console.log('категория', catId);
// const categoryId = listCategoryId.list.filter(item => newId === item.id)
// // console.log(typeof newId);
// const title = categoryId.map(item => item.title)

// const listProductId = useSelector(({ products }) => products);
// // console.log('продукты', listId);
// const categoryIdProduct = listProductId.list.filter(item => newId == item.categoryId)

//   return (
//     <Container className={s.container}>
//         <h2>{title}</h2>
//         <Search/>
//         <div className={s.products}>
//             {
//             categoryIdProduct
//             .filter(({show}) => Object.values(show).every((item) => item))
//             .map(item => <ProductsItem key={item.id} {...item} />)
//             }
//         </div>
//     </Container>
//   )
// }
