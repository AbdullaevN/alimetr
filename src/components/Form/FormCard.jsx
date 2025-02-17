import React from "react";
import { Link } from "react-router-dom";

const FormCard = ({ form }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between  p-5 rounded-xl shadow-md md:shadow-sm w-full">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <img 
          src={form.image} 
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain bg-white" 
          alt="Form" 
        />
        <div className="sm:ml-4 text-center sm:text-left">
          <h2 className="font-bold text-lg">{form.title}</h2>
          <p className="text-gray-900 max-w-[280px] sm:max-w-[400px]">{form.description}</p>
        </div>
      </div>
      <Link to={`/form/${form.id}`} className="mt-4 sm:mt-0">
        <button className="w-full sm:w-auto px-4 py-2 bg-white/50 text-black rounded-full border border-white shadow-md hover:bg-white/20 transition">
          Заполнить
        </button>
      </Link>
    </div>
  );
};

export default FormCard;
