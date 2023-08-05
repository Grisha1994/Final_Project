import React from 'react'
import s from './style.module.css'
// import {discont_item} from '../../../store/slice/productsSlice'
// import { useDispatch } from 'react-redux';

export default function Checkbox({...props}) {
  
  // const [discont, setDiscont] = useState(false);

  // const dispatch = useDispatch();

  // dispatch(discont_item(discont));
  
  return (
    <div>
        <input className={s.checkbox} type="checkbox" {...props}/>
    </div>
  )
}
