import React from "react";

const How = () => {
    return (
      <section className="py-8">
        <div className="container mx-auto px-6 ">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Как рассчитать алименты?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: '1',
                title: 'Выберите регион проживания',
                description: 'Это важно, так как расчет алиментов зависит от средней зарплаты в регионе.',
              },
              {
                step: '2',
                title: 'Укажите количество детей',
                description: 'Количество детей влияет на процент отчислений от заработной платы.',
              },
              {
                step: '3',
                title: 'Введите ваш ежемесячный доход',
                description: 'Точный доход необходим для корректного расчета суммы алиментов.',
              },
              {
                step: '4',
                title: 'Получите результат',
                description: 'На основе введенных данных калькулятор рассчитает сумму алиментов.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-md">
                <span className="flex flex-row items-center">
                  <h1 className="text-xl font-bold">{item.step}</h1>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                </span>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default How;
  