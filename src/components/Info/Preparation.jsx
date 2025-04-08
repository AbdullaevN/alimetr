import React, { useEffect, useState } from "react";

import { Helmet } from 'react-helmet-async';
import info1 from '../../assets/info1.png';
import { useTranslation } from "react-i18next";



const languages = [
  // { code: "en", label: "English" },
  { code: "ru", label: "RU" },
  { code: "ky", label: "KG" },
];


const Preparation = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  
  
      const [language, setLanguage] = useState(localStorage.getItem("language") || "ru");
    
      useEffect(() => {
        i18n.changeLanguage(language);
      }, [language, i18n]);
    
     
  return (
    <>
      <Helmet>
        <title>{t("preparation.title")}</title>
        <meta name="description" content={t("preparation.meta_description")}/>
        <meta name="keywords" content={t("preparation.meta_keywords")} />
      </Helmet>

      <section className="py-8 text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8 sm:flex sm:flex-col-reverse sm:w-full">
    <div className="lg:w-1/2 px-4 sm:px-6">
      <h1 className="text-2xl font-bold mb-6">{t("preparation.title")}</h1>
      <p className="mb-6">{t("preparation.main_title")}</p>
      
      <ol className="list-decimal pl-6 space-y-4">
        {t("preparation.document_list", { returnObjects: true }).map((item, index) => (
          <li key={index}>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                {item.text}
                <div 
                  className="mt-2 text-sm  p-3 rounded-lg" 
                  dangerouslySetInnerHTML={{ __html: item.note }}
                />
              </>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 p-4  rounded-lg">
        <p className="font-semibold">{t("preparation.important_note.title")}</p>
        <p>{t("preparation.important_note.content")}</p>
      </div>

      <div className="mt-4 p-4  rounded-lg">
        <p className="font-semibold">{t("preparation.good_news.title")}</p>
        <p>{t("preparation.good_news.content")}</p>
      </div>
    </div>
    
    <div className="lg:w-1/2 px-4 sm:px-6">
      <img 
        src={info1} 
        alt={t("preparation.image_alt")} 
        className="h-auto max-w-full rounded-lg shadow-lg" 
      />
    </div>
  </div>
</section>
    </>
  );
};

export default Preparation;