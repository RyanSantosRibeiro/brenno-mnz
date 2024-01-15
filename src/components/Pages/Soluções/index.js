import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import 'jquery.easing';
import image from '../../../assets/img/pg/sup.jpg';
import wave1 from '../../../assets/img/wl/wave1.png';
import wave2 from '../../../assets/img/wl/wave2.png';
import foguete from '../../../assets/img/wl/foguete.png';

const Solucoes = () => {

    
    const active = (e) => {
        if($("#solucoes-pg").offset().top - $(window).scrollTop() < (window.screen.height - 400) && !$(".solucoes-pg").hasClass("animate")) {
            $(".solucoes-pg").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="solucoes-pg" id='solucoes-pg'>
            {/* <div className='container'>
                <h2 className='default-title'>MÉDIA DE GANHOS DAS AGÊNCIAS PARCEIRAS<span className='default-subtitle'>*Essa é uma média de MRR, valores a serem
definidos no momento do contrato.</span></h2>
            </div> */}
            <div className='container'>
                <div className="solucoes-pg__left">
                    <div className='solucoes-pg__left--item'>
                        <h3>Design Personalizado:</h3>
                        <p>Criamos sites que refletem a identidade única de cada cliente. Seu site será uma vitrine virtual que não apenas atende às suas necessidades comerciais, mas também impressiona visualmente."</p>
                    </div>
                    <div className='solucoes-pg__left--item'>
                        <h3>Processo de Desenvolvimento Rápido e Eficiente:</h3>
                        <p>Nosso serviço simplifica o processo de criação de sites, desde a concepção até a implementação. Trabalhamos de forma eficiente para garantir que seu site esteja online o mais rápido possível, sem comprometer a qualidade."</p>
                    </div>
                    <div className='solucoes-pg__left--item'>
                        <h3>Suporte Contínuo e Atualizações:</h3>
                        <p>Além da criação inicial, oferecemos suporte contínuo e atualizações para garantir que seu site esteja sempre atualizado com as últimas tendências e tecnologias, mantendo-o competitivo online"</p>
                    </div>
                </div>
                <div className="solucoes-pg__right">
                    <img  src={image} alt=''/>
                </div>
            </div>
        </section>
    )
}

export default Solucoes;