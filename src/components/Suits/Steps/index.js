import React, { useEffect } from 'react';
import './style.scss';
import $ from 'jquery';

import img1 from './../../../assets/img/wl/icon1.png'
import img2 from './../../../assets/img/wl/icon2.png'
import img3 from './../../../assets/img/wl/icon3.png'


const Steps = () => {

    const active = (e) => {
        if($("#steps-st").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".steps-st").hasClass("animate")) {
            $(".steps-st").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="steps-st" id='steps-st'>
            <div className='container'>
                <h2 className='default-title'>Como Funciona <span className='default-subtitle'>Proximos passos</span></h2>
            </div>
            <div className="container">
                <div className='steps-st__card steps-st__card-1'>
                    <img src={img1} />
                    <p>Você oferece o serviço de tráfego
pago para os seus clientes e
adiciona a sua margem de serviço</p>
                </div>
                <div className='steps-st__card steps-st__card-2'>
                    <img src={img2} />
                    <p>Nos avisa e iniciamos o período
de on-boarding com a nossa
estrutura</p>
                </div>
                <div className='steps-st__card steps-st__card-3'>
                    <img src={img3} />
                    <p>Você recebe o fee combinado com
o cliente e nos repassa o valor
mensal, ficando com o seu lucro</p>
                </div>
            </div>
            {/* <div className="steps-st__highlight">
                <p className='steps-st__highlight__text'>Entre no <b>mundo virtual</b> e deixe sua marca ser descoberta por <span>milhões</span> de pessoas!</p>
            </div> */}
        </section>
    )
}

export default Steps;