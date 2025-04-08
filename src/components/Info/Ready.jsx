import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import info2 from '../../assets/info2.png';

const Ready = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("ready.title")}</title>
        <meta name="description" content={t("ready.meta_description")} />
        <meta name="keywords" content={t("ready.meta_keywords")} />
      </Helmet>

      <section className="py-8 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2 px-4 sm:px-8">
            <h1 className="text-2xl font-bold mb-4">{t("ready.main_title")}</h1>
            <p className="mb-4">{t("ready.intro_text")}</p>
            
            <ul className="list-disc pl-6 space-y-2">
              {t("ready.court_options", { returnObjects: true }).map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            
            <p className="mt-4">{t("ready.example_text")}</p>
            
            <div className="mt-6 p-4  rounded-lg">
              <p className="font-semibold"> {t("ready.important_note.title")}</p>
              <p>{t("ready.important_note.content")}</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 px-4 sm:px-8">
            <img src={info2} alt={t("ready.image_alt")} className="h-60 object-contain w-full rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ready;