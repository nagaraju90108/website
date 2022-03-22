import React from "react";

import "./Courses.css";
import under from "./images/under.jpg";
import post from "./images/post.jpg";
import phd from "./images/phd.jpg";

function Courses() {
  return (
    <>
      <div className="CoursesContainer ">
        <div>
          <h6 className="text-[#f1c50e] mb-5">Find a Course</h6>
          <h2 className="text-4xl text-white mb-5">Academic Courses</h2>
          <hr className="w-40 border-t-4 mx-auto rounded-lg border-[#f1c50e] text-[#f1c50e]" />
          <div className="CoursesCardsContainer ">
            <Card
              bgColor=""
              imageLink={under}
              heading="Undergraduate"
              buttonText="MORE"
            >
              Choose to be placed before you graduate through our lucrative
              career opportunities
            </Card>
            <Card
              bgColor=""
              imageLink={post}
              heading="Postgraduate"
              buttonText="MORE"
            >
              We believe in participative learning, experimentation rather than
              theoretical teaching
            </Card>
            <Card
              bgColor=""
              imageLink={phd}
              heading="Doctoral"
              buttonText="MORE"
            >
              Acquire confidence to master anything you want to accomplish in
              your life
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
      <div className={`${props.bgColor} bg-[#634491] CourseCardFunDiv `}>
        <div className="p-7">
          <section className="truncate">
            <img
              src={props.imageLink}
              alt={props.heading}
              className="ease-out duration-700 hover:scale-150"
            />
          </section>
          <h3 className="CourseCardFunHeading ">{props.heading}</h3>
          <p className="text-white text-xs font-medium ">{props.children}</p>
          <button className="CourseCardFunButton ">{props.buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default Courses;
