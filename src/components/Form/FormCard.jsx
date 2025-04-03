// import React from "react";
// import { Link } from "react-router-dom";

// const FormCard = ({ form }) => {
//   return (
//     <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between  p-5 rounded-xl shadow-md md:shadow-sm w-full">
//       <div className="flex flex-col sm:flex-row items-center sm:items-start">
//         <img 
//           src={form.image} 
//           className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain bg-white" 
//           alt="Form" 
//         />
//         <div className="sm:ml-4 text-center sm:text-left">
//           <h2 className="font-bold text-lg">{form.title}</h2>
//           <p className="text-gray-900 max-w-[280px] sm:max-w-[400px]">{form.description}</p>
//         </div>
//       </div>
//       <Link to={`/form/${form.id}`} className="mt-4 sm:mt-0">
//         <button className="w-full sm:w-auto px-4 py-2 bg-white/50 text-black rounded-full border border-white shadow-md hover:bg-white/20 transition">
//           Заполнить
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default FormCard;
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
            <p className="text-white text-start text-xs w-4/12 m-0">
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

