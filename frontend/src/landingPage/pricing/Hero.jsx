import React from 'react';
import imagezero from '../../assets/0ru.svg';
import imgtwenty from '../../assets/20ru.svg';

function Hero() {
  const TableHeader = () => (
    <thead>
      <tr>
        <th className="border px-4 py-2 text-left bg-blue-100"></th>
        <th colSpan="2" className="border px-4 py-2 text-center bg-blue-100">EQUITY</th>
        <th colSpan="2" className="border px-4 py-2 text-center bg-blue-100">F&O</th>
        <th colSpan="2" className="border px-4 py-2 text-center bg-blue-100">CURRENCY</th>
        <th colSpan="2" className="border px-4 py-2 text-center bg-blue-100">COMMODITY</th>
      </tr>
      <tr>
        <th className="border px-4 py-2 text-left bg-gray-100"></th>
        <th className="border px-4 py-2 text-center bg-gray-100">Equity delivery</th>
        <th className="border px-4 py-2 text-center bg-gray-100">Equity intraday</th>
        <th className="border px-4 py-2 text-center bg-gray-100">F&O - Futures</th>
        <th className="border px-4 py-2 text-center bg-gray-100">F&O - Options</th>
        <th className="border px-4 py-2 text-center bg-gray-100">Currency futures</th>
        <th className="border px-4 py-2 text-center bg-gray-100">Currency options</th>
        <th className="border px-4 py-2 text-center bg-gray-100">Commodity futures</th>
        <th className="border px-4 py-2 text-center bg-gray-100">Commodity options</th>
      </tr>
    </thead>
  );

  const TableRow = ({ label, data }) => (
    <tr>
      <td className="border px-4 py-2 font-semibold">{label}</td>
      {data.map((item, index) => (
        <td key={index} className="border px-4 py-2">{item}</td>
      ))}
    </tr>
  );

  const TradingTable = () => {
    const tableData = [
      {
        label: "Brokerage",
        data: [
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
          "0.03% or ₹20/executed order whichever is lower",
          "₹20/executed order",
          "0.03%, or Rs. 20/executed order whichever is lower",
          "₹20/executed order",
        ],
      },
      {
        label: "STT/CTT",
        data: [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.02% on the sell side",
          "• 0.0125% of the intrinsic value on options that are bought and exercised\n• 0.1% on sell side (on premium)",
          "No STT",
          "No STT",
          "0.01% on sell side (Non-Agri)",
          "0.05% on sell side",
        ],
      },
      {
        label: "Transaction charges",
        data: [
          "NSE: 0.00297%\nBSE: 0.00375%",
          "NSE: 0.00297%\nBSE: 0.00375%",
          "NSE: 0.00173%\nBSE: 0",
          "NSE: 0.03503% (on premium)\nBSE: 0.0325% (on premium)",
          "NSE: 0.00035%\nBSE: 0.00045%",
          "NSE: 0.0311%\nBSE: 0.001%",
          "MCX: 0.0021%\nNSE: 0.0001%",
          "MCX: 0.0418%\nNSE: 0.001%",
        ],
      },
      {
        label: "GST",
        data: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
      {
        label: "SEBI charges",
        data: [
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "Agri:\n₹1 / crore\nNon-agri:\n₹10 / crore",
          "₹10 / crore",
        ],
      },
      {
        label: "Stamp charges",
        data: [
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      },
    ];

    return (
      <table className="border-collapse border w-full text-sm">
        <TableHeader />
        <tbody>
          {tableData.map((row, index) => (
            <TableRow key={index} label={row.label} data={row.data} />
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center">
          <h1>Pricing</h1>
          <h4 className="text-muted fs-5 mt-2">
            Free Equity investment and flat ₹20 intraday and F&O trades
          </h4>
        </div>
        <div className="row p-5 mt-5">
          <div className="col-4 text-center">
            <img src={imagezero} alt="Zero brokerage" />
            <h3>Free equity delivery</h3>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 text-center">
            <img src={imgtwenty} alt="Flat 20 brokerage" />
            <h3>Intraday and F&O trades</h3>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 text-center">
            <img src={imagezero} alt="Zero commission" />
            <h3>Free direct MF</h3>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-12">
            <h1 className="text-2xl font-bold mb-4">Trading Charges Table</h1>
            <TradingTable />
          </div>
        
        </div>
        <p className='text-center'><a href='#' style={{textDecoration:'none'}}>Calculate your costs upfront </a>using our brokerage calculator</p>
      </div>
    </>
  );
}

export default Hero;