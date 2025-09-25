import React from 'react'

function Hero() {
  return (
    <div class="container-fluid py-4" style={{backgroundColor:"#7cabf7"}}>
    <div className='container'>
    <div class="row mb-4">
      <div class="mt-5 mb-3 col-12 d-flex justify-content-between align-items-center">
        <h3 class="fs-3 text-white">Support PORTAL</h3>
        <a href="#" class="underline text-white">Track tickets</a>
      </div>
    </div>

  
    <div class="row ">
     
      <div class="col-md-8 ">
        <h2 class="fs-5 mb-3">Search for an answer or browse help topics to create a ticket</h2>
        <div class="mb-3">
          <input 
            type="text" 
            style={{width:"460px"}}
            class="search-input" 
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
          />
        </div>
        <div class="d-flex flex-wrap gap-3 mb-3 ">
          <a href="#" class="underline text-white">Track account opening</a>
          <a href="#" class="underline text-white">Track segment activation</a>
          <a href="#" class="underline text-white">Intraday margins</a>
        </div>
        <div>
          <a href="#" class="underline text-white">KITE user manual</a>
        </div>
      </div>

  
      <div class="col-md-4">
        <h3 class="fs-5 fw-bold mb-2">Featured</h3>
        <ol class="list-decimal ps-4">
          <li><a href="#" class="underline text-white">Surveillance measure on scrips - June 2025</a></li>
          <li><a href="#" class="underline text-white">Rights Entitlements listing in June 2025</a></li>
        </ol>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Hero