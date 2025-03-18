import React from "react";
import { Link } from "react-router-dom";
import { formsData } from "../Form/formsData";
 
const ApplicationBlock = ({ form }) => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col md:gap-3 justify-end py-4 items-end">
        <hr className="w-full h-0.2 bg-white md:mb-4" />
        <div className="flex items-center md:gap-10 md:flex-row flex-col md:justify-between">
          <div className="flex md:gap-2 md:flex-row flex-col pt-4">
            <h2 className="text-xl font-bold text-white uppercase">
              {form.title}
            </h2>
            <p className="text-white text-xs w-4/12">{form.description}</p>
          </div>
          <div className="flex justify-end">
            <Link to={`/form/${form.id}`} className="block">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 14H34M34 14V34M34 14L14 34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Assistant = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-start">
        <div className="py-5 md:pb-10 flex justify-between">
          <h1 className="md:text-5xl text-2xl font-bold">
            Помощник в подготовке документов
          </h1>
          <button className="text-sm md:flex hidden">Открыть больше</button>
        </div>

        {/* Контейнер с формами */}
        <div className="flex flex-wrap">
          {formsData.map((form) => (
            <ApplicationBlock key={form.id} form={form} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assistant;
