import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';

import img1 from './../../assets/img/tablet.png'
import img2 from './../../assets/img/stopwatch.png'
import img3 from './../../assets/img/target.png'
import img4 from './../../assets/img/engineering.png'

const NumberAnimation = ({ targetValue }) => {
    const [currentValue, setCurrentValue] = useState(0);

  
    useEffect(() => {
        const animationDuration = 20000;
        const updateInterval = 20;
        const frames = animationDuration / updateInterval;
        const acceleration = 2; // Ajuste este valor para controlar a aceleração
    
        let frame = 0;
    
        const animationInterval = setInterval(() => {
            if($("#statistics").offset().top - $(window).scrollTop() < (window.screen.height) && $(".statistics").hasClass("animate")) {
                setCurrentValue((prevValue) => {  
                  const progress = frame / frames;
                  const acceleratedProgress = Math.pow(progress, acceleration);
                  const newValue = prevValue + acceleratedProgress * targetValue;
          
                  // Verifica se atingiu ou ultrapassou o valor final
                  if (newValue >= targetValue || frame >= frames) {
                    setCurrentValue(targetValue);
                    clearInterval(animationInterval);
                  } else {
                    frame++;
                    return newValue;
                  }
                });
            } 
        }, updateInterval);
    
        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(animationInterval);
      }, [targetValue]);
  
    return <>{` ${Math.round(currentValue)} `}</>;
  };


const Statistics = () => {

    const active = (e) => {
        if($("#statistics").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".statistics").hasClass("animate")) {
            $(".statistics").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="statistics" id='statistics'>
            <div className="container">
                <div className='statistics__card statistics__card-1'>
                    <h3>R$ <NumberAnimation targetValue={10} /> MM</h3>
                    {/* <img src={img1} /> */}
                    <p>Gerenciados</p>
                </div>
                <div className='statistics__card statistics__card-2'>
                    <h3><NumberAnimation targetValue={5} /></h3>
                    {/* <img src={img2} /> */}
                    <p>Anos de Experiencia</p>
                </div>
                <div className='statistics__card statistics__card-3'>
                    <h3><NumberAnimation targetValue={50} /></h3>
                    {/* <img src={img3} /> */}
                    <p>Projetos Atendidos</p>
                </div>
                <div className='statistics__card statistics__card-4'>
                    <h3>R$ <NumberAnimation targetValue={1} />MM</h3>
                    {/* <img src={img4} /> */}
                    <p>Faturados para nossos clientes</p>
                </div>
            </div>
            {/* <div className="statistics__highlight">
                <p className='statistics__highlight__text'>Entre no <b>mundo virtual</b> e deixe sua marca ser descoberta por <span>milhões</span> de pessoas!</p>
            </div> */}
        </section>
    )
}

export default Statistics;