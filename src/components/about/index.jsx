import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../assets/img/cv.webp";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  CREDIT CARD GEN
                </h3>
              </div>
             </div>
            </div>
              {/* End .col */}

          {/* Achievements Ends */}
        </div> {/* End .row */}
      </div>
    </section>
  );
};

export default index;
