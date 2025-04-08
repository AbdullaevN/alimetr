import courtImage from '../../assets/info4.png';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const HowToBehave = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("court_behavior.title")}</title>
        <meta name="description" content={t("court_behavior.meta_description")} />
        <meta name="keywords" content={t("court_behavior.meta_keywords")} />
        <link rel="canonical" href="https://alimetr.kg/how-to-behave-in-court" />
      </Helmet>
      <section className="py-8 text-white px-6 md:px-10"> {/* Добавлены отступы px-6 md:px-10 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t("court_behavior.main_title")}</h1>
            <p className="mb-4">{t("court_behavior.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {t("court_behavior.tips", { returnObjects: true }).map((tip, index) => (
                <li key={index}>
                  <strong>{tip.title}:</strong> {tip.description}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold">
              {t("court_behavior.conclusion")}
            </p>
          </div>

          <div className="lg:w-1/2">
            <img 
              src={courtImage} 
              alt={t("court_behavior.image_alt")} 
              className="h-60 object-contain w-full rounded-lg" 
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default HowToBehave;