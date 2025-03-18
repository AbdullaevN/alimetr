import React, { useState } from "react";

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
      1: 37454,
      2: 26960,
      3: 28764,
      4: 38743,
      5: 33011,
      6: 25554,
      7: 30689,
      8: 25562,
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

    let regionName = "";
    switch (region) {
      case "1":
        regionName = "Бишкек";
        break;
      case "2":
        regionName = "Ош";
        break;
      case "3":
        regionName = "Джалал-Абад";
        break;
    }

    let childrenText = "";
    switch (children) {
      case "1":
        childrenText = "1 ребенок";
        break;
      case "2":
        childrenText = "2 ребенка";
        break;
      case "3":
        childrenText = "3 ребенка";
        break;
    }

    setRegionDetail(` ${regionName}`);
    setChildrenDetail(` ${childrenText}`);
    setIncomeDetail(` ${incomeValue} сом`);
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
        {" "}
        Онлайн калькулятор
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="p-6  max-w-sm rounded-2xl md:w-4/12">
          <div className="mb-4">
            {/* <label className="block text-sm font-bold text-[#181818]">Выберите регион</label> */}
            <div className="relative">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="mt-1 block w-full p-2 pr-8 border border-gray-300 rounded-xl bg-[#F7F7FD] appearance-none"
              >
                <option className="text-white" value="">
                  Выберите регион
                </option>
                <option value="1">Бишкек</option>
                <option value="2">Ош</option>
                <option value="3">Джалал-Абад</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                ▼
              </span>
            </div>
            {regionError && (
              <p className="text-red-500 text-sm">{regionError}</p>
            )}
          </div>

          <div className="mb-4">
            {/* <label className="block text-sm font-bold text-[#181818]">Количество детей</label> */}
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="mt-1 block w-full p-2 pr-8 border border-gray-300 rounded-xl bg-[#F7F7FD] appearance-none"
            >
              <option value="">Выберите количество детей</option>
              <option value="1">1 ребенок</option>
              <option value="2">2 ребенка</option>
              <option value="3">3 ребенка</option>
            </select>
            {childrenError && (
              <p className="text-red-500 text-sm">{childrenError}</p>
            )}
          </div>

          <div className="mb-4">
            {/* <label className="block text-sm font-bold text-[#181818]">Зарплата в сомах</label> */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Зарплата в сомах"
                value={income}
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-xl bg-[#F7F7FD]"
              />
            </div>
          </div>

          {/* Number keypad */}
          <div className="calculator grid grid-cols-3 gap-2 mb-4 bg-white text-[#121212] p-3 rounded-2xl text-4xl font-bold">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((digit) => (
              <button
                key={digit}
                className="button"
                onClick={() => appendDigit(digit)}
              >
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
            className="mt-2 w-full p-3 bg-[#FFFFFF] text-[#121212] rounded-2xl  cursor-pointer transition"
          >
            Рассчитать
          </button>
        </div>

        <div className="p-2 h-auto md:h-screen md:w-6/12 bg-white rounded-2xl px-3 md:px-2 flex flex-col mx-5 md:mx-2 ">
        <div className="flex flex-col justify-center items-center mb-4 pt-20 text-center">
  <h1 className="md:text-sm text-xl text-[#6A6A6A]">
    Сумма выплат составляет:
  </h1>
  <span className="text-lg md:text-4xl font-bold text-[#121212]">
    {result}
  </span>
</div>



          <table className="w-full mx-auto mt-6">
            <tbody className="flex flex-wrap justify-between">
              <tr className="flex w-full">
                <td className="font-medium  w-1/2 text-left">
                  Регион
                </td>
                <td className="py-2">{regionDetail}</td>
              </tr>
              <tr className="flex w-full">
                <td className=" font-medium w-1/2 text-left">
                  Количество детей
                </td>
                <td className="py-2">{childrenDetail}</td>
              </tr>
              <tr className="flex w-full">
                <td className="font-medium w-1/2 text-left">
                  Зарплата алиментоплательщика
                </td>
                <td className="py-2">{incomeDetail}</td>
              </tr>
            </tbody>
          </table>

          <p className="text-[#6A6A6A] text-xs mt-4 md:w-4/12 w-10/12  flex items-start md:left-[-150px] left-[-30px] relative">
            *Данная сумма является предположительной, точная сумма выносится
            судом
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalaryCalculator;
