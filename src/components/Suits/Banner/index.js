import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import 'jquery.easing';
import brenno from '../../../assets/img/suits/mulher.png';
import image from '../../../assets/img/suits/bg.png';
import wave1 from '../../../assets/img/wl/wave1.png';
import wave2 from '../../../assets/img/wl/wave2.png';
import foguete from '../../../assets/img/wl/foguete.png';

const Banner = () => {

    const active = (e) => {
        const shape = $('.banner-st__shape-up');
        const shapeLeft = $('.banner-st__shape-left');
        const shapeLeft2 = $('.banner-st__shape-left2');
        const shapeDown = $('.banner-st__shape-down');
        const shapeUpRight = $('.banner-st__shape-upright');
        const scrollTop = $(window).scrollTop();
      
        const parallaxFactor = 0.2;
        const parallaxFactor2 = 0.1;

        const animationDuration = 500;
        console.log(shape)
      
        const initialOffset = shape.offset()?.left || 0;
        console.log(scrollTop);
      
        const distance = scrollTop - initialOffset;
        let animationSpeed = Math.abs(distance * parallaxFactor);
      
        if (animationSpeed > 1000) {
          animationSpeed = 1000;
        }
      
        shape.stop().animate(
          {
            marginTop: -scrollTop * parallaxFactor,
          },
          animationDuration,
          'easeOutCubic'
        );

        shapeDown.stop().animate(
            {
              marginTop: scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeUpRight.stop().animate(
            {
              marginTop: -scrollTop * parallaxFactor,
              marginLeft: scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeLeft.stop().animate(
            {
              marginLeft: -scrollTop * parallaxFactor2,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeLeft2.stop().animate(
            {
              marginLeft: -scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );
      };

    const activeMockup = (e) => {
        var mouse = {
            page: {
                x: e.pageX,
                y: e.pageY
            },
            client: {
                x: e.clientX,
                y: e.clientY
            }
        };

        const x = mouse.client.x;
        const y = mouse.client.y;

        console.log(x)
      
        const parallaxFactor = 0.1;
      
      
        let animationSpeed = Math.abs(x * parallaxFactor);
      
        if (animationSpeed > 1000) {
          animationSpeed = 1000;
        }
      
        // mockup.css(
        //   {
        //     marginLeft:  x * parallaxFactor,
        //     marginTop:  y * parallaxFactor,
        //   }
        // );

        // mockup2.css(
        //     {
        //       marginLeft:  x * parallaxFactor2,
        //       marginTop:  y * parallaxFactor2,
        //     }
        // );
      };
    
    useEffect(() => {
        $(window).on('scroll',(e)=>active(e));
        // $(window).on('mousemove',(e)=>activeMockup(e));
    },[]);
    return  (
        <section className="banner-st" id='banner-st' style={{backgroundImage: `url(${image})`}}>
            <img className='banner-st__person' src={brenno} alt=''/>
            {/* <img className='banner-st__wave1' src={wave1} alt=''/>
            <img className='banner-st__wave2' src={wave2} alt=''/>
            <img className='banner-st__foguete' src={foguete} alt=''/> */}
            
            <div className='banner-st__text'>
                <p>Nossa area especializada em</p>
                <h2>MARKETING ESTRATÉGICO</h2>
                <p>para escritórios de</p>
                <h2 className='big'>ADVOCACIA</h2>
                {/* <p>sem aumentar seus custos e esforços.</p> */}
                <div className='banner-st__text__buttons'>
                  <a href='#about' className='primary-button'>Primeiro Passo</a>
                  <a href='#about' className='secondary-button'>Deixe-me ver mais!</a>
                </div>
            </div>

            <div className='container'>
              {/* <p className='banner-st__points-title'>Creça com a gente</p> */}
              <p className='banner-st__points'>Não perca seus clientes para agências full service;</p>
              <p className='banner-st__points'>Dê conta da demanda do mercado, aumentando sua base de clientes;</p>
              <p className='banner-st__points'>Aumente sua autoridade de marca oferecendo um serviço qualificado;</p>
              <p className='banner-st__points'>Garanta uma renda passiva e recorrente, sem grandes esforços.</p>
              <span className='banner-st__points-message'>A missão da MNZ é enriquecer todos que fazem parte do nosso ecossistema: clientes, colaboradores e parceiros.</span>
            </div>
        </section>
    )
}

export default Banner;