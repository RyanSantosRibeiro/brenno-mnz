import React, { useEffect } from 'react';
import './style.scss';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import $ from 'jquery';
import Slider from 'react-slick';


const Funciona = () => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 3000,
      };

    const active = (e) => {
        if($("#funciona").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".funciona").hasClass("animate")) {
            $(".funciona").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="funciona" id='funciona'>
            <div className='container'>
                <h2 className='default-title'>Nos Contratando <span className='default-subtitle'>Esses são os seguintes passos</span></h2>
            </div>
            <div className="container">
                <Slider {...settings}>
                <div>
                    <div className='funciona__modal'>
                        <div className='funciona__modal__left'>
                            {/* <img src={}/> */}
                            <h3>BRAND 1</h3>
                            <p>Nós alinhamos a estratégia
                                baseado nas métricas e
                                metas do seu negócio</p>
                        </div>
                        <div className='funciona__modal__right'>
                            {/* <img src={}/> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='funciona__modal'>
                        <h3>BRAND 2</h3>
                        <p>Operacionalizamos as
                        estratégias nos canais de
                        tráfego contratados</p>
                    </div>
                </div>
                <div>
                    <div className='funciona__modal'>
                        <h3>BRAND 3</h3>
                        <p>Geramos os relatórios, analisamos
                        os resultados e oferecemos
                        suporte e acompanhamento
                        diariamente</p>
                    </div>
                </div>
                </Slider>
            </div>
        </section>
    )
}

export default Funciona;