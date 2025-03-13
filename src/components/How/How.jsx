import React from "react";

const How = () => {
    return (
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-start mb-8">
            <h2 className="text-2xl font-bold text-white uppercase px-6">Как это работает?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {[
              {
                step: '1',
                title: 'Выберите регион проживания',
                description: 'Это важно, так как расчет алиментов зависит от средней зарплаты в регионе.',
              },
              {
                step: '2',
                title: 'Укажите количество детей',
                description: `Pазмер алиментов зависит от дохода плательщика и рассчитывается в процентном соотношении:\n
              - На 1 ребенка – 25% от дохода.
              - На 2 детей – 33% от дохода.
              - На 3 и более детей – 50% от дохода.`,
              },
              {
                step: '3',
                title: 'Введите зарплату алиментоплательщика',
                description: 'Если доход плательщика неизвестен, оставьте поле пустым — расчет будет произведен на основе средней зарплаты по региону.',
              },
              {
                step: '4',
                title: 'Рассчитайте сумму алиментов',
                description: 'В калькуляторе «АлиМетр» указаны данные о средней зарплате по регионам Кыргызстана за 2023 год',
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-white text-start p-3 rounded-lg w-full flex flex-col"
              >
                <h1 className="px-4 w-full text-4xl font-bold self-start pb-7">{item.step}</h1>

                <div className="w-[90%]">
                  <h3 className="text-md font-semibold mb-2">{item.title}</h3>
                  {/* <p className="text-sm">{item.description}</p> */}
                  <p className="text-sm whitespace-pre-line">{item.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default How;
