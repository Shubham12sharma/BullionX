
import './App.css'
import HomePage from './landingPage/home/HomePage';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import SignUp from './landingPage/signUp/SignUp';
import About from './landingPage/about/AboutPage'
import Product from './landingPage/product/ProductPage'
import Pricing from './landingPage/pricing/PricingPage';
import Support from './landingPage/support/SupportPage'
import Footer from './landingPage/Footer';
import Navbar from './landingPage/Navbar';
import NotFound from './landingPage/NotFound';
function App() {
 return(
    <>
      <BrowserRouter>
       <Navbar/>
          <Routes>
             
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/signUp' element={<SignUp/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/product' element={<Product/>}></Route>
              <Route path='/pricing' element={<Pricing/>}></Route>
              <Route path='/support' element={<Support/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
             
          </Routes>
           <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
