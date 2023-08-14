import React, { Component } from 'react'
import * as Faicon from "react-icons/ai";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Css/special.css";
import Slider from "react-slick";
function special() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className='slide'>
            <div className='Text'>
            <h2> Special Offers</h2>

<p>from historial cities to natural specteculars,come see the best of the word</p>
            </div>
        
        
        <Slider {...settings} >
        
        <div className='carder '>
        <div className='imag'>
                <img   src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt="" />
            </div>
            <div>
                <h1>qsxdtvygbhnj,kl</h1>
                <p>sdvgbhhjnklm</p>
            </div>
            <button>View DetailAi<Faicon.AiOutlineArrowRight/></button>
        </div>
        <div className='carder'>
        <div className='imag'>
                <img   src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt="" />
            </div>
            <div>
                <h1>qsxdtvygbhnj,kl</h1>
                <p>sdvgbhhjnklm</p>
            </div>
            <button>View DetailAi<Faicon.AiOutlineArrowRight/></button>
        </div>
        <div className='carder'>
        <div className='imag'>
                <img   src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt="" />
            </div>
            <div>
                <h1>qsxdtvygbhnj,kl</h1>
                <p>sdvgbhhjnklm</p>
            </div>
            <button>View DetailAi<Faicon.AiOutlineArrowRight/></button>
        </div>
        <div className='carder'>
        <div className='imag'>
                <img   src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt="" />
            </div>
            <div>
                <h1>qsxdtvygbhnj,kl</h1>
                <p>sdvgbhhjnklm</p>
            </div>
            <button>View DetailAi<Faicon.AiOutlineArrowRight/></button>
        </div>
        <div className='carder'>
        <div className='imag'>
                <img   src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt="" />
            </div>
            <div>
                <h1>qsxdtvygbhnj,kl</h1>
                <p>sdvgbhhjnklm</p>
            </div>
            <button>View DetailAi<Faicon.AiOutlineArrowRight/></button>
        </div>
       
        </Slider>
      </div>
    )

}
export default special
