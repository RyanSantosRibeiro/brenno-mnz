import React, { useEffect } from 'react';
import './style.scss';
import image from '../../../assets/img/wl/wave2.png';
import $ from 'jquery';

import img1 from './../../../assets/img/wl/icon1.png'
import img2 from './../../../assets/img/wl/icon2.png'
import img3 from './../../../assets/img/wl/icon3.png'


const Contact = () => {

    const active = (e) => {
        if($("#contact").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".contact").hasClass("animate")) {
            $(".contact").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="contact" id='contact' style={{backgroundImage: `url(${image})`}}>
            <div className='container'>
                <a href=''>VAMOS FAZER NEGÓCIO?</a>
            </div>
            {/* <div className="contact__highlight">
                <p className='contact__highlight__text'>Entre no <b>mundo virtual</b> e deixe sua marca ser descoberta por <span>milhões</span> de pessoas!</p>
            </div> */}
        </section>
    )
}

export default Contact;