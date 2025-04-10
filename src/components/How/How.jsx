import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";


const How = () => {
  const { t } = useTranslation();

  const steps = [
    { 
      step: "1", 
      title: t("how.step1_title"), 
      description: t("how.step1_description") 
    },
    { 
      step: "2", 
      title: t("how.step2_title"), 
      description: t("how.step2_description") 
    },
    { 
      step: "3", 
      title: t("how.step3_title"), 
      description: t("how.step3_description") 
    },
    { 
      step: "4", 
      title: t("how.step4_title"), 
      description: t("how.step4_description") 
    },
  ];

    return (
      <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="text-start mb-8">
          <h2 className="text-2xl font-bold text-white uppercase px-6">
            {t("how.how_it_works")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="text-white text-start p-3 rounded-lg w-full flex flex-col"
            >
              <h1 className="px-4 w-full text-4xl font-bold self-start pb-7">
                {item.step}
              </h1>
              <div className="w-[90%]">
                <h3 className="text-md font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default How;
