import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import 'jquery.easing';
import brenno from '../../../assets/img/pg/MNZ.png';
import image from '../../../assets/img/suits/bg.png';
import wave1 from '../../../assets/img/wl/wave1.png';
import wave2 from '../../../assets/img/wl/wave2.png';
import foguete from '../../../assets/img/wl/foguete.png';

const Banner = () => {

    
    useEffect(() => {
        // $(window).on('scroll',(e)=>active(e));
        // $(window).on('mousemove',(e)=>activeMockup(e));
    },[]);
    return  (
        <section className="banner-pg" id='banner-pg'>
            <img className='banner-pg__person' src={brenno} alt=''/>
            {/* <img className='banner-pg__wave1' src={wave1} alt=''/>
            <img className='banner-pg__wave2' src={wave2} alt=''/>
            <img className='banner-pg__foguete' src={foguete} alt=''/> */}
            
            <div className='banner-pg__text container'>
                <h2>Seu site pronto em alguns cliques, com ótimo custo beneficio</h2>
                <p>Apenas 1 encontro e seu site ficará pronto*</p>
                {/* <p>sem aumentar seus cupgos e esforços.</p> */}
                <div className='banner-pg__text__buttons'>
                  <a href='#about' className='primary-button'>Primeiro Passo</a>
                  <a href='#about' className='secondary-button'>Deixe-me ver mais!</a>
                </div>
            </div>
        </section>
    )
}

export default Banner;