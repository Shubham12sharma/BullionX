import React from "react";
import googlePlayBadge from "../../assets/googlePlayBadge.svg";
import appstoreBadge from "../../assets/appstoreBadge.svg";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* Action Buttons */}
          <div className="mt-3">
            <a href={tryDemo} className="btn btn-primary ">Try Demo</a>
            <a href={learnMore} className="btn btn-outline-secondary mx-3">Learn More</a>
          </div>

          {/* Store Badges */}
          <div className="mt-4 ">
            <a href={googlePlay}>
              <img src={googlePlayBadge} alt="Get it on Google Play" className="img-fluid" style={{ height: '50px' }} />
            </a>
            <a href={appStore} className="ml-3">
              <img src={appstoreBadge} alt="Download on the App Store" className="img-fluid mx-3" style={{ height: '50px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
