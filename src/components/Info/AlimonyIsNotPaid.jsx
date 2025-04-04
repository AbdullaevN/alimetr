// import { Helmet } from 'react-helmet-async';
// import procedureImage from '../../assets/info8.png';

// const AlimonyIsNotPaid = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Не платят алименты? Как добиться выплат через суд и приставов</title>
//         <meta name="description" content="Что делать, если отец или мать уклоняются от уплаты алиментов? Разбираем механизмы принудительного взыскания." />
//         <meta name="keywords" content="не платят алименты, уклонение от алиментов, судебные приставы, взыскание алиментов" />
//       </Helmet>
//       <section className="py-8 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
//           <div className="lg:w-1/2">
//             <h1 className="text-2xl font-bold mb-4">Что делать, если алименты не выплачиваются?</h1>
            
//             <h2 className="text-xl font-semibold mt-4">1. Обратиться к судебному исполнителю</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Предоставьте исполнительный лист или судебный приказ в подразделение службы судебных исполнителей по месту жительства должника.</li>
//               <li>Если судебный исполнитель бездействует, вы можете пожаловаться на его бездействие вышестоящему судебному исполнителю или в суд.</li>
//               <li>Если жалоба подана одновременно вышестоящему судебному исполнителю и в суд, рассмотрение будет происходить только в суде.</li>
//             </ul>
            
//             <h2 className="text-xl font-semibold mt-4">2. Срок подачи жалобы</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Жалоба подается в течение 10 дней после того, как вы узнали о решении или действии судебного исполнителя.</li>
//               <li>Если вас не уведомили о действиях судебного исполнителя, вы можете подать жалобу в течение 10 дней с момента, когда узнали об этом.</li>
//             </ul>
            
//             <h2 className="text-xl font-semibold mt-4">3. Обратиться в суд за взысканием задолженности</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Если долг растет, подайте в суд заявление о расчете и взыскании задолженности по алиментам.</li>
//               <li>Суд определит сумму долга и установит порядок его погашения.</li>
//             </ul>
            
//             <h2 className="text-xl font-semibold mt-4">4. Взыскать неустойку и компенсацию убытков</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Если алименты не выплачиваются по вине плательщика, можно требовать неустойку и компенсацию убытков.</li>
//               <li>Неустойка составляет 0,5% от суммы невыплаченных алиментов за каждый день просрочки.</li>
//               <li>Компенсация убытков взыскивается, если задержка привела к дополнительным расходам (например, кредиты или займы).</li>
//             </ul>
            
//             <h2 className="text-xl font-semibold mt-4">5. Требовать ограничения прав должника</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Запрет на выезд за границу.</li>
//               <li>Арест имущества для его продажи и погашения долга.</li>
//             </ul>
            
//             <h2 className="text-xl font-semibold mt-4">6. Возбудить уголовное дело</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Если долг крупный и должник уклоняется от уплаты алиментов, можно обратиться в правоохранительные органы.</li>
//               <li>Наказание может включать штраф, исправительные работы или даже лишение свободы.</li>
//             </ul>
//           </div>
          
//           <div className="lg:w-1/2">
//             <img src={procedureImage} alt="Что делать, если алименты не выплачиваются" className="h-60 object-contain w-full rounded-lg" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AlimonyIsNotPaid;
import { Helmet } from 'react-helmet-async';
import procedureImage from '../../assets/info8.png';
import { useTranslation } from 'react-i18next';

const AlimonyIsNotPaid = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("alimony_not_paid.title")}</title>
        <meta name="description" content={t("alimony_not_paid.meta_description")} />
        <meta name="keywords" content={t("alimony_not_paid.meta_keywords")} />
        <link rel="canonical" href="https://alimetr.kg/alimony-not-paid" />
      </Helmet>
      <section className="py-8 text-white px-6 md:px-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t("alimony_not_paid.main_title")}</h1>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.step1_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("alimony_not_paid.step1_point1")}</li>
              <li>{t("alimony_not_paid.step1_point2")}</li>
              <li>{t("alimony_not_paid.step1_point3")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.step2_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("alimony_not_paid.step2_point1")}</li>
              <li>{t("alimony_not_paid.step2_point2")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.step3_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("alimony_not_paid.step3_point1")}</li>
              <li>{t("alimony_not_paid.step3_point2")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.step4_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("alimony_not_paid.step4_point1")}</li>
              <li>{t("alimony_not_paid.step4_point2")}</li>
              <li>{t("alimony_not_paid.step4_point3")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.step5_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("alimony_not_paid.step5_point1")}</li>
              <li>{t("alimony_not_paid.step5_point2")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("alimony_not_paid.step6_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("alimony_not_paid.step6_point1")}</li>
              <li>{t("alimony_not_paid.step6_point2")}</li>
            </ul>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src={procedureImage} 
              alt={t("alimony_not_paid.image_alt")} 
              className="h-60 object-contain w-full rounded-lg" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AlimonyIsNotPaid;