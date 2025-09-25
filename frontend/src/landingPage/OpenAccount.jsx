import React from 'react'

function OpenAccount() {
  return (
     <div className='container-fluid p-0'>
          
          <div className='container p-5 text-center mb-5'>
            <h1 className='mt-5'>Open a BullionX account</h1>
            <p>
             Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>
            <button 
              className='p-3 btn btn-primary mb-5' 
              style={{ width: '30%', borderRadius: '5px' }}
            >
              SignUp for Free
            </button>
          </div>
        </div>
  )
}

export default OpenAccount