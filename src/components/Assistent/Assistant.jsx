import React from "react";
import { Link } from "react-router-dom";
import { formsData } from "../Form/formsData"; 
 
const ApplicationBlock = ({ form }) => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-4 md:gap-3 justify-end py-4 items-center md:items-end">
        <hr className="w-full h-[1px] bg-white md:mb-4" />
        <div className="flex flex-col md:flex-row md:gap-10 w-full md:justify-between items-center text-center md:text-start">
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-25 pt-4 w-full md:w-8/12">
  <Link to={`/templates/${form.id}`} className="min-w-[30%] md:min-w-[200px] max-w-full">
    <h2 className="text-lg md:text-xl font-bold text-white uppercase break-words">
      {form.title}
    </h2>
  </Link>
  <p className="text-white text-base md:text-sm break-words flex-1">
    {form.description}
  </p>
</div>
          <div className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
            <Link to={`/templates/${form.id}`} className="block">
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

const Assistant = ({ limit }) => {
   const displayedItems = limit ? formsData.slice(0, limit) : formsData;
  //  const { t, i18n } = useTranslation();


  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-start">
        <div className="py-5 md:pb-10 flex flex-col md:flex-row justify-between items-center text-center md:text-start">
          <h1 className="text-2xl md:text-5xl font-bold">
            Помощник в подготовке документов
          </h1>
          <Link to={'/templates'} className="mt-4 md:mt-0">
            <button className="text-sm hidden md:flex cursor-pointer">
              Открыть больше
            </button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-wrap">
          {displayedItems.map((form) => (
            <ApplicationBlock key={form.id} form={form} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assistant;
