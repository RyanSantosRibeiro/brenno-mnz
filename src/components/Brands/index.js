import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import 'jquery.easing';
import brenno from '../../assets/img/brenno.png';
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 

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
                <h3>BRAND 1</h3>
              </div>
              <div>
                <h3>BRAND 2</h3>
              </div>
              <div>
                <h3>BRAND 3</h3>
              </div>
              <div>
                <h3>BRAND 4</h3>
              </div>
              <div>
                <h3>BRAND 5</h3>
              </div>
              <div>
                <h3>BRAND 6</h3>
              </div>
            </Slider>
          </div>
        </section>
    )
}

export default Brands;