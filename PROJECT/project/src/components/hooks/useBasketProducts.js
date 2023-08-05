// import { useSelector } from "react-redux";


// export function useBasketProducts(){

//     const basket = useSelector(({basket}) => basket.list)
//     const {list} = useSelector(({products}) => products)

//     const result = basket.map(el => {
//         const product = list.find(({id}) => id === el.id);
//         return {...el, ...product}
//     })

//     return result
// }


import { useSelector } from "react-redux";

export function useBasketProducts() {
  const basket = useSelector(({ basket }) => basket.list);
  const products = useSelector(({ products }) => products.list);

  const result = basket.map(el => {
    const product = products.find(({ id }) => id === el.id);
    if (product) {
      return { ...el, ...product, count: el.count };
    }
    return null; // Вернуть null, если информацию о товаре не удалось найти
  }).filter(item => item !== null); // Фильтруем нулевые элементы

  return result;
}