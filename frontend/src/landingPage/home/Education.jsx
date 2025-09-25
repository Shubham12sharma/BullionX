import React from 'react'
import Varsity from'../../assets/education.svg'
function Education() {
  return (
    <>
      <div className='container mt-3 p-5'>
            <div className='row'>
              {/* Left Section */}
              <div className='col-md-6'>
                 <img 
                            src={Varsity} 
                            alt='BullionX Varsity' 
                            className='img-fluid mb-4' 
                            style={{ width: '80%' }} 
                          />
              </div>
      
              {/* Right Section */}
              <div className='col-md-6 p-5'>
                <h1>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='#' className='mx-3 text-decoration-none'>
                    Varsity <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                </a>

                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='#' className='mx-3 text-decoration-none'>
                    TradingQ&A <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                </a>  
                  
              
              </div>
          </div>
        </div>
    </>
  )
}

export default Education