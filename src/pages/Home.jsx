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
import { useTranslation } from "react-i18next";

const Home = () => {
  const salaryCalculatorRef = useRef(null);  
  const {t} = useTranslation()

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
    
      </Helmet>
      <div className="container">
  
        <section className="text-white md:py-16 py-2 px-6">
          <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
            <img
              src={papers}
              alt="Книжка"
              className="md:w-24 mb-4 md:hidden self-center   top-[19px] right-[-98px] w-10 relative"
            />

            <div className="text-left md:text-left ">
              <h1 className="md:text-6xl text-[200%] top-[14px] relative md:top-0 md:relative font-bold leading-tight">
              {t("home.online")}  <br /> {t("home.online2")}  <br /> {t("home.online3")} 
              </h1>

              <button
                onClick={handleClick}
                className="mt-6 bg-white text-black font-medium py-2 px-8 md:px-22 rounded-2xl shadow-lg hover:bg-gray-200 md:static md:mt-6 md:inline-block  mx-auto hidden"
              >
                {t("home.count")}
              </button>
            </div>

            <div className="relative flex-shrink-0 mt-2 md:mt-0 flex items-center">
              <img
                src={angular}
                alt="Линии"
                className="w-32 absolute top-10 -left-10 md:top-36 md:-left-51"
              />

              <img
                src={woman}
                alt="Девушка"
                className="w-48 md:w-64 relative left-20 md:-left-26 md:top-10"
              />

              <img
                src={papers}
                alt="Книжка"
                className="md:w-24 md:absolute md:-top-20 md:left-20 hidden md:block"
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
