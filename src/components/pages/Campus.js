import React from "react";
import Footer from "../Footer";
import campus from "../images/campus.webp";
import CampusLis from "../HomeComponents/Campus/CampusLis";
function Campus() {
  return (
    <>
      <div className="w-full">
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-lg xs:text-2xl md:text-3xl font-bold uppercase mb-2 md:mb-5 text-white">
            ACADEMICS
          </h2>
          <hr className="w-40 border-t-4 mx-auto rounded-lg border-mycolor" />
          <p className="w-[90%] lg:w-[80%] xl:w-[70%] pt-10 text-center text-white text-sm md:text-base">
            OSNR University is unique among its peer institutions in having
            Twenty Eight schools co-located on one contiguous campus, and all of
            them possess exceptional breadth and depth of excellence. This
            naturally facilitates multidisciplinary collaboration.
          </p>
        </div>
        <div className="bg-white m-auto pt-12 pb-10">
          <div className="flex flex-col lg:flex-row items-center w-[80%] lg:w-[90%] xl:w-[80%] mx-auto">
            <img
              src={campus}
              alt=""
              className="mx-auto rounded-xl xl:w-[900px]"
            />
            <p className="w-full  text-xs sm:text-sm lg:text-base text-gray-600 py-5 lg:px-5 xl:px-16 2xl:px-20 lg:py-0 text-justify ">
              <strong>OSNR University</strong> is a private academic institution
              dedicated to providing educational opportunities for the
              intellectual, social, and professional development of a diverse
              student population. To achieve this purpose, the institution
              offers focused and balanced curricula at Undergraduate, Master’s
              and Doctoral levels. A broad-based core curriculum is offered,
              promoting critical thinking, effective verbal and written
              communication, and skills for life-long learning. Our approach to
              higher education and the resulting varied academic experiences
              provide students with the intellectual acumen and pragmatic
              approach necessary to create the foundation for personal and
              professional fulfillment.
            </p>
          </div>
        </div>
        <CampusLis />
      </div>
      <Footer />
    </>
  );
}

export default Campus;
