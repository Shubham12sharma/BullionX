import React from 'react'

function CreateTicket() {
  return (
    <>
      <div className='container'>
        <div className='row   mb-5'></div>
        <h1 className='fs-2 text-center text-muted'>
          To create a ticket, select a relevant topic
        </h1>
        <div className='row p-5 '>
          <div className='col-4 p-3 mt-2 mb-2'>
            <h4><i className="fa fa-plus-square-o" aria-hidden="true"></i> Account Opening</h4>
            <ul className='list-unstyled'>
              <li><a href='#'>Resident Individual</a></li>
              <li><a href='#'>Minor</a></li>
              <li><a href='#'>Non Resident Indian (NRI)</a></li>
              <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
              <li><a href='#'>Glossary</a></li>
            </ul>
          </div>
          <div className='col-4 p-3 mt-2 mb-2'>
            <h4><i className="fa fa-user" aria-hidden="true"></i> Your BullionX Account</h4>
            <ul className='list-unstyled'>
              <li><a href='#'>Your Profile</a></li>
              <li><a href='#'>Account Modification</a></li>
              <li><a href='#'>Client Master Report (CMR) and Depository Participant (DP)</a></li>
              <li><a href='#'>Nomination</a></li>
              <li><a href='#'>Transfer and Conversion of Securities</a></li>
            </ul>
          </div>
          <div className='col-4 p-3 mt-2 mb-2'>
            <h4><i className="fa fa-line-chart" aria-hidden="true"></i> Trading</h4>
            <ul className='list-unstyled'>
              <li><a href='#'>Kite</a></li>
              <li><a href='#'>IPO</a></li>
              <li><a href='#'>Trading FAQs</a></li>
              <li><a href='#'>Margin Trading Facility (MTF) and Margins</a></li>
              <li><a href='#'>Charts and Orders</a></li>
              <li><a href='#'>Alerts and Nudges</a></li>
              <li><a href='#'>General</a></li>
            </ul>
          </div>
        </div>
        <div className='row p-5'>
          <div className='col-4 p-3 mt-2 mb-2'>
            <h4><i className="fa fa-money" aria-hidden="true"></i> Funds</h4>
            <ul className='list-unstyled'>
              <li><a href='#'>Add Money</a></li>
              <li><a href='#'>Withdraw Money</a></li>
              <li><a href='#'>Add Bank Accounts</a></li>
              <li><a href='#'>eMandates</a></li>
            </ul>
          </div>
          <div className='col-4 p-3 mt-2 mb-2'>
            <h4><i className="fa fa-pie-chart" aria-hidden="true"></i> Console</h4>
            <ul className='list-unstyled'>
              <li><a href='#'>Portfolio</a></li>
              <li><a href='#'>Corporate Actions</a></li>
              <li><a href='#'>Funds Statement</a></li>
              <li><a href='#'>Reports</a></li>
              <li><a href='#'>Profile</a></li>
              <li><a href='#'>Segments</a></li>
            </ul>
          </div>
          <div className='col-4 p-3 mt-2 mb-2'>
            <h4><i className="fa fa-university" aria-hidden="true"></i> Coin</h4>
            <ul className='list-unstyled' >
              <li><a href='#'>Mutual Funds</a></li>
              <li><a href='#'>National Pension Scheme (NPS)</a></li>
              <li><a href='#'>Features on Coin</a></li>
              <li><a href='#'>Payments and Orders</a></li>
              <li><a href='#'>General</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateTicket