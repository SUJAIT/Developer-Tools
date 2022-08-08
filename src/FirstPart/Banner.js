import React from 'react';
import img from '../Images/Banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
      <div>
        <div>
          <div class="hero mt-5">
            <img id="banner" className="background-image" src={img} />

            <div class="hero-content text-center text-neutral-content">

            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;