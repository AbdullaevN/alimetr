import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import procedureImage from '../../assets/info11.png';

const PastPeriods = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('past_periods.title')}</title>
        <meta name="description" content={t('past_periods.meta_description')} />
        <meta name="keywords" content={t('past_periods.meta_keywords')} />
      </Helmet>

      <section className="py-8 text-white h-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t('past_periods.main_title')}</h1>
            
            <p>{t('past_periods.intro')}</p>
            
            {t('past_periods.sections', { returnObjects: true }).map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mt-4">{section.title}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            <h2 className="text-xl font-semibold mt-4">{t('past_periods.important_title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t('past_periods.important_notes', { returnObjects: true }).map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
            
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t('past_periods.legal_info') }} />
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src={procedureImage} 
              alt={t('past_periods.image_alt')} 
              className="h-60 object-contain w-full rounded-lg" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PastPeriods;