import React from 'react';
import heroImage from '../../assets/homeHero.png'; 

function Hero() {
  return (
    <div className='container-fluid p-0'>
      <img 
        src={heroImage} 
        alt='Hero' 
        className='img-fluid w-100' 
        style={{ maxHeight: '600px', objectFit: 'cover' }} 
      />
      <div className='container p-5 text-center mb-5'>
        <h1 className='mt-5'>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button 
          className='p-3 btn btn-primary mb-5' 
          style={{ width: '25%', borderRadius: '5px' }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
