import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import procedureImage from '../../assets/info9.png';

const ChangeOfAlimony = () => {
  const { t } = useTranslation();

  const reasons = t('alimony_adjustment.reasons', { returnObjects: true });
  const howToApply = t('alimony_adjustment.how_to_apply', { returnObjects: true });
  const tips = t('alimony_adjustment.tips', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('alimony_adjustment.title')}</title>
        <meta name="description" content={t('alimony_adjustment.meta_description')} />
        <meta name="keywords" content={t('alimony_adjustment.meta_keywords')} />
      </Helmet>

      <section className="py-8 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t('alimony_adjustment.main_title')}</h1>

            <p className="text-lg">{t('alimony_adjustment.intro')}</p>
            
            <h2 className="text-xl font-semibold mt-4">{t('alimony_adjustment.reasons_title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {reasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4">{t('alimony_adjustment.how_to_apply_title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {howToApply.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4">{t('alimony_adjustment.tips_title')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {tips.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="text-lg mt-4">{t('alimony_adjustment.conclusion')}</p>
          </div>
          
          <div className="lg:w-1/2">
            <img
              src={procedureImage}
              alt={t('alimony_adjustment.image_alt')}
              className="h-60 object-contain w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangeOfAlimony;
