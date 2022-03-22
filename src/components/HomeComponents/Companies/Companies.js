import React from "react";

import "./Companies.css";
import companies_1 from "./images/companies_1.png";
import companies_2 from "./images/companies_2.png";
import companies_3 from "./images/companies_3.png";
import companies_4 from "./images/companies_4.png";

function Companies() {
  return (
    <>
      <div className="placementsDiv pt-10 pb-10 w-full h-full flex flex-col items-center">
        <h2 className="text-lg xs:text-2xl md:text-3xl font-bold text-black uppercase mb-2 md:mb-5">
          COMPANIES HIRED <span className="text-mycolor">OUR STUDENTS</span>
        </h2>
        <hr className="w-40 mb-10 border-t-4 mx-auto rounded-lg border-mycolor" />
        <div className="w-[80%] lg:w-[70%] flex flex-col lg:space-y-3">
          <section className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5">
            <img
              src={companies_3}
              alt=""
              className="lg:w-1/2 p-2 border-[1px] border-mycolor shadow-lg "
            />
            <img
              src={companies_1}
              alt=""
              className="lg:w-1/2 p-2 border-[1px] border-mycolor shadow-lg "
            />
          </section>
          <section className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5">
            <img
              src={companies_2}
              alt=""
              className="hidden lg:block lg:w-1/2 p-2 border-[1px] border-mycolor shadow-lg"
            />
            <img
              src={companies_4}
              alt=""
              className="hidden lg:block lg:w-1/2 p-2 border-[1px] border-mycolor shadow-lg "
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Companies;
