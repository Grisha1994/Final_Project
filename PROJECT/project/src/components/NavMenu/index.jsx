import React, { useRef } from 'react'
import src from '../media/image_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import s from './style.module.css'
import Container from '../UI/Container'
import { NavLink } from 'react-router-dom'
import { useBasketProducts } from '../hooks/useBasketProducts'
import { CgMenu } from 'react-icons/cg';

export default function NavMenu() {

    const classFunction = ({isActive}) => isActive ? s.active : '';
    // const style = (color === 'balck' ? 'black' : 'white');

    const result = useBasketProducts();
    const productCount = result.reduce((acc) => acc + 1, 0);

    const linksElem = useRef();

    const handler = () => {
      const target_links = linksElem.current;
      target_links.classList.toggle(s.active = s.active ? s.active : '');
    }

  return (
    <nav className={s.nav}>
        <Container className={s.container}>
            <div className={s.nav_catalog}>
                <a href="http://localhost:3000">
                    <img src={src} alt="Sprout icon" />
                </a>
                <NavLink className={s.btn} to='/categories'>Catalog</NavLink>

            </div>
            
                <div className={s.nav_page}>

                    <div ref={linksElem} className={s.nav_a}>
                        <NavLink  className={classFunction} to='/categories'>Catalog</NavLink>

                        <NavLink className={classFunction} to='/'>Main Page</NavLink>
                        <NavLink className={classFunction} to='/products/all'>All products</NavLink>
                        <NavLink className={classFunction} to='/sales/all'>All sales</NavLink>

                        <NavLink className={classFunction} to='/basket'>
                            Basket
                            <div className={s.basket_link}>
                                <FontAwesomeIcon className={s.icon} icon={faBasketShopping} />
                                <p>{productCount}</p>
                            </div>
                        </NavLink>
                    </div>

                    <CgMenu onClick={handler} className={s.menu}/>

                    <NavLink to='/basket' className={s.basket}>
                        <FontAwesomeIcon className={s.icon} icon={faBasketShopping} />
                        <p>{productCount}</p>
                    </NavLink>

                </div>
        </Container>
    </nav>
  )
}
