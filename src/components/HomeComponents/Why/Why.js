import React from "react";

import "./Why.css";
import alumni from "./images/alumni.jpg";
import research from "./images/research.jpg";
import startup from "./images/startup.png";
import twinning from "./images/twinning.jpg";

function Why() {
  return (
    <>
      <div
        className="w-full flex flex-col m-auto pt-1 pb-20
  text-center bg-white"
      >
        <h2 className="text-lg xs:text-2xl md:text-3xl font-bold text-black uppercase mb-2 md:mb-5">
          WHY CHOOSE <span className="text-mycolor">OSNR UNIVERSITY?</span>
        </h2>
        <hr className="w-40 border-t-4 mx-auto rounded-lg border-mycolor" />
        <div className="w-[90%] xs:w-[80%] lg:w-[70%] flex flex-col space-y-6 md:space-y-8 m-auto mt-10 items-center">
          <section className="flex flex-row basis-2 w-full">
            <WhyCards heading="Entrepreneurship">
              Hackathons, boot camps, ideathons etc are the various events
              promoted in the campus to increase the number of startups.
            </WhyCards>
            <WhyCardImages imageLink={startup}></WhyCardImages>
          </section>
          <section className="flex flex-row basis-2 w-full">
            <WhyCardImages imageLink={research}></WhyCardImages>
            <WhyCards heading="Research">
              Our Research Policy aims to bring a vibrant atmosphere of research
              innovation, to integrate research into all academic programs.
            </WhyCards>
          </section>
          <section className="flex flex-row basis-2 w-full">
            <WhyCards heading="Alumni Association">
              Our University’s Alumni Association conducts and sponsors
              seminars, conferences that are aimed at creating knowledge.
            </WhyCards>
            <WhyCardImages imageLink={alumni}></WhyCardImages>
          </section>
          <section className="flex flex-row basis-2 w-full">
            <WhyCardImages imageLink={twinning}></WhyCardImages>
            <WhyCards heading="Twinning Programs">
              Twinning Programs involve partial study at our University and rest
              of the studies at the Partner Universities in other countries.
            </WhyCards>
          </section>
        </div>
      </div>
    </>
  );
}

function WhyCards(props) {
  return (
    <div className="w-5/6 flex flex-col justify-center text-left py-1 px-3 sm:px-6 md:px-8 bg-[#ecf5fd]">
      <h1 className="text-sm sm:text-base md:text-xl font-semibold xs:font-bold">
        {props.heading}
      </h1>
      <p
        className="pt-2 text-[10px] xs:text-[13px] sm:text-[15px] md:text-[18px]"
        style={{ fontFamily: "Source Sans Pro" }}
      >
        {props.children}
      </p>
    </div>
  );
}
function WhyCardImages(props) {
  return (
    <div className="w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/5">
      <img src={props.imageLink} alt="alumni" className="" />
    </div>
  );
}

export default Why;
