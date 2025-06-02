import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

import kiteImage from '../../assets/kite.png';
import googlePlayBadge from '../../assets/googlePlayBadge.svg';
import appstoreBadge from '../../assets/appstoreBadge.svg';
import varsity from '../../assets/varsity.png'
import coin from '../../assets/coin.png'
import console from '../../assets/console.png'
import kiteConnect from '../../assets/kiteconnect.png'

function ProductPage() {
  return (
    <>
     

      <Hero />

      <LeftSection
        imageURL={kiteImage}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/kite/demo"
        learnMore="/kite/info"
        googlePlay={googlePlayBadge}
        appStore={appstoreBadge}
      />

        <RightSection 
        imageURL={console}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/console/info"
        />

      <LeftSection
        imageURL={coin}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/coin/demo"
        learnMore="/coin/info"
        googlePlay={googlePlayBadge}
        appStore={appstoreBadge}
      />

      <RightSection 
      imageURL={kiteConnect}
      productName="Kite Connect API"
      productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      learnMore="/kiteConnect/info"
      />

      <LeftSection
        imageURL={varsity}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/varsity/demo"
        learnMore="/varsity/info"
        googlePlay={googlePlayBadge}
        appStore={appstoreBadge}
      />

      <p style={{marginLeft:"30%",marginRight:"30%", fontSize:"20px"}}>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}>BullionX.tech</a> blog.</p>

      <Universe />

     
    </>
  );
}

export default ProductPage;
