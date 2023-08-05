import React from 'react';
import { useSelector } from 'react-redux';
import ProductId from '../../components/ProductId';
import { useParams } from 'react-router-dom';

export default function ProductIdPage() {

//   const extractProductIdFromURL = () => {
//     const url = window.location.href;
//     const lastSlashIndex = url.lastIndexOf('/');
//     const id = url.slice(lastSlashIndex + 1);
//     return id;
//   };

// const id = extractProductIdFromURL();
const {id} = useParams();
const newId = +id;

  const listProductId = useSelector(({ products }) => products);
  // console.log('продукт', listProductId);
  // console.log(typeof id);
  // console.log(newId);
  return (
    <div>
      { 
        listProductId.list
        .filter(item => newId === item.id)
        .map(item => (<ProductId key={item.id} {...item}/>))  
      }
    </div>
  );
}