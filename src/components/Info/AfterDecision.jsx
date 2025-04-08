 




import { Helmet } from "react-helmet-async";
import procedureImage from "../../assets/info7.png";
import { useTranslation } from "react-i18next";

const AfterDecision = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("after_decision.title")}</title>
        <meta
          name="description"
          content={t("after_decision.meta_description")}
        />
        <meta
          name="keywords"
          content={t("after_decision.meta_keywords")}
        />
        <link rel="canonical" href="https://alimetr.kg/after-court-decision" />
      </Helmet>
      <section className="py-8 text-white px-6 md:px-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t("after_decision.main_title")}</h1>
            
             <h2 className="text-xl font-semibold mt-4">{t("after_decision.steps.step1.title")}</h2>
            <p className="mt-2">{t("after_decision.steps.step1.content")}</p>
            
             <h2 className="text-xl font-semibold mt-4">{t("after_decision.steps.step2.title")}</h2>
            <p className="mt-2">{t("after_decision.steps.step2.content")}</p>
            
             <h2 className="text-xl font-semibold mt-4">{t("after_decision.steps.step3.title")}</h2>
            <p className="mt-2">{t("after_decision.steps.step3.content")}</p>
            
             <h2 className="text-xl font-semibold mt-4">{t("after_decision.steps.step4.title")}</h2>
            <p className="mt-2">{t("after_decision.steps.step4.content")}</p>
            
             <h2 className="text-xl font-semibold mt-4">{t("after_decision.steps.step5.title")}</h2>
            <p className="mt-2">{t("after_decision.steps.step5.content")}</p>
            
             <h2 className="text-xl font-semibold mt-4">{t("after_decision.steps.step6.title")}</h2>
            <p className="mt-2">{t("after_decision.steps.step6.content")}</p>
            
             <div className="mt-6 p-4  rounded-lg">
              <h2 className="text-xl font-semibold">{t("after_decision.important_notes.title")}</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                {t("after_decision.important_notes.points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={procedureImage} 
              alt={t("after_decision.image_alt")} 
              className="h-60 object-contain w-full rounded-lg" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AfterDecision;