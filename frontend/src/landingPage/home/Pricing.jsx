import React from 'react';
import zeroRupee from '../../assets/0ru.svg'; 
import twentyRupee from '../../assets/20ru.svg';

function Pricing() {
  return (
    <div className='container p-5'>
      <div className='row'>
        {/* Left Section */}
        <div className='col-md-6'>
          <h1 className='mb-5'>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href='#' className='text-decoration-none'>
            See Pricing <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
          </a>
        </div>

        {/* Right Section */}
        <div className='col-md-6 p-5'>
          <div className='row gy-4'>
            <div className='col-md-4 align-items-center  border'>
              <img src={zeroRupee} alt='0 Rupee' style={{ width: '80%' }} />
              <p className='text-muted mb-0 ' style={{ fontSize: '12px', }}>
                Free account opening
              </p>
            </div>
            <div className='col-md-4 align-items-center border'>
              <img src={zeroRupee} alt='0 Rupee' style={{ width: '80%' }} />
              <p className='text-muted mb-0 ' style={{ fontSize: '12px' }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className='col-md-4  align-items-center border'>
              <img src={twentyRupee} alt='20 Rupee' style={{ width: '80%' }} />
              <p className='text-muted mb-0 ' style={{ fontSize: '12px', width:"100px", height:"10px"}}>
                Intraday and F&amp;O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
