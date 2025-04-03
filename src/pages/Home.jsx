import Header from "../components/Header/Header";
import main from "../assets/main.png";
import How from "../components/How/How";
import SalaryCalculator from "../components/Calculator/Calculator";
import Info from "../components/Info/Info";
import Footer from "../components/Footer/Footer";
import AlimonyCalculator from "../components/Calculator/AliCalc";
import Assistant from "../components/Assistent/Assistant";

import woman from "../assets/woman.png";
import angular from "../assets/angular.png";
import papers from "../assets/papers.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const salaryCalculatorRef = useRef(null);  

  const handleClick = () => {
     salaryCalculatorRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Helmet>
        <title>
        Расчет алиментов в Кыргызстане онлайн
        </title>
        <meta
          name="description"
          content="ОНЛАЙН-ПОМОЩНИК ПО РАСЧЕТУ АЛИМЕНТОВ В КЫРГЫЗСТАНЕ"
        />
        <meta
          name="keywords"
          content="алименты, калькулятор алиментов, алименты в Кыргызстане, расчет алиментов, сколько платить алименты"
        />
        {/* <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Alimetr.kg",
            "url": "https://alimetr.kg",
            "mainEntity": [
              { "@type": "WebPage", "@id": "https://alimetr.kg", "name": "Рассчитать алименты" },
              { "@type": "WebPage", "@id": "https://alimetr.kg/info", "name": "Полезная информация" },
              { "@type": "WebPage", "@id": "https://alimetr.kg/templates", "name": "Генератор заявлений" }
            ]
          })}
        </script> */}
      </Helmet>
      <div className="container">
    {/* <section className="text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
         <div className="text-left">
          <h1 className="text-6xl font-bold leading-tight">
            ОНЛАЙН-ПОМОЩНИК <br /> ПО РАСЧЕТУ <br /> АЛИМЕНТОВ
          </h1>
          <button className="mt-6 bg-white text-black font-medium py-2 px-22 rounded-2xl shadow-lg hover:bg-gray-200">
            Рассчитать
          </button>
        </div>

         <div className="relative flex-shrink-0 mt-8 md:mt-0 flex items-center">
           <img src={angular} alt="Линии" className="w-32 top-36 absolute -left-91" />
           <img src={woman} alt="Девушка" className="w-48 md:w-64 relative -left-61 top-10" />
          <img src={papers} alt="Девушка" className="w-24 absolute -top-20 -left-24" />

        </div>
      </div>
    </section> */}
        <section className="text-white md:py-16 py-2 px-6">
          <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
            <img
              src={papers}
              alt="Книжка"
              className="md:w-24 mb-4 md:hidden self-center   top-[19px] right-[-98px] w-10 relative"
            />

            <div className="text-left md:text-left ">
              <h1 className="md:text-6xl text-[200%] top-[14px] relative md:top-0 md:relative font-bold leading-tight">
                ОНЛАЙН-ПОМОЩНИК <br /> ПО РАСЧЕТУ <br /> АЛИМЕНТОВ
              </h1>

              <button
                onClick={handleClick}
                className="mt-6 bg-white text-black font-medium py-2 px-8 md:px-22 rounded-2xl shadow-lg hover:bg-gray-200 md:static md:mt-6 md:inline-block  mx-auto hidden"
              >
                Рассчитать
              </button>
            </div>

            <div className="relative flex-shrink-0 mt-2 md:mt-0 flex items-center">
              <img
                src={angular}
                alt="Линии"
                className="w-32 absolute top-10 -left-10 md:top-36 md:-left-91"
              />

              <img
                src={woman}
                alt="Девушка"
                className="w-48 md:w-64 relative left-20 md:-left-61 md:top-10"
              />

              <img
                src={papers}
                alt="Книжка"
                className="md:w-24 md:absolute md:-top-20 md:-left-24 hidden md:block"
              />
            </div>
            <button
              onClick={handleClick}
              className="mt-6 w-full bg-white text-black font-medium py-3 px-14  rounded-2xl shadow-lg hover:bg-gray-200 md:static md:mt-6    mx-auto md:hidden"
            >
              Рассчитать
            </button>
          </div>
        </section>

        <How />
        <div
          ref={salaryCalculatorRef}
          className="flex items-center justify-center "
        >
          <SalaryCalculator />
        </div>

        <div>
          {/* <Assistant limit={2}/> */}
          <Assistant />
        </div>

        <div>
          <Info limit={4} />
        </div>
      </div>
    </>
  );
};

export default Home;
