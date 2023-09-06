import React from 'react'

export default function ProductsIdContainer() {
  const productId = useSelector(({products}) => products.list)

  return (
    <div>
        {
            productId.map(item => <ProductsId key={item.id} {...item} />)
        }
    </div>
  )
}
