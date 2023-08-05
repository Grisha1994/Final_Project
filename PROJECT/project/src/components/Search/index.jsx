import React, { useEffect } from 'react'
import s from './style.module.css'
import Checkbox from '../UI/Checkbox'
import { useDispatch, useSelector} from 'react-redux';
import { discont_item, priceAction, sortAction } from '../../store/slice/productsSlice';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Search() {

    const dispatch = useDispatch();

    const products = useSelector(({products}) => products);

    const [priceFilter, setPriceFilter] = useLocalStorage('priceFilter',  {min: 0, max: Infinity})

    useEffect(() => {
        priceFilter.max = priceFilter.max ?? Infinity;
        dispatch(priceAction(priceFilter));
      }, [dispatch, priceFilter, products]);

      const [checkboxFilter, setCheckboxFilter] = useLocalStorage('checkboxFilter', false);

      useEffect(() => {
        dispatch(discont_item(checkboxFilter));
      }, [checkboxFilter, dispatch, products]);


        const [optionValue, setOptionValue] = useLocalStorage('optionValue', {value: "default"});

        useEffect(() => {
            dispatch(sortAction(optionValue));
        }, [optionValue, dispatch, products]);

    const sortOptions = [
        {id:1, value: 'default', label: 'default'},
        {id:2, value: 'increasing', label: 'sort increasing'},
        {id:3, value: 'descending', label: 'sort descending'},
        {id:4, value: 'title', label: 'Name'},
      ]

  return (
    <div className={s.container}>   
        <div className={s.search_price}>
            <p>Price</p>
            <input value={priceFilter.min === 0 ? '' : priceFilter.min} 
            type="number" placeholder='from'
            onChange={({target}) => setPriceFilter({...priceFilter, min: +target.value})}/>

            <input value={priceFilter.max ?? Infinity} 
            type="number" placeholder='to'
            onChange={({target}) => setPriceFilter({...priceFilter, max: +(target.value || Infinity)} )}/>
        </div>
        <div className={s.search_sale}>
            <p>Discounted items</p>
            <Checkbox checked={checkboxFilter} onChange={({target}) => setCheckboxFilter(target.checked)} />
        </div>
        <div className={s.search_option}>
            <p>Sorted</p>
            <select onChange={({target}) => setOptionValue({...optionValue, value: target.value})} className={s.select}>
            {
              sortOptions.map(({id, value, label}) => 
              <option selected={optionValue.value === value} key={id} value={value}>{label}</option>
              )
            }
            </select>
        </div>        
    </div>
  )
}
