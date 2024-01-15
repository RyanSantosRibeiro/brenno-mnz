import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import shape1 from '../../assets/img/shape-1.png';
import shape3 from '../../assets/img/shape-3.png';
import shape4 from '../../assets/img/shape-4.png';
import shape5 from '../../assets/img/shape-5.png';
import shape6 from '../../assets/img/shape-6.png';
import mockup1 from '../../assets/img/mockup.png';
import mockup2 from '../../assets/img/mockup2.png';
import mockup3 from '../../assets/img/mockup3.png';
import 'jquery.easing';
import brenno from '../../assets/img/brenno.png';
import { Link } from 'react-router-dom';

const Banner = () => {

    const active = (e) => {
        const shape = $('.banner__shape-up');
        const shapeLeft = $('.banner__shape-left');
        const shapeLeft2 = $('.banner__shape-left2');
        const shapeDown = $('.banner__shape-down');
        const shapeUpRight = $('.banner__shape-upright');
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
        <section className="banner" id='banner'>
            <img className='banner__person' src={brenno} alt=''/>
            
            <div className='banner__text'>
                <p>Procurando um escritório sério para cuidar das <br></br> suas estratégias de marketing, tráfego e mídia paga?</p>
                <h2>Conheça a MNZ Company</h2>
                <div className='banner__text__buttons'>
                  <a className='primary-button' 
                  onClick={()=>{
                    $([document.documentElement, document.body]).animate({
                      scrollTop: $("#form").offset().top - 100 
                  }, 800);
                  }}
                  >Dar o primeiro passo</a>

                  <a className='secondary-button' onClick={()=>{
                    $([document.documentElement, document.body]).animate({
                      scrollTop: $("#about").offset().top - 100
                  }, 800);
                  }}>Conhecer a MNZ</a>
                </div>
            </div>
        </section>
    )
}

export default Banner;