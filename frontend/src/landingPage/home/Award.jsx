import React from 'react';
import largestBroker from '../../assets/largestBroker.svg';
import pressLogos from '../../assets/pressLogos.png';

function Award() {
  return (
    <div className='container my-5'>
      <div className='row'>
       
        <div className='col-md-6 p-5'>
          <img src={largestBroker} alt='Largest Broker Award' className='img-fluid' />
        </div>

        
        <div className='col-md-6 p-5 mt-3'>
          <h1>Largest Stock Broker in India</h1>
          <p className='mb-4'>
            2+ million users of BullionX, where 15% of all volume in India occurs daily by trading and investing in:
          </p>

          <div className='row'>
            
            <div className='col-6'>
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>

            {/* Right List */}
            <div className='col-6'>
              <ul>
                <li><p>Stocks and IPOs</p></li>
                <li><p>Direct Mutual Funds</p></li>
                <li><p>Bonds and Government Policies</p></li>
              </ul>
            </div>
          </div>

          
          <div className='mt-4'>
            <img src={pressLogos} alt='Press Logos' className='img-fluid' style={{ width: '90%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;
