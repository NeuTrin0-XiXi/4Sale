import React from 'react';
import './Combined.css';

function AboutUs() {
  return (
    <div>
      <br /><br /><br />
      <div className="row featurette">
        <div className="col-md-7 d-flex align-items-center">
          <h1 className="featurette-heading block1aboutUs">We are what we deliver</h1>

        </div>
        <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://source.unsplash.com/500x500/?people" />


        </div>
      </div>
      {/* _______________________ */}
      <div className="row featurette">
        <div className="col-md-7 order-md-2 d-flex align-items-center  flex-direction-column">
          <div className="col-md-4">
            <h2 className="HeaderBox">Our Vision</h2>
          </div>
          <div className="col-md-8">
            <p className="paraAboutUs">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://source.unsplash.com/500x500/?work" />

        </div>
      </div>
      <div className="row featurette">
        <div className="col-md-7 d-flex align-items-center " >
          <h2 className="featurette-heading" style={{ fontsize: "55px" }}>Who are we? </h2>
          <p className="lead">We are the students of IIT Indore. This web application is an effort by us to provide buying and selling services withing the IITI community</p>
        </div>
        <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://source.unsplash.com/500x500/?product" />


        </div>
      </div>
      {/* _______________________ */}
      <div className="row featurette">
        <div className="col-md-7 order-md-2 d-flex align-items-center  flex-direction-column">
          <div className="col-md-4">
            <h2 className="HeaderBox">Join Us</h2>
          </div>
          <div className="col-md-8">
            <p className="paraAboutUs">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://source.unsplash.com/500x500/?company" />


        </div>
      </div>
      <br /><br /><br />
    </div>
  );
}

export default AboutUs;
