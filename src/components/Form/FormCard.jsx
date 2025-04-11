 
import React from "react";
import { Link } from "react-router-dom";

const FormCard = ({ form }) => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col md:gap-3 justify-end py-4 items-end float-end ">
        <hr className="w-full h-0.8 bg-white md:mb-4 border-white" />
        <div className="flex items-center md:gap-10 align-baseline md:flex-row flex-col md:justify-between ">
          <div className="flex md:gap-2 md:flex-row flex-col pt-4">
            <h2 className="text-xl font-bold text-white uppercase text-start m-0">
              {form.title}
            </h2>
            <p className="text-white text-start text-xs w-4/12 m-0 ">
              {form.description}
            </p>
          </div>
          <div className="flex justify-end relative top-[-43px] right-[-109px] h-[12px] pb-0 mb-0 w-[35px]">
            <Link to={`/templates/${form.id}`} className="block">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 14H34M34 14V34M34 14L14 34"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;

