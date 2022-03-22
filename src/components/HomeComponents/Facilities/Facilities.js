import React from "react";

import "./Facilities.css";
import food from "./images/food.png";
import hobby from "./images/hobby.jpg";
import sports from "./images/sports.jpg";
import tech from "./images/tech.jpg";

function Facilities() {
  return (
    <>
      <div className="FacilitiesContainer ">
        <div>
          <h6 className="text-[#f1c50e] mb-5">Find a Location</h6>
          <h2 className="text-lg xs:text-2xl md:text-3xl font-bold uppercase mb-2 md:mb-5 text-white">
            LIFE AT <span className="text-[#f1c50e]">OSNR UNIVERSITY</span>
          </h2>
          <hr className="w-40 border-t-4 mx-auto rounded-lg border-[#f1c50e] text-[#f1c50e]" />
          <div className="FacilitiesCardsContainer ">
            <Card
              bgColor=""
              imageLink={tech}
              heading="Tech Clubs"
              buttonText="MORE"
            >
              A Launchpad of Technical Talents
            </Card>
            <Card
              bgColor=""
              imageLink={hobby}
              heading="Hobby Clubs"
              buttonText="MORE"
            >
              35+ Hobby Clubs for Recreation
            </Card>
            <Card
              bgColor=""
              imageLink={sports}
              heading="Sports Clubs"
              buttonText="MORE"
            >
              30+ sports to foster the sportive spirit
            </Card>
            <Card bgColor="" imageLink={food} heading="Food" buttonText="MORE">
              Choice of 10+ restaurants with hygienic food
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

const Card = (props) => {
  return (
    <>
      <div className={`${props.bgColor} bg-[#634491] FacilitiesCardFunDiv `}>
        <div className="p-0">
          <section className="truncate">
            <img
              src={props.imageLink}
              alt={props.heading}
              className="ease-out duration-700 hover:scale-150"
            />
          </section>
          <h3 className="FacilitiesCardFunHeading ">{props.heading}</h3>
          <p className="text-white text-xs font-medium px-2">
            {props.children}
          </p>
          {/* <button className="FacilitiesCardFunButton ">
            {props.buttonText}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Facilities;
