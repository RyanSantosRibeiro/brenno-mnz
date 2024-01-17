import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import 'jquery.easing';
import image from '../../../assets/img/pg/sup.jpg';
import wave1 from '../../../assets/img/wl/wave1.png';
import wave2 from '../../../assets/img/wl/wave2.png';
import foguete from '../../../assets/img/wl/foguete.png';

const Jornada = () => {

    
    const active = (e) => {
        if($("#jornada-pg").offset().top - $(window).scrollTop() < (window.screen.height - 500) && !$(".jornada-pg").hasClass("animate")) {
            $(".jornada-pg").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="jornada-pg" id='jornada-pg'>
            <div className='container'>
                <h2 className='default-title'>Nossa jornada</h2>
            </div>
            <div className='container'>
                <ul className="jornada-pg__list">
                    <li><b>Semana 1</b> - Contrato assinado e Kickoff</li>
                    <li><b>Semana 2</b> - Desenvolvimento do site</li>
                    <li><b>Semana 3</b> - Revisão e ajustes</li>
                    <li><b>Go live</b></li>
                </ul>
            </div>
        </section>
    )
}

export default Jornada;