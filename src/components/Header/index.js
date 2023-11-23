import React, { useEffect } from 'react';
import './style.scss';
import logo from '../../assets/img/logo.png';

import $ from 'jquery';


const Header = () => {

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
        <div className="header" id='header'>
            <div className='container-fluid'>
                <div className='header__logo'>
                    <a href='/'>
                        <img className='' src={logo} alt=''/>
                    </a>
                </div>

                <ul className='header__menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#pilares'>Pilares</a></li>
                    <li><a href='#about'>Sobre</a></li>
                    {/* <li><a href='#skills'>Skills</a></li> */}
                    <li className=''><a href='#job'>Meus Trabalhos</a></li>
                </ul>

                {/* <a href='#contact' className='header__button primary-button'>
                    Envie uma mensagem!
                </a> */}
            </div>
        </div>
    )
}

export default Header;