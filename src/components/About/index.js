import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/metodo.svg';
import $ from 'jquery';


const About = () => {

    const active = (e) => {
        if($("#about").offset().top - $(window).scrollTop() < 450 && !$(".about").hasClass("animate")) {
            $(".about").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="about" id='about'>
             <div className='container'>
                <h2 className='default-title'>Metodologia <span className='default-subtitle'>Foco em resultado e transparência</span></h2>
            </div>
            <div className="container">
                <img src={image}/>
            </div>
        </section>
    )
}

export default About;