import React from "react";

import "./Experience.css";
import comment from "./images/comment.svg";
import student_1 from "./images/student1.png";
import student_2 from "./images/student2.png";
import student_3 from "./images/student3.png";
function Experience() {
  return (
    <>
      <div className="w-[100%] bg-white text-center py-10">
        <h2 className="text-lg xs:text-2xl md:text-3xl font-bold uppercase mb-2 md:mb-5 text-black">
          Hear out our student{" "}
          <span className="text-mycolor">experiences!</span>
        </h2>
        <hr className="w-40  border-t-4 mx-auto rounded-lg border-mycolor" />
        <div className="experienceContainer ">
          <div className="experienceDiv">
            <img src={comment} alt="" className="w-12" />
            <p className="pt-6 text-sm">
              Learning at OSNR University has provided me with the much needed
              learning experience which has not only shaped my knowledge, but it
              has also provided me with the most enriching global experience.
            </p>
            <h2 className="experienceHeading">Madhavi B</h2>
            <section className="absolute -bottom-12">
              <img src={student_1} alt="" />
            </section>
          </div>
          <div className="experienceDiv">
            <img src={comment} alt="" className="w-12" />
            <p className="pt-6 text-sm">
              OSNR University provided me with career opportunities and
              placement opportunities through its numerous campus drives with
              top recruiters. I was able to receive the training which i
              required from this, allowing me get a lucrative job for my
              placements.
            </p>
            <h2 className="experienceHeading">Hemant G</h2>
            <section className="absolute -bottom-12">
              <img src={student_2} alt="" />
            </section>
          </div>
          <div className="experienceDiv">
            <img src={comment} alt="" className="w-12" />
            <p className="pt-6 text-sm">
              I am grateful for the learning experience which I got while
              learning at OSNR the University. The faculties and professors of
              the University provide me with a comprehensive learning exposure,
              in both my academics and my creative passion.
            </p>
            <h2 className="experienceHeading">Sivani O</h2>
            <section className="absolute -bottom-12">
              <img src={student_3} alt="" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
