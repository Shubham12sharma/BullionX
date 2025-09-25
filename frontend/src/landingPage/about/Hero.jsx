import React from 'react'

function Hero() {
  return (
     <>
        <div className='container'>
          <div className='row p-5'>
              <h1 className='fs-4 text-center'>We pioneered the discount broking model in India.<br/>
                Now, we are breaking ground with our technology.</h1>
          </div>
          <hr className='mt-5'/>

          <div className='row p-5'>
            <div className='col-6'>
              <p>We started BullionX on the 15th of August, 2010 with a vision to eliminate the hurdles faced by traders and investors in the precious metals market. Our mission has always been to make bullion trading more accessible, transparent, and cost-effective. The name BullionX represents our commitment to excellence in bullion trading, with the 'X' symbolizing limitless possibilities and the next generation of financial freedom.</p>
              <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
              <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div className='col-6'>
                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets</p>
                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
            </div>
          </div>
        </div>
     </>
  )
}

export default Hero