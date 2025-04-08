import { Helmet } from "react-helmet-async";
import procedureImage from '../../assets/info5.png';
import { useTranslation } from 'react-i18next';

const Procedure = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("procedure.title")}</title>
        <meta name="description" content={t("procedure.meta_description")} />
        <meta name="keywords" content={t("procedure.meta_keywords")} />
      </Helmet>

      <section className="py-8 text-white h-svh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2 px-4 sm:px-6">
            <h1 className="text-2xl font-bold mb-4">{t("procedure.main_title")}</h1>
            <p className="mb-4">{t("procedure.intro")}</p>
            <ol className="list-decimal pl-6 space-y-2">
              {t("procedure.steps", { returnObjects: true }).map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 font-semibold">
              {t("procedure.conclusion")}
            </p>
          </div>

          <div className="lg:w-1/2 px-4 sm:px-6">
            <img 
              src={procedureImage} 
              alt={t("procedure.image_alt")} 
              className="h-60 object-contain w-full rounded-lg" 
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default Procedure;