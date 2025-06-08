
import './App.css'
import HomePage from './landingPage/home/HomePage';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import About from './landingPage/about/AboutPage'
import Product from './landingPage/product/ProductPage'
import Pricing from './landingPage/pricing/PricingPage';
import Support from './landingPage/support/SupportPage'


import SignUp from './landingPage/signUp/SignUp';

import Dashboard from './landingPage/component/Home';
import Ham from './landingPage/Ham/Ham';



function App() {
 return(
    <>
      <BrowserRouter>

          <Routes>
             
              <Route path='/homepage' element={<HomePage/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/product' element={<Product/>}></Route>
              <Route path='/pricing' element={<Pricing/>}></Route>
              <Route path='/support' element={<Support/>}></Route>
              <Route path='/ham' element={<Ham/>}></Route>

              <Route path='/*' element={<Dashboard />} />
              
          

              
            
              
          </Routes>


       
          
      </BrowserRouter>
    </>
  );
}

export default App
