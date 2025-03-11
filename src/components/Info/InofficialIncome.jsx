import procedureImage from '../../assets/info2.png';

const InofficialIncome = () => {
  return (
    <section className="py-8 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Алименты с неофициального дохода</h1>
          
          <p className="text-lg mb-4">Если родитель получает зарплату в конверте или у него нерегулярные доходы, взыскать алименты сложнее, но возможно:</p>
          
          <h2 className="text-xl font-semibold mt-4">1. Доказать реальный доход</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Можно использовать свидетельские показания, банковские переводы, уровень расходов должника.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-4">2. Требовать расчет от средней зарплаты по региону</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Если официального дохода нет, суд может назначить алименты, исходя из средней зарплаты в регионе.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-4">3. Добиваться алиментов в фиксированной сумме</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Суд может назначить алименты в твердой сумме, учитывая потребности ребенка.</li>
          </ul>
        </div>
        
        <div className="lg:w-1/2">
          <img src={procedureImage} alt="Алименты с неофициального дохода" className="h-60 object-contain w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default InofficialIncome;
