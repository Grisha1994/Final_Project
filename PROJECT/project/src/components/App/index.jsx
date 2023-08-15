import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/slice/categorySlice';
import { fetchProducts } from '../../store/slice/productsSlice';
import { Route, Routes} from 'react-router-dom';

import s from './style.module.css';

import NavMenu from '../NavMenu';
import Contacts from '../Contacts';
import CategoriesPage from '../../pages/CategoriesPage';
import MainPage from '../../pages/MainPage';
import ProductsAllPage from '../../pages/ProductsAllPage';
import SaleAllPage from '../../pages/SaleAllPage';
import BasketPage from '../../pages/BasketPage';
import ProductIdPage from '../../pages/ProductIdPage';
import CategoriesIdPage from '../../pages/CategoriesIdPage';
import PageNotFaund from '../PageNotFaund';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from "react-router-dom";

// import { useTransition, animated} from 'react-spring';

function App() {

  // const location = useLocation();
  // console.log(location);
  // const transitions = useTransition(location, location => location, {
  //   from: {
  //     opacity: 0,
  //     transform: 'translaterX(100%)'
  //   },
  //   enter: {
  //     opacity: 1,
  //     transform: 'translaterX(0%)'
  //   },
  //   leave: {
  //     opacity: 0,
  //     transform: 'translaterX(-100%)'
  //   }
    
  // });
  // console.log('привет', transitions);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch])

 
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className={s.App}>
      <NavMenu/>

      {/* <div style={{position: 'relative', overflow: 'hidden', minHeight: '100vh'}}>
      {
        transitions.map(({key, item, props}) => (
          <animated.div key={key} style={props} >
            <div style={{position: 'absolute', width: '100%'}}>
              
            </div>
          </animated.div>
        ))
      }
      </div> */}
                  <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/categories' element={<CategoriesPage/>}/>
                    <Route path='/categories/:id' element={<CategoriesIdPage/>}/>
                    <Route path='/products/all' element={<ProductsAllPage/>}/>
                    <Route path='/product/:id' element={<ProductIdPage/>}/>
                    <Route path='/sales/all' element={<SaleAllPage/>}/>
                    <Route path='/basket' element={<BasketPage/>}/>
                    <Route path='*' element={<PageNotFaund/>}/>
                  </Routes>
               
      

      <Contacts/>
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
        />
    </div>
  );
}

export default App;
