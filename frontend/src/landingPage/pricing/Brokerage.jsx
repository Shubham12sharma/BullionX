import React from 'react';

function Brokerage() {
  return (
    <>
      <div className="container">
        {/* Charges for Account Opening Section */}
        <div className="row p-5 mt-5">
          <div className="col-12">
            <h2 className="mb-4">Charges for Account Opening</h2>
            <table className="table table-bordered text-sm">
              <thead>
                <tr>
                  <th className="bg-light">Type of Account</th>
                  <th className="bg-light">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online account</td>
                  <td><span className="badge bg-success">FREE</span></td>
                </tr>
                <tr>
                  <td>Offline account</td>
                  <td><span className="badge bg-success">FREE</span></td>
                </tr>
                <tr>
                  <td>NRI account (offline only)</td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Charges for Optional Value Added Services Section */}
        <div className="row p-5">
          <div className="col-12">
            <h2 className="mb-4">Charges for Optional Value Added Services</h2>
            <table className="table table-bordered text-sm">
              <thead>
                <tr>
                  <th className="bg-light">Service</th>
                  <th className="bg-light">Billing Frequency</th>
                  <th className="bg-light">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Annual</td>
                  <td>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 500 | Historical: 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Charges Explained Section */}
        <div className="row p-5">
          <div className="col-12">
            <h2 className="mb-4">Charges Explained</h2>

            <h4>Securities/Commodities Transaction Tax</h4>
            <p>
              Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
              When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
            </p>

            <h4>Transaction/Turnover Charges</h4>
            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
            </p>
            <ul>
              <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</li>
              <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
              <li>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</li>
              <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
            </ul>

            <h4>Call & Trade</h4>
            <p>
              Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
            </p>

            <h4>Stamp Charges</h4>
            <p>
              Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
            </p>

            <h4>NRI Brokerage Charges</h4>
            <ul>
              <li>₹100 per order for futures and options.</li>
              <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
              <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
              <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            </ul>

            <h4>Account with Debit Balance</h4>
            <p>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </p>

            <h4>Charges for Investor’s Protection Fund Trust (IPFT) by NSE</h4>
            <ul>
              <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
              <li>Options - ₹50 per crore + GST traded value (premium value).</li>
              <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
            </ul>

            <h4>Margin Trading Facility (MTF)</h4>
            <ul>
              <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
              <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
              <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
            </ul>

            <h4>GST</h4>
            <p>
              Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges).
            </p>

            <h4>SEBI Charges</h4>
            <p>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
            </p>

            <h4>DP (Depository Participant) Charges</h4>
            <p>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
            </p>
            <ul>
              <li>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</li>
              <li>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</li>
            </ul>

            <h4>Pledging Charges</h4>
            <p>
              ₹30 + GST per pledge request per ISIN.
            </p>

            <h4>AMC (Account Maintenance Charges)</h4>
            <p>
              For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here.
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here.
            </p>

            <h4>Corporate Action Order Charges</h4>
            <p>
              ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
            </p>

            <h4>Off-market Transfer Charges</h4>
            <p>
              ₹25 per transaction.
            </p>

            <h4>Physical CMR Request</h4>
            <p>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
            </p>

            <h4>Payment Gateway Charges</h4>
            <p>
              ₹9 + GST (Not levied on transfers done via UPI).
            </p>

            <h4>Delayed Payment Charges</h4>
            <p>
              Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.
            </p>

            <h4>Trading Using 3-in-1 Account with Block Functionality</h4>
            <ul>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>

            <h4>Disclaimer</h4>
            <p>
              For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;