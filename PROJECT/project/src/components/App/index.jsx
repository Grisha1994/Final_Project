import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import context from '../../store/context/context';
import { useTransition, animated } from 'react-spring';
import NavMenu from '../NavMenu';
import Contacts from '../Contacts';
import CategoriesPage from '../../pages/CategoriesPage';
import MainPage from '../../pages/MainPage';
import ProductsAllPage from '../../pages/ProductsAllPage';
import SaleAllPage from '../../pages/SaleAllPage';
import BasketPage from '../../pages/BasketPage';
import ProductIdPage from '../../pages/ProductIdPage';
import CategoriesIdPage from '../../pages/CategoriesIdPage';
import PageNotFound from '../../pages/PageNotFound';
import { fetchCategories } from '../../store/slice/categorySlice';
import { fetchProducts } from '../../store/slice/productsSlice';
import s from './style.module.css';
import audioMP3 from '../media/cc.mp3';
import { useLocalStorage } from '../hooks/useLocalStorage';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [audio, setAudio] = useState(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handlerMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  };

  const createAudio = () => {
    const audioElement = new Audio(audioMP3);
    setAudio(audioElement);
    return audioElement;
  };

  const handleMouseEnter = () => {
    if (hasUserInteracted || audio) {
      if (!audio) {
        createAudio();
      }
      audio.play();
    }
  };

  const handleMouseLeave = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const handleUserInteraction = () => {
    setHasUserInteracted(true);
    if (!audio) {
      createAudio();
    }
  };

  const [mode, setMode] = useLocalStorage(false, 'mode')
  const chengeMode = ({ target }) => setMode(target.checked);
  useEffect(() => {
    if (mode) {
      document.body.style.background = "linear-gradient(to right, #339966 0%,#000000 20%, #000000 50%, #000000 80%, #339966 100%)";
    } else {
      document.body.style.background = "white";
    }
  }, [mode]);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: isActiveMenu ? 'translateX(0%)' : 'translateX(100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: isActiveMenu ? 'translateX(0%)' : 'translateX(-100%)',
    },
  });

  return (
    <div className={mode ? [s.App, s.active].join(' ') : s.App} onClick={handleUserInteraction}>
      <context.Provider value={{ isActiveMenu, handlerMenu, handleMouseEnter, handleMouseLeave, mode, chengeMode }}>
        <NavMenu />

        {transitions.map(({ key, item, props }) => (
          <animated.div key={key} style={props}>
            <div className={s.animate}>
              <Routes location={item}>
                <Route path="/" element={<MainPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/categories/:id" element={<CategoriesIdPage />} />
                <Route path="/products/all" element={<ProductsAllPage />} />
                <Route path="/product/:id" element={<ProductIdPage />} />
                <Route path="/sales/all" element={<SaleAllPage />} />
                <Route path="/basket" element={<BasketPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <Contacts />
            </div>
          </animated.div>
        ))}
      </context.Provider>

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
