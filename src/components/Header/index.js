import React, { useEffect, useState } from 'react';
import './style.scss';
import logo from '../../assets/img/logo.png';
import menu from '../../assets/img/menu-m.png';
import fecha from '../../assets/img/fecha.png';

import $ from 'jquery';
import { Link } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 100) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    }
    
    useEffect(() => {
        window.onscroll = () => handleScroll()
    },[]);
    

    return  (
        <div className={`header ${window.location.hash == '' ? 'home': window.location.hash == '#/brenno-mnz' ? 'home' : ''}`} id='header'>
            <div className='container-fluid'>
                <div className='header__logo'>
                    <a href='/'>
                        <img className='' src={logo} alt=''/>
                    </a>
                </div>

                <div className='header__menu__mobile' onClick={()=>setOpen(!open)}>
                        <img className='' src={menu} alt=''/>
                </div>

                <ul className={`header__menu ${open?'open':''}`}>
                    {/* <li>{window.location.hash}</li> */}
                    <img className='' src={fecha} alt='' onClick={()=>setOpen(!open)}/>
                    <li><Link to='/white-label'>White Label</Link></li>
                    {/* <li><a href='/suits'>Suits</a></li> */}
                    <li><Link to='/pages'>Pages</Link></li>
                    {/* <li><Link to='/brenno'>Brenno Menezes</Link></li> */}
                    {/* <li><a href='#skills'>Skills</a></li> */}
                    {/* <li className=''><a href='#job'>Meus Trabalhos</a></li> */}
                </ul>

                {/* <a href='#contact' className='header__button primary-button'>
                    Envie uma mensagem!
                </a> */}
            </div>
        </div>
    )
}

export default Header;