import React from "react";

import "./CampusLis.css";
import campus1 from "./images/campus1.jpg";
import campus2 from "./images/campus2.jpg";
import campus3 from "./images/campus3.jpg";
function Campus() {
  return (
    <>
      <div className="campusContainer ">
        <h2 className="campusContainerHeading">
          OUR INDIAN <span className="text-mycolor">CAMPUSES</span>
        </h2>
        <hr className="w-40 mb-10 border-t-4 mx-auto rounded-lg border-mycolor" />
        <div className="campusDivContainer ">
          <div className="CampusDiv ">
            <img src={campus1} alt="" className="" />
            <section className="CampusDivLayer ">
              <h1 className="">HYDERABAD</h1>
            </section>
          </div>

          <div className="CampusDiv">
            <img src={campus2} alt="" className="" />
            <section className="CampusDivLayer">
              <h1 className="">VIJAYAWADA</h1>
            </section>
          </div>

          <div className="CampusDiv">
            <img src={campus3} alt="" className="" />
            <section className="CampusDivLayer">
              <h1 className="">KOLKATA</h1>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campus;
