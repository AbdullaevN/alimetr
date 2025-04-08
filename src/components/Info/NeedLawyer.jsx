import { Helmet } from "react-helmet-async";
import procedureImage from "../../assets/info3.png";
import { useTranslation } from "react-i18next";

const NeedLawyer = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("need_lawyer.title")}</title>
        <meta
          name="description"
          content={t("need_lawyer.meta_description")}
        />
        <meta
          name="keywords"
          content={t("need_lawyer.meta_keywords")}
        />
        <link rel="canonical" href="https://alimetr.kg/need-lawyer" />
      </Helmet>
      <section className="py-8 text-white px-6 md:px-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t("need_lawyer.main_title")}</h1>
            
            <p className="mb-4">{t("need_lawyer.intro")}</p>
            
            {/* <h2 className="text-xl font-semibold mt-4">{t("need_lawyer.reasons_title")}</h2> */}
            <ul className="list-disc pl-6 space-y-2 mt-2">
              {t("need_lawyer.reasons", { returnObjects: true }).map((reason, index) => (
                <li key={index}>
                  <strong></strong> {reason.description}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">⚖️ {t("need_lawyer.important_note.title")}</h2>
              <p className="mt-2">{t("need_lawyer.important_note.content")}</p>
            </div>

            {/* <h2 className="text-xl font-semibold mt-4">{t("need_lawyer.conclusion_title")}</h2> */}
            <p className="mt-2">{t("need_lawyer.conclusion")}</p>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src={procedureImage} 
              alt={t("need_lawyer.image_alt")} 
              className="h-60 object-contain w-full rounded-lg" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NeedLawyer;