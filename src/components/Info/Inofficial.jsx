import { Helmet } from "react-helmet-async";
import procedureImage from '../../assets/info10.png';

const Inofficial = () => {
  return (
    <>
      <Helmet>
        <title>Как взыскать алименты с неофициального дохода?</title>
        <meta name="description" content="Если должник работает без оформления, это не повод отказываться от алиментов. Узнайте, как доказать его доход." />
        <meta name="keywords" content="алименты без официальной работы, взыскание алиментов, доказательство дохода, скрытый доход" />
      </Helmet>

      <section className="py-8 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Алименты с неофициального дохода</h1>
            
            <p>Если родитель получает зарплату в конверте или у него нерегулярные доходы, взыскать алименты сложнее, но возможно:</p>
            
            <h2 className="text-xl font-semibold mt-4">1. Доказать реальный доход</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Можно через свидетельские показания, банковские переводы, уровень расходов должника.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">2. Требовать расчет от средней зарплаты по региону</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Если официального дохода нет, можно требовать расчет от средней зарплаты по региону.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">3. Добиваться алиментов в фиксированной сумме</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Суд может назначить алименты в фиксированной сумме, исходя из нужд ребенка.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">Важно помнить</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Если нет официальных доказательств дохода, может потребоваться дополнительная работа по доказательствам.</li>
              <li>Храните все документы, которые могут подтвердить доход должника.</li>
            </ul>
            
            <p className="mt-4">Эта информация подтверждается законодательными актами Кыргызской Республики. Дополнительную информацию можно найти на <a href="https://cbd.minjust.gov.kg/ru" className="text-blue-400 underline">сайте Централизованного банка данных правовой информации</a> или <a href="https://ukuk-jardam.gov.kg/ru" className="text-blue-400 underline">Службы юридической помощи</a>. Онлайн консультацию можно получить на <a href="https://law.kg/" className="text-blue-400 underline">law.kg</a>.</p>
          </div>
          
          <div className="lg:w-1/2">
            <img src={procedureImage} alt="Алименты с неофициального дохода" className="h-60 object-contain w-full rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Inofficial;
