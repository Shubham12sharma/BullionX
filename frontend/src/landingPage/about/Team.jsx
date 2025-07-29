import React from 'react';
import Chairman from '../../assets/admin.jpg';

function Team() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image and Name */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={Chairman}
            alt="BullionX Chairman"
            className="rounded-circle img-fluid"
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
          <h4 className="mt-3 mb-1">Shubham Sharma</h4>
          <p className="text-muted">Founder</p>
        </div>

        {/* Description */}
        <div className="col-md-6">
          <p>
            Shubham bootstrapped and founded <strong>BullionX</strong> in 2010 to eliminate barriers in the precious metals market. Today, BullionX is redefining how people invest in bullion in India.
          </p>
          <p>
            He is an active contributor to financial innovation and transparency in bullion trading.
          </p>
          <p>
            Exploring the intersection of finance and technology is his zen.
          </p>
          <p>
            Connect via: <a href="/">Homepage</a> / <a href="https://tradingqna.com">TradingQnA</a> / <a href="https://twitter.com">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
