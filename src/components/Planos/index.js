import React, { useEffect } from 'react';
import './style.scss';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import $ from 'jquery';


const Planos = () => {

    const active = (e) => {
        if($("#planos").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".planos").hasClass("animate")) {
            $(".planos").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="planos" id='planos'>
            <div className='container'>
                <h2 className='default-title'>Soluções <span className='default-subtitle'>Planos e atividades</span></h2>
            </div>
            <div className="container">
                {/* <div className='planos__modal'>
                    <h4>Soluções</h4>
                    <div className='planos__social'>
                        <a href='https://wa.me/5521995084896?text=Hello%21'>
                            <img src={whatsapp} alt=''/>
                            <span>21 995084896</span>
                        </a>
                        <a href='https://www.instagram.com/ryan.santosrj/'>
                            <img src={instagram} alt=''/>
                            <span>@ryan.santosrj</span>
                        </a>
                    </div>
                    <a href='/' onClick={sendMessage()} className='planos__modal__action primary-button'>Orçamento</a>
                </div> */}
                <div className='planos__modal'>
                    <h4>Start</h4>
                    <ul>
                        <li> Estratégia e operação de campanhas</li>
                        <li> Até dois canais de tráfego </li>
                        <li> Suporte em horário comercial via WhatsApp</li>
                        <li> Relatório interativo e reuniões mensais de resultados</li>
                    </ul>
                    <p className=''>Saiba mais!</p>
                </div>
                <div className='planos__modal recomendado'>
                    <h4>Plus</h4>
                    <ul>
                        <li> Estratégia e operação de campanhas</li>
                        <li> Até <b>três canais </b> canais de tráfego </li>
                        <li> <b>Suporte 24/7 via WhatsApp</b></li>
                        <li> Relatório interativo e reuniões mensais de resultados</li>
                        <li> Design de artes para criativos dos anúncios patrocinados</li>
                    </ul>
                    <p className=''>Saiba mais!</p>
                </div>
            </div>
        </section>
    )
}

export default Planos;