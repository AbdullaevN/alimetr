import { Helmet } from "react-helmet-async";
import procedureImage from "../../assets/info8.png";
import { useTranslation } from "react-i18next";

const AlimonyIsNotPaid = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("alimony_not_paid.title")}</title>
        <meta
          name="description"
          content={t("alimony_not_paid.meta_description")}
        />
        <meta
          name="keywords"
          content={t("alimony_not_paid.meta_keywords")}
        />
        <link rel="canonical" href="https://alimetr.kg/alimony-not-paid" />
      </Helmet>
      <section className="py-8 text-white px-6 md:px-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t("alimony_not_paid.main_title")}</h1>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.steps.step1.title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              {t("alimony_not_paid.steps.step1.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.steps.step2.title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              {t("alimony_not_paid.steps.step2.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.steps.step3.title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              {t("alimony_not_paid.steps.step3.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.steps.step4.title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              {t("alimony_not_paid.steps.step4.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.steps.step5.title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              {t("alimony_not_paid.steps.step5.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.steps.step6.title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              {t("alimony_not_paid.steps.step6.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={procedureImage} 
              alt={t("alimony_not_paid.image_alt")} 
              className="h-60 object-contain w-full rounded-lg" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AlimonyIsNotPaid;