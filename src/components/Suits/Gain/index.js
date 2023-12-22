import React, { useEffect } from 'react';
import './style.scss';
import image from '../../../assets/img/wl/wave1.png';
import $ from 'jquery';

import img1 from './../../../assets/img/wl/icon1.png'
import img2 from './../../../assets/img/wl/icon2.png'
import img3 from './../../../assets/img/wl/icon3.png'


const Gain = () => {

    const active = (e) => {
        if($("#gain-st").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".gain-st").hasClass("animate")) {
            $(".gain-st").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="gain-st" id='gain-st' style={{backgroundImage: `url(${image})`}}>
            <div className='container'>
                <h2 className='default-title'>MÉDIA DE GANHOS DAS AGÊNCIAS PARCEIRAS<span className='default-subtitle'>*Essa é uma média de MRR, valores a serem
definidos no momento do contrato.</span></h2>
            </div>
            <div className="container">
            <table>
                <tr>
                <th>Clientes</th>
                <th>FEE MNZ*</th>
                <th>VALOR FINAL**</th>
                <th>LUCRO</th>
                </tr>
                <tr>
                <td>Pequenas empresas</td>
                <td>R$900</td>
                <td>R$1.200</td>
                <td>R$300</td>
                </tr>
                <tr>
                <td>Médias empresas</td>
                <td>R$1.400</td>
                <td>R$1.800</td>
                <td>R$400</td>
                </tr>
                <tr>
                <td>Grandes empresas</td>
                <td>R$3.000</td>
                <td>R$3.500</td>
                <td>R$500</td>
                </tr>
            </table>
            </div>
            {/* <div className="gain-st__highlight">
                <p className='gain-st__highlight__text'>Entre no <b>mundo virtual</b> e deixe sua marca ser descoberta por <span>milhões</span> de pessoas!</p>
            </div> */}
        </section>
    )
}

export default Gain;