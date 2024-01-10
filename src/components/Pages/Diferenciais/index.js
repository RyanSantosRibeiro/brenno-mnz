import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import 'jquery.easing';
import image from '../../../assets/img/pg/sup.jpg';
import wave1 from '../../../assets/img/wl/wave1.png';
import wave2 from '../../../assets/img/wl/wave2.png';
import foguete from '../../../assets/img/wl/foguete.png';

const Diferenciais = () => {

    
    const active = (e) => {
        if($("#diferenciais-pg").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".diferenciais-pg").hasClass("animate")) {
            $(".diferenciais-pg").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="diferenciais-pg" id='diferenciais-pg'>
            <div className='container'>
                <h2 className='default-title'>Diferenciais</h2>
            </div>
            <div className='container container--conteudo'>
                <div className='diferenciais-pg__card'>
                    <p>Site em conformidade com a LGPD</p>
                </div>
                <div className='diferenciais-pg__card'>
                    <p>Saiba quantos acessos você obteve</p>
                </div>
                <div className='diferenciais-pg__card'>
                    <p>Domínio e hospedagem, SSL (segurança) gratuitos</p>
                </div>
                <div className='diferenciais-pg__card'>
                    <p>Design Responsivo compatível com desktops, tablets e smartphones</p>
                </div>
                <div className='diferenciais-pg__card'>
                    <p>O melhor custo benefício do mercado</p>
                </div>
                <div className='diferenciais-pg__card'>
                    <p>Entrega em 7 dias</p>
                </div>
                <div className='diferenciais-pg__card'>
                    <p>Suporte 24/7*</p>
                </div>
                <div className='diferenciais-pg__card'>
                    <p>Site otimizado para rapidez</p>
                </div>
            </div>
        </section>
    )
}

export default Diferenciais;