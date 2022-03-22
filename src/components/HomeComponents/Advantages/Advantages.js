import React from "react";

import "./Advantages.css";
import users from "./images/users.png";
import programs from "./images/programs.png";
import faculty from "./images/faculty.png";
import world from "./images/world.png";
import research from "./images/research.png";
import collaboration from "./images/collaboration.png";

function Advantages() {
  return (
    <>
      <div
        className="advantagesContainer "
        style={{ fontFamily: "Montserrat" }}
      >
        <h1 className="">Advantages of our University</h1>
        <div className="w-[90%] m-auto flex flex-col lg:flex-row">
          <div className="">
            <div className="flex flex-row">
              <Advantages_cards
                imageLink={users}
                heading="50k Students"
                myClassName="border-r-2"
              >
                from 60+ countries across world
              </Advantages_cards>
              <section className="border-r-2 "></section>
              <Advantages_cards
                imageLink={programs}
                heading="300+ Programs"
                myClassName="border-r-2 "
              >
                across 40+ diverse disciplines
              </Advantages_cards>
              <section className="border-r-2 "></section>

              <Advantages_cards
                imageLink={faculty}
                heading="Renowned Faculty"
                myClassName="md:border-r-2"
              >
                3000+ members from across India
              </Advantages_cards>
            </div>
          </div>
          <hr className=" w-full lg:hidden" />
          <section className="hidden lg:block border-r-2"></section>
          <div className="">
            <div className="flex flex-row">
              <Advantages_cards
                imageLink={world}
                heading="2,00,000+ Alumni"
                myClassName="border-r-2 "
              >
                part of global alumni network
              </Advantages_cards>
              <section className="border-r-2 "></section>

              <Advantages_cards
                imageLink={research}
                heading="100cr in research"
                myClassName="border-r-2 "
              >
                funding to build a strong research eco-system
              </Advantages_cards>
              <section className="border-r-2 "></section>

              <Advantages_cards
                imageLink={collaboration}
                heading="240+ Collaborations"
                myClassName="md:border-r-2"
              >
                with companies from across world
              </Advantages_cards>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Advantages_cards(props) {
  return (
    <>
      <div className="Advantages_cardsDiv">
        <img src={props.imageLink} alt="Icon" className="w-8 sm:w-10" />
        <section className={`px-1 lg:px-3 2xl:px-5`}>
          <h2 className="text-[10px] sm:text-sm xl:text-base font-semibold ">
            {props.heading}
          </h2>
          <p className="text-[8px] sm:text-[10px] md:text-xs font-normal">
            {props.children}
          </p>
        </section>
      </div>
    </>
  );
}

export default Advantages;
