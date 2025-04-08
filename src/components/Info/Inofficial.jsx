import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import procedureImage from '../../assets/info10.png';

const Inofficial = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('unofficial_income_alimony.title')}</title>
        <meta name="description" content={t('unofficial_income_alimony.meta_description')} />
        <meta name="keywords" content={t('unofficial_income_alimony.meta_keywords')} />
      </Helmet>

      <section className="py-8 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t('unofficial_income_alimony.main_title')}</h1>
            
            <p>{t('unofficial_income_alimony.intro')}</p>
            
            <h2 className="text-xl font-semibold mt-4">{t('unofficial_income_alimony.steps.0.title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t('unofficial_income_alimony.steps.0.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t('unofficial_income_alimony.steps.1.title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t('unofficial_income_alimony.steps.1.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t('unofficial_income_alimony.steps.2.title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t('unofficial_income_alimony.steps.2.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t('unofficial_income_alimony.important_notes_title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t('unofficial_income_alimony.important_notes', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t('unofficial_income_alimony.legal_info') }} />
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src={procedureImage} 
              alt={t('unofficial_income_alimony.image_alt')} 
              className="h-60 object-contain w-full rounded-lg" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Inofficial;