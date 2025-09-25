import React from 'react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <div className='container-fluid bg-body-tertiary mt-5 border-top'>
      <div className='container py-5'>
        <div className='row'>

          {/* Logo and Socials */}
          <div className='col-md-4 mb-4'>
            <img src={logo} alt='BullionX logo' style={{ width: '60%' }} />
            <p className='mt-3 mb-1'>© 2010 - 2025, BullionX Broking Ltd.</p>
            <p className='mb-3'>All rights reserved.</p>

            {/* Social Icons Row 1 */}
            <div className='d-flex gap-3 fs-5 mb-2'>
              <i className='fa fa-twitter'></i>
              <i className='fa fa-facebook-official'></i>
              <i className='fa fa-instagram'></i>
              <i className='fa fa-linkedin'></i>
            </div>

            <hr />

            {/* Social Icons Row 2 */}
            <div className='d-flex gap-3 fs-5'>
              <i className='fa fa-youtube-play'></i>
              <i className='fa fa-whatsapp'></i>
              <i className='fa fa-telegram'></i>
            </div>
          </div>

          {/* Links Columns */}
          {[
            {
              title: "Account",
              links: [
                "Open demat account", "Minor demat account", "NRI demat account",
                "Commodity", "Dematerialisation", "Fund transfer", "MTF", "Referral Program"
              ]
            },
            {
              title: "Support",
              links: [
                "Contact us", "Support portal", "How to file a complaint?",
                "Status of your complaints", "Bulletin", "Circular", "Z-Connect blog", "Downloads"
              ]
            },
            {
              title: "Company",
              links: [
                "About", "Philosophy", "Press & media", "Careers",
                "Zerodha Cares (CSR)", "Zerodha.tech", "Open source"
              ]
            },
            {
              title: "Quick links",
              links: [
                "Upcoming IPOs", "Brokerage charges", "Market holidays",
                "Economic calendar", "Calculators", "Markets", "Sectors"
              ]
            }
          ].map((section, index) => (
            <div key={index} className='col-md-2 mb-4'>
              <h5>{section.title}</h5>
              <ul className='list-unstyled'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href='#' className='text-dark text-decoration-none d-block mb-1'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal & Regulatory Info */}
        <div className='mt-5'>
          <p className='text-muted' style={{ fontSize: "12px" }}>
            BullionX Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL:
            Depository services through BullionX Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
            BullionX Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address:
            BullionX Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to
            complaints@bullionx.com, for DP related to dp@bullionx.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI | IC.
          </p>
          <p className='text-muted' style={{ fontSize: "12px" }}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES:
            Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p className='text-muted' style={{ fontSize: "12px" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p className='text-muted' style={{ fontSize: "12px" }}>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
            Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is
            done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process
            again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need
            to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank
            to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a
            business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please <a href='#'>create a ticket here.</a>
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className='mt-4 border-top pt-3'>
          <ul className='d-flex flex-wrap justify-content-center list-unstyled gap-3 small'>
            {["NSE", "BSE", "MSX", "Terms & Conditions", "Privacy Policy", "Disclosure", "Investor Attention", "Investor Charter"].map((text, idx) => (
              <li key={idx}>
                <a href='#' className='text-dark text-decoration-none'>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
