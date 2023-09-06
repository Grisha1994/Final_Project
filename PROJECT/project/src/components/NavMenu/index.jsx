import React, { useContext, useRef } from 'react'
import src from '../media/image_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import s from './style.module.css'
import Container from '../UI/Container'
import { NavLink } from 'react-router-dom'
import { useBasketProducts } from '../hooks/useBasketProducts'
import { CgMenu } from 'react-icons/cg';
import context from '../../store/context/context';
import audioMP3 from '../media/aa_1.mp3'
import audioMP3Menu from '../media/shtorka_1.mp3'
import CheckboxAnimate from '../UI/CheckboxAnimate'

export default function NavMenu() {
    const classFunction = ({isActive}) => isActive ? s.active : '';
    const result = useBasketProducts();
    const productCount = result.reduce((acc) => acc + 1, 0);
    const {isActiveMenu, handlerMenu} = useContext(context);

    const linksElem = useRef();
    const handler = () => {
        const target_links = linksElem.current;
        target_links.classList.toggle(s.active = s.active ? s.active  : '');
        handlerMenu();
    }

    const audioClick = () => {
        const audio = new Audio(audioMP3);
        audio.play();
      };

      const audioClickMenu = () => {
        const audio = new Audio(audioMP3Menu);
        audio.play();
      };

      const {mode, chengeMode} = useContext(context); 

  return (
    <div>
    <nav className={mode ? [s.nav, s.active].join(' ') : s.nav}>
        <Container className={s.container}>
            <div className={s.nav_catalog}>
                <NavLink onClick={audioClick} to='/'>
                    <img src={src} alt="Sprout icon" />
                </NavLink>
                <NavLink onClick={audioClick} className={s.btn} to='/categories'>Catalog</NavLink>
                <div>
                    <CheckboxAnimate
                        label={mode ? 'dark' : 'light'} 
                        onChange={chengeMode} 
                        checked={mode}
                    />
                </div>
            </div>

            

            <div className={s.nav_page}>
                <div ref={linksElem} className={s.nav_a}>
                    <NavLink onClick={audioClick} className={classFunction} to='/categories'>Catalog</NavLink>
                    <NavLink onClick={audioClick} className={classFunction} to='/'>Main Page</NavLink>
                    <NavLink onClick={audioClick} className={classFunction} to='/products/all'>All products</NavLink>
                    <NavLink onClick={audioClick} className={classFunction} to='/sales/all'>All sales</NavLink>
                    <NavLink onClick={audioClick} className={classFunction} to='/basket'>
                        Basket
                        <div className={s.basket_link}>
                            <FontAwesomeIcon className={s.icon} icon={faBasketShopping} />
                            <p>{productCount}</p>
                        </div>
                    </NavLink>
                </div>
                    
                <div onClick={audioClickMenu}>
                    <CgMenu onClick={handler}
                    className={isActiveMenu ? `${s.menu} ${s.active}` : s.menu}/>
                </div>
                    
                <NavLink onClick={audioClick} to='/basket' className={s.basket}>
                    <FontAwesomeIcon className={s.icon} icon={faBasketShopping} />
                    <p>{productCount}</p>
                </NavLink>
            </div>
        </Container>
    </nav>
    <div className={s.botton}></div>
    </div>
  )
}



