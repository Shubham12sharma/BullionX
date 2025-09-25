import React from 'react';

import smallCase from '../../assets/smallcaseLogo.png';
import streak from '../../assets/streakLogo.png';
import senseibull from '../../assets/sensibullLogo.svg';
import ditto from '../../assets/dittoLogo.png';

function Universe() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1>The BullionX Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>

      <div className="row text-center">
        <div className="col-md-3 col-sm-6 mb-4">
          <img src={smallCase} alt="Smallcase" className="img-fluid mb-2" style={{ maxHeight: '80px' }} />
          <p className="text-muted">Thematic investing platform.</p>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <img src={streak} alt="Streak" className="img-fluid mb-2" style={{ maxHeight: '80px' }} />
          <p className="text-muted">Algo & strategy platform.</p>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <img src={senseibull} alt="Sensibull" className="img-fluid mb-2" style={{ maxHeight: '80px' }} />
          <p className="text-muted">Option trading platform.</p>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <img src={ditto} alt="Ditto" className="img-fluid mb-2" style={{ maxHeight: '80px' }} />
          <p className="text-muted">Insurance.</p>
        </div>
       
        <div className="text-center my-3">
          <button className="btn btn-primary px-4 py-2 rounded w-25">Signup for Free</button>
        </div>

      </div>
    </div>
  );
}

export default Universe;
