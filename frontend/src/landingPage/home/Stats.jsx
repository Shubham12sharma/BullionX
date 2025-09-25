import React from 'react';
import ecosystemImage from '../../assets/ecosystem.png';

function Stats() {
  return (
    <div className='container p-3'>
      <div className='row align-items-center py-5'>
        {/* Left Column */}
        <div className='col-md-6 px-4'>
          <h1 className='fs-2 mb-5'>Trust with confidence</h1>

          <h3 className='fs-4'>Customer-first always</h3>
          <p className='text-muted'>
            That's why 1.6+ crore customers trust BullionX with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>

          <h3 className='fs-4'>No spam or gimmicks</h3>
          <p className='text-muted'>
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
          </p>

          <h3 className='fs-4'>The BullionX universe</h3>
          <p className='text-muted'>
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className='fs-4'>Do better with money</h3>
          <p className='text-muted'>
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Right Column */}
        <div className='col-md-6 text-center px-4'>
          <img 
            src={ecosystemImage} 
            alt='BullionX Ecosystem' 
            className='img-fluid mb-4' 
            style={{ width: '75%' }} 
          />
          <div>
            <a href='#' className='mx-3 text-decoration-none'>
              Explore our products <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
            </a>
            <a href='#' className='text-decoration-none'>
              Try Kite Demo <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
