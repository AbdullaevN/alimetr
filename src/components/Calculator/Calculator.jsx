import React, { useState } from "react";
import fon from '../../assets/calc-fon.png';
import { useTranslation } from "react-i18next";

const SalaryCalculator = () => {
  const [region, setRegion] = useState("");
  const [children, setChildren] = useState("");
  const [income, setIncome] = useState("");
  const [result, setResult] = useState("");
  const [regionError, setRegionError] = useState("");
  const [childrenError, setChildrenError] = useState("");
  const [regionDetail, setRegionDetail] = useState("");
  const [childrenDetail, setChildrenDetail] = useState("");
  const [incomeDetail, setIncomeDetail] = useState("");

  const handleInputChange = (e) => {
    setIncome(e.target.value);
  };
  
  
  const {t} = useTranslation()



  const calculate = () => {
    let incomeValue = parseInt(income) || 0;

    setRegionError("");
    setChildrenError("");

    let valid = true;
    if (!region) {
      setRegionError("Пожалуйста, выберите регион.");
      valid = false;
    }
    if (!children) {
      setChildrenError("Пожалуйста, выберите количество детей.");
      valid = false;
    }

    if (!valid) return;

    const livingMinimum = {
      1: 37454, // Бишкек
      2: 26960, // Ош
      3: 28764, // Джалал-Абад
      4: 38743, // Иссык-Куль
      5: 33011, // Нарын
      6: 25554, // Баткен
      7: 30689, // Талас
      8: 25562, // Чуй
    };

    if (incomeValue === 0) {
      incomeValue = livingMinimum[region];
    }

    let percentage;
    switch (children) {
      case "1":
        percentage = 0.25;
        break;
      case "2":
        percentage = 0.33;
        break;
      case "3":
        percentage = 0.5;
        break;
      default:
        percentage = 0;
    }

    const alimony = incomeValue * percentage;
    setResult(` ${alimony.toFixed(2)} сом`);

    const regionNames = {
      1: "Бишкек",
      2: "Ош",
      3: "Джалал-Абад",
      4: "Иссык-Куль",
      5: "Нарын",
      6: "Баткен",
      7: "Талас",
      8: "Чуй",
    };

    const childrenText = {
      1: "1 ребенок",
      2: "2 ребенка",
      3: "3 и более детей",
    };

    setRegionDetail(` ${regionNames[region]}`);
    setChildrenDetail(` ${childrenText[children]}`);
    setIncomeDetail(` ${incomeValue}`);
  };

  const appendDigit = (digit) => {
    setIncome(income + digit);
  };

  const clearDisplay = () => {
    setIncome("");
  };

  const backspace = () => {
    setIncome(income.slice(0, -1));
  };

  return (
    <section className="container">
      <h1 className="text-3xl uppercase flex items-center text-white text-center justify-center py-10 font-bold">
        Онлайн калькулятор
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
  <div className="p-6 max-w-sm rounded-2xl md:w-4/12">
  <div className="mb-4">
  <div className="relative">
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="mt-1 block w-full p-2 pr-8 border border-gray-300 rounded-xl bg-[#F7F7FD] appearance-none text-[#9D9D9D]"
    >
      <option className="text-white" value="">
      {t("calculate.region")}
      </option>
      <option value="1">Бишкек</option>
      <option value="2">Ош</option>
      <option value="3">Джалал-Абад</option>
      <option value="4">Иссык-Куль</option>
      <option value="5">Нарын</option>
      <option value="6">Баткен</option>
      <option value="7">Талас</option>
      <option value="8">Чуй</option>
    </select>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#121212"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
  {regionError && <p className="text-red-500 text-sm">{regionError}</p>}
</div>


    <div className="mb-4 relative">
  <select
    value={children}
    onChange={(e) => setChildren(e.target.value)}
    className="mt-1 block w-full p-2 pr-8 border border-gray-300 rounded-xl bg-[#F7F7FD] appearance-none text-[#9D9D9D]"
  >
    <option value="">{t("calculate.countChild")}</option>
    <option value="1">{t("calculate.count1")}</option>
    <option value="2">{t("calculate.count2")}</option>
    <option value="3">{t("calculate.count3")}</option>
  </select>

  {/* Добавляем стрелку */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
    >
    <path
      d="M6 9L12 15L18 9"
      stroke="#121212"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {childrenError && <p className="text-red-500 text-sm">{childrenError}</p>}
</div>


    <div className="mb-4">
      <input
        type="number"
        placeholder={t("calculate.salary")}
        value={income}
         onChange={handleInputChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-xl bg-[#F7F7FD]"
      />
    </div>

    <div className="calculator grid grid-cols-3 gap-2 mb-4 bg-white text-[#121212] p-3 rounded-2xl text-4xl font-bold">
      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((digit) => (
        <button key={digit} className="button" onClick={() => appendDigit(digit)}>
          {digit}
        </button>
      ))}
      <button className="button" onClick={clearDisplay}>
        C
      </button>
      <button className="button" onClick={backspace}>
        ⌫
      </button>
    </div>

    <button
      onClick={calculate}
      className="mt-2 w-full p-3 bg-[#FFFFFF] text-[#121212] rounded-2xl cursor-pointer transition"
    >
      {t("calculate.calc")}
    </button>
  </div>

  <div
    className="p-2 h-auto md:h-[468px] md:w-5/12 bg-white rounded-2xl px-3 md:px-2 flex flex-col mx-5 md:mx-2 background-section"
    style={{
      backgroundImage: `url(${fon})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >

<div className="flex flex-col justify-between items-center mb-4 pb-10 pt-10 text-center h-full">
  <h1 className="md:text-sm text-xl text-[#6A6A6A]">
    {t("calculate.amount")}
  </h1>
  <span className="text-lg md:text-4xl font-bold text-[#121212]">
    {result}
  </span>

  <table className="w-full mt-6">
    <tbody className="md:px-10">
      <tr>
        <td className="font-medium text-left py-2">{t("calculate.regionShow")}</td>
        <td className="py-2 text-right">{regionDetail}</td>
      </tr>
      <tr>
        <td className="font-medium text-left py-2">{t("calculate.countChildShow")}</td>
        <td className="py-2 text-right">{childrenDetail}</td>
      </tr>
      <tr>
        <td className="font-medium text-left py-2">{t("calculate.alimonyPayer")}</td>
        <td className="py-2 text-right">{incomeDetail}</td>
      </tr>
    </tbody>
  </table>

 
  <p className="w-full text-[#6A6A6A] text-xs mt-auto">
    {t("calculate.note")}
  </p>
</div>


    
    </div>
  </div>



    </section>
  );
};

export default SalaryCalculator;
