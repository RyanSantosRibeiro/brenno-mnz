import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/metodo.svg';
import banner1 from '../../assets/img/banner.jpg';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';


const Footer = () => {

    const active = (e) => {
        if($("#footer").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".footer").hasClass("animate")) {
            $(".footer").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="footer" id='footer'>
             <div className='container'>
                <img className='' src={logo} alt=''/>
            </div>
            <div className="container">
                <ul>
                    <li>Contato</li>
                    <li><b>Whatsapp:</b> (22) 98800-1876</li>
                    <li><b>Email:</b> comercial@mnzcompany.com</li>
                    <li><b>Instagrma:</b> @mnz.company</li>
                </ul>
                <ul>
                    <li>Links</li>
                    <li>Linkedin</li>
                    <li>Desenvolvedor</li>
                    <li></li>
                </ul>
                <ul>
                    <li>Institucional</li>
                    <li>CEO</li>
                    <li>Equipe de Vendas</li>
                    <li>Analistas</li>
                    <li>White Label</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;