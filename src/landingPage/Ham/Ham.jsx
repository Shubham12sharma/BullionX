import React from 'react';
import { Link } from 'react-router-dom';

function Ham() {
  return (
    <div
      className="dropdown-menu"
      style={{
        display: 'block',
        position: 'absolute',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 1000,
      }}
    >
      {/* Trading Platform Section */}
      <div className="dropdown-section">
        <div className="d-flex justify-content-between">
          <Link to="/kite" className="dropdown-item">
            <i className="fa fa-chevron-left" style={{ color: 'orange' }}></i> Kite
            <div className="text-muted small">Trading platform</div>
          </Link>
          <Link to="/console" className="dropdown-item">
            <i className="fa fa-circle-notch" style={{ color: 'blue' }}></i> Console
            <div className="text-muted small">Backoffice</div>
          </Link>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <Link to="/kiteconnect" className="dropdown-item">
            <i className="fa fa-cube" style={{ color: 'gray' }}></i> Kite Connect
            <div className="text-muted small">Trading APIs</div>
          </Link>
          <Link to="/coin" className="dropdown-item">
            <i className="fa fa-coins" style={{ color: 'gold' }}></i> Coin
            <div className="text-muted small">Mutual funds</div>
          </Link>
        </div>
      </div>

      {/* Utilities Section */}
      <div className="dropdown-section mt-3">
        <h6>UTILITIES</h6>
        <Link to="/calculators" className="dropdown-item">Calculators</Link>
        <Link to="/brokerage-calculator" className="dropdown-item">Brokerage calculator</Link>
        <Link to="/margin-calculator" className="dropdown-item">Margin calculator</Link>
        <Link to="/sip-calculator" className="dropdown-item">SIP calculator</Link>
      </div>

      {/* Updates Section */}
      <div className="dropdown-section mt-3">
        <h6>UPDATES</h6>
        <Link to="/z-connect" className="dropdown-item">Z-Connect blog</Link>
        <Link to="/circulars" className="dropdown-item">Circulars / Bulletin</Link>
        <Link to="/ipos" className="dropdown-item">IPOs</Link>
        <Link to="/markets" className="dropdown-item">Markets</Link>
      </div>

      {/* Education Section */}
      <div className="dropdown-section mt-3">
        <h6>EDUCATION</h6>
        <div className="d-flex justify-content-between">
          <Link to="/varsity" className="dropdown-item">
            <i className="fa fa-book" style={{ color: 'purple' }}></i> Varsity
          </Link>
          <Link to="/trading-qa" className="dropdown-item">
            <i className="fa fa-comment" style={{ color: 'blue' }}></i> Trading Q&A
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ham;