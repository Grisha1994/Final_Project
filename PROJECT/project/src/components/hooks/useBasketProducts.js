import { useSelector } from "react-redux";

export function useBasketProducts(){

    const basket = useSelector(({basket}) => basket.list)
    
    const {list} = useSelector(({products}) => products)

    const result = basket.map(el => {
        const product = list.find(({id}) => id === el.id);
        return {...el, ...product}
    })

    return result 
}
