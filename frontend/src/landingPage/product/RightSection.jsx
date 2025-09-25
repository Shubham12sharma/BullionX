import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 order-md-1 order-2">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <a href={learnMore} className="btn btn-outline-secondary">Learn More</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center order-md-2 order-1 mb-4 mb-md-0">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
