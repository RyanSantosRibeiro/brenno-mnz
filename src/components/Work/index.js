import React, { useEffect } from 'react';
import './style.scss';
import $ from 'jquery';

import img1 from './../../assets/img/tablet.png'
import img2 from './../../assets/img/stopwatch.png'
import img3 from './../../assets/img/target.png'
import img4 from './../../assets/img/engineering.png'


const Work = () => {

    const active = (e) => {
        if($("#work").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".work").hasClass("animate")) {
            $(".work").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="work" id='work'>
            <div className='container'>
                <h2 className='default-title'>Como Funciona<span className='default-subtitle'></span></h2>
            </div>
            <div className="container">
                <div className='work__card work__card-1'>
                    <img src={img1} />
                    <p>Nós alinhamos a estratégia
                        baseado nas métricas e
                        metas do seu negócio</p>
                </div>
                <div className='work__card work__card-2'>
                    <img src={img2} />
                    <p>Operacionalizamos as
                    estratégias nos canais de
                    tráfego contratados</p>
                </div>
                <div className='work__card work__card-3'>
                    <img src={img3} />
                    <p>Geramos relatórios, analisamos
                    os resultados e oferecemos
                     acompanhamento
                    diariamente</p>
                </div>
            </div>
            {/* <div className="work__highlight">
                <p className='work__highlight__text'>Entre no <b>mundo virtual</b> e deixe sua marca ser descoberta por <span>milhões</span> de pessoas!</p>
            </div> */}
        </section>
    )
}

export default Work;