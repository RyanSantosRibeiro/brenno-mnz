import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import 'jquery.easing';
import brenno from '../../assets/img/brenno.png';
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 

import img1 from '../../assets/img/brands/1.png';
import img2 from '../../assets/img/brands/2.png';
import img3 from '../../assets/img/brands/3.png';
import img4 from '../../assets/img/brands/4.png';
import img5 from '../../assets/img/brands/5.png';
import img6 from '../../assets/img/brands/6.png';
import img7 from '../../assets/img/brands/7.png';
import img8 from '../../assets/img/brands/8.png';
import img9 from '../../assets/img/brands/9.png';

const Brands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
    
    useEffect(() => {
        // $(window).on('scroll',(e)=>active(e));
        // $(window).on('mousemove',(e)=>activeMockup(e));
    },[]);
    return  (
        <section className="brands" id='brands'>
          <div className='container'>
            <Slider {...settings}>
              <div>
                <img src={img1}/>
              </div>
              <div>
                <img src={img2}/>
              </div>
              <div>
                <img src={img3}/>
              </div>
              <div>
                <img src={img4}/>
              </div>
              <div>
                <img src={img5}/>
              </div>
              <div>
                <img src={img6}/>
              </div>
              <div>
                <img src={img7}/>
              </div>
              <div>
                <img src={img8}/>
              </div>
              <div>
                <img src={img9}/>
              </div>
            </Slider>
          </div>
        </section>
    )
}

export default Brands;