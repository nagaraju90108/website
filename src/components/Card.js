import React, { Children } from "react";

const Card = (props) => {
  return (
    <>
      <div className={`${props.bgColor}`}>
        <section className="p-7">
          <img src={props.imageLink} alt="Laptop" />
          <h3 className="mt-7 mb-5 text-[#f1c50e] tracking-widest">
            {props.heading}
          </h3>
          <p className="text-white text-xs font-medium text-justify">
            {props.children}
          </p>
          <button className="text-[10px] tracking-widest font-semibold mt-5 px-7 py-2 bg-[#f1c50e]">
            {props.buttonText}
          </button>
        </section>
      </div>
    </>
  );
};

export default Card;
