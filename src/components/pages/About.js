import React from "react";
import Footer from "../Footer";

function About() {
  return (
    <>
      <div className="min-h-[95vh] flex flex-col justify-center items-center lg:min-h-[85vh] text-center">
        <h1 className=" mb-4 md:mb-8 uppercase text-lg md:text-2xl lg:text-4xl font-semibold text-white">
          What are ReactJS and TailwindCSS?
        </h1>
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8 justify-center items-center">
          <div className="block p-4 lg:p-6 w-80 md:w-[600px] lg:max-w-md xl:max-w-lg bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <h5 className="mb-2 text-lg lg:text-2xl font-bold text-mycolor">
              ReactJS
            </h5>
            <p className="text-gray-900 text-xs lg:text-sm xl:text-base text-justify">
              React is a JavaScript-based UI development library. Facebook and
              an open-source developer community run it. Although React is a
              library rather than a language, it is widely used in web
              development.
              <br />
              <br />
              1). Easy creation of dynamic applications.
              <br />
              2). Improved performance.
              <br />
              3). Reusable components.
              <br />
              4). Dedicated tools for easy debugging.
            </p>
          </div>
          <div className="block p-4 lg:p-6 w-80 md:w-[600px] lg:max-w-md xl:max-w-lg bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
            <h5 className="mb-2 text-lg lg:text-2xl font-bold text-mycolor ">
              TailwindCSS
            </h5>
            <p className="text-gray-900 text-xs lg:text-sm xl:text-base text-justify">
              Tailwind is a utility-first CSS framework. In contrast to other
              CSS frameworks like Bootstrap or Materialize CSS it doesn’t come
              with predefined components. Instead Tailwind CSS operates on a
              lower level and provides you with a set of CSS helper classes.
              <br />
              <br />
              1). Minimum lines of Code in CSS file.
              <br />
              2). We can customize the designs to make the components.
              <br />
              3). Makes the website responsive.
              <br />
              4). Makes the changes in the desired manner.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
