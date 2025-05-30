import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      
        <nav class="navbar navbar-expand-lg border-bottom ">
          <div class="container p-2">
            <Link class="navbar-brand" to="/">
              <img 
                src={logo} 
                alt='BullionX logo' 
                style={{ width: '15%' }} 
                />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ">
                  <Link class="nav-link active mx-2" to="/signup" >SignUp</Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active mx-2" to="/about" >About</Link>
                </li>
                <li class="nav-item  ">
                  <Link class="nav-link active mx-2" to="/product">Product</Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active mx-2" to="/pricing">Pricing</Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active mx-2" to="/support">Support</Link>
                </li>
               <li class="nav-item ">
                  <Link class="nav-link active mx-2" to="#"><i class="fa fa-bars" aria-hidden="true"></i></Link>
                </li>
               </ul>
            </div>
          </div>
        </nav>
      
    </>
  )
}

export default Navbar