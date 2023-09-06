import React from 'react';
import { useSelector } from 'react-redux';
import ProductId from '../../components/ProductId';
import { useParams } from 'react-router-dom';

export default function ProductIdPage() {
  const { id } = useParams();
  const newId = +id;

  const { list: listProductId } = useSelector(({ products }) => products);
  const product = listProductId.find(item => newId === item.id);

  return (
    <div>
      {product && <ProductId key={product.id} {...product} />}
    </div>
  );
}
