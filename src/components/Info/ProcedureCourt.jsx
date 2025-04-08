import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import procedureImage from '../../assets/info6.png';


const CourtOrder = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("court_order.title")}</title>
        <meta name="description" content={t("court_order.meta_description")} />
        <meta name="keywords" content={t("court_order.meta_keywords")} />
      </Helmet>

      <section className="py-8 text-white px-6 md:px-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-4">{t("court_order.main_title")}</h1>
          <p className="mb-6">{t("court_order.description")}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t("court_order.when_use.title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t("court_order.when_use.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t("court_order.how_it_works.title")}</h2>
            {t("court_order.how_it_works.steps", { returnObjects: true }).map((step, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{step.title}</h3>
                <p>{step.content}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="  p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{t("court_order.scenarios.no_objection.title")}</h3>
              <p>{t("court_order.scenarios.no_objection.content")}</p>
            </div>
            <div className="  p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{t("court_order.scenarios.objection.title")}</h3>
              <p>{t("court_order.scenarios.objection.content")}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t("court_order.order_content.title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t("court_order.order_content.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t("court_order.how_to_use.title")}</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {t("court_order.how_to_use.steps", { returnObjects: true }).map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <div className="  p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                {t("court_order.how_to_use.notes", { returnObjects: true }).map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="  p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{t("court_order.important_notes.title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t("court_order.important_notes.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2">
            <img src={procedureImage} alt="Процедура подачи судебного приказа" className="h-60 object-contain w-full rounded-lg" />
          </div>
      </section>
    </>
  );
};

export default CourtOrder;