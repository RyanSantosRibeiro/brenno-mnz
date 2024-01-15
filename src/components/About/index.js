import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/metodo.svg';
import banner1 from '../../assets/img/banner.jpg';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';


const About = () => {

    const active = (e) => {
        if($("#about").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".about").hasClass("animate")) {
            $(".about").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="about" id='about' style={{background: `url(${banner1})`}}>
             <div className='container'>
                <h2 className='default-title'>Quem Somos</h2>
                <img className='' src={logo} alt=''/>
            </div>
            <div className="container">
                <p><b>Escritório digital</b> focado em estratégias de escala para negócios que já atuam na
                internet.</p>
                <p>Nossa dinâmica de serviço nos permite ter os <b>melhores profissionais</b> para o seu
                projeto à nossa disposição.</p>
                <p>Contamos com parceiros de negócios no <b>Brasil, Estados Unidos, Argentina e
                Portugal.</b></p>
                <p>Temos sob gestão mais de
                <b> R$1 milhão</b> / ano de orçamento em mídia e clientes nos <b>4 cantos do globo</b>.</p>
            </div>
        </section>
    )
}

export default About;