import { Helmet } from "react-helmet-async";
import procedureImage from '../../assets/info11.png';

const PastPeriods = () => {
  return (
    <>
      <Helmet>
        <title>Можно ли взыскать алименты за прошлые годы?</title>
        <meta name="description" content="Разбираем, как получить невыплаченные алименты за прошедшие периоды, даже если иск подаётся сейчас." />
        <meta name="keywords" content="алименты за прошлое, долг по алиментам, взыскание задолженности, невыплаченные алименты" />
      </Helmet>

      <section className="py-8 text-white h-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Алименты за прошлые периоды</h1>
            
            <p>Можно взыскать алименты задним числом, если родитель уклонялся от их уплаты. Максимальный срок задолженности – 3 года до подачи иска. Если есть доказательства, что должник скрывался и избегал выплат, можно требовать долг за более длительный период. Суд может взыскать не только долг, но и неустойку за просрочку. Для взыскания алиментов за прошлый период нужно подать иск о взыскании задолженности по алиментам.</p>
            
            <h2 className="text-xl font-semibold mt-4">1. Общий срок взыскания</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>По закону, алименты присуждаются с момента обращения в суд.</li>
              <li>Максимальный срок взыскания – 3 года до подачи иска (статья 112 Семейного кодекса КР).</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">2. Условия для взыскания за 3 года</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Нужно доказать, что вы предпринимали меры для получения алиментов (например, требовали выплаты устно или письменно).</li>
              <li>Должник уклонялся от уплаты (например, скрывал доходы, менял место жительства).</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">3. Взыскание за больший срок</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Если есть доказательства, что должник намеренно скрывался или избегал выплат, суд может взыскать алименты за более длительный период.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">4. Как подать на взыскание алиментов за прошлый период?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Подайте в суд иск о взыскании задолженности по алиментам.</li>
              <li>Приложите документы, подтверждающие ваше право на алименты (например, письма, расписки, переписку с должником).</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">5. Особенности выплаты долга</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Сумма долга за 3 года выплачивается равномерными долями в течение года.</li>
              <li>Должник будет платить не только текущие алименты, но и часть долга ежемесячно.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">Важно помнить</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Если вы не предпринимали мер для получения алиментов, суд может отказать во взыскании.</li>
              <li>Сохраняйте все доказательства ваших попыток получить алименты (переписку, письма, свидетельские показания).</li>
            </ul>
            
            <p className="mt-4">Эта информация подтверждается законодательными актами Кыргызской Республики. Дополнительную информацию можно найти на <a href="https://cbd.minjust.gov.kg/ru" className="text-blue-400 underline">сайте Централизованного банка данных правовой информации</a> или <a href="https://ukuk-jardam.gov.kg/ru" className="text-blue-400 underline">Службы юридической помощи</a>. Онлайн консультацию можно получить на <a href="https://law.kg/" className="text-blue-400 underline">law.kg</a>.</p>
          </div>
          
          <div className="lg:w-1/2">
            <img src={procedureImage} alt="Алименты за прошлые периоды" className="h-60 object-contain w-full rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PastPeriods;
