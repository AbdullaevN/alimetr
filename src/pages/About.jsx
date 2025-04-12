import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/about.png'; // замени на путь к своей картинке

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-8 text-white px-6 md:px-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase">
            {t("about.title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Левая часть — картинка */}
        

          {/* Правая часть — текст */}
          <div className="w-full md:w-1/2 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              {t("about.greeting")}
            </h3>

            <p className="mb-4">{t("about.description1")}</p>
            <p className="mb-4">{t("about.description2")}</p>
            <p className="mb-4">{t("about.description3")}</p>
            <p className="mb-4 font-bold">{t("about.description4")}</p>

            <ul className="list-none list-inside space-y-2 mb-4">
              <li>{t("about.feature1")}</li>
              <li>{t("about.feature2")}</li>
              <li>{t("about.feature3")}</li>
            </ul>

            <p className="mb-6">{t("about.closing")}</p>

           
          </div>



          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="About illustration"
              className="w-full max-w-md rounded-xl  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
