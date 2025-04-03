// import { Helmet } from "react-helmet-async";
// import procedureImage from "../../assets/info7.png";

// const AfterDecision = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Решение суда по алиментам – что делать дальше?</title>
//         <meta
//           name="description"
//           content="Получили решение суда, но что дальше? Разбираем порядок действий после вынесения решения по алиментам."
//         />
//         <meta
//           name="keywords"
//           content="решение суда, алименты через суд, что делать после суда, исполнительный лист"
//         />
//         <link rel="canonical" href="https://alimetr.kg/after-court-decision" />
//       </Helmet>
//       <section className="py-8 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
//           <div className="lg:w-1/2">
//             <h1 className="text-2xl font-bold mb-4">Что делать после получения решения суда?</h1>
//             <h2 className="text-xl font-semibold mt-4">1. Дождитесь вступления решения в законную силу</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Решение суда вступает в силу через 30 дней после его вынесения, если никто не подал апелляционную жалобу (статья 324 ГПК КР).</li>
//               <li>Если жалоба была подана, решение вступит в силу только после рассмотрения дела апелляционным судом.</li>
//             </ul>
//             <h2 className="text-xl font-semibold mt-4">2. Получите исполнительный лист</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>После вступления решения в законную силу суд первой инстанции выдает исполнительный лист (статья 405 ГПК КР).</li>
//               <li>В исполнительном листе указаны данные взыскателя и должника, резолютивная часть решения, сроки исполнения и другие важные сведения (статья 407 ГПК КР).</li>
//               <li>Исполнительный лист подписывается судьей и заверяется печатью суда.</li>
//             </ul>
//             <h2 className="text-xl font-semibold mt-4">3. Отнесите исполнительный лист судебным исполнителям</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Предоставьте исполнительный лист в Службу судебных исполнителей по месту жительства должника.</li>
//               <li>Приложите копии документов: свидетельство о рождении ребенка (если алименты на детей), свои банковские реквизиты для перечисления денег.</li>
//             </ul>
//             <h2 className="text-xl font-semibold mt-4">4. Сроки предъявления исполнительного листа</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Исполнительный лист нужно предъявить в течение 3 лет со дня вступления решения в законную силу (статья 408 ГПК КР).</li>
//               <li>Если срок пропущен, его можно восстановить через суд.</li>
//             </ul>
//             <h2 className="text-xl font-semibold mt-4">5. Как действуют судебные исполнители</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>После получения исполнительного листа судебные исполнители начинают работу: направляют должнику требование об уплате алиментов.</li>
//               <li>Если должник не платит добровольно, исполнители могут применить меры принуждения: арестовать имущество, удерживать деньги с зарплаты или запретить выезд за границу.</li>
//             </ul>
//             <h2 className="text-xl font-semibold mt-4">6. Контролируйте процесс</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Сохраняйте связь с судебными исполнителями, чтобы быть в курсе их действий.</li>
//               <li>Если исполнители бездействуют, напишите жалобу старшему судебному исполнителю или в суд.</li>
//             </ul>
//             <h2 className="text-xl font-semibold mt-4">Важно помнить</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Алименты начисляются с момента подачи иска в суд, даже если деньги начинают поступать позже.</li>
//               <li>Если у должника нет постоянного дохода, исполнители могут взыскать алименты из его имущества или других источников.</li>
//               <li>Исполнительный лист можно предъявить повторно, если он был возвращен (например, из-за невозможности найти должника). Новый срок для предъявления исчисляется со дня возвращения листа.</li>
//             </ul>
//           </div>
//           <div className="lg:w-1/2">
//             <img src={procedureImage} alt="Что делать после решения суда" className="h-60 object-contain w-full rounded-lg" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AfterDecision;


import { Helmet } from "react-helmet-async";
import procedureImage from "../../assets/info7.png";
import { useTranslation } from "react-i18next";

const AfterDecision = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("after_decision.title")}</title>
        <meta
          name="description"
          content={t("after_decision.meta_description")}
        />
        <meta
          name="keywords"
          content={t("after_decision.meta_keywords")}
        />
        <link rel="canonical" href="https://alimetr.kg/after-court-decision" />
      </Helmet>
      <section className="py-8 text-white px-6 md:px-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{t("after_decision.main_title")}</h1>
            
            <h2 className="text-xl font-semibold mt-4">{t("after_decision.step1_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("after_decision.step1_point1")}</li>
              <li>{t("after_decision.step1_point2")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("after_decision.step2_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("after_decision.step2_point1")}</li>
              <li>{t("after_decision.step2_point2")}</li>
              <li>{t("after_decision.step2_point3")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("after_decision.step3_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("after_decision.step3_point1")}</li>
              <li>{t("after_decision.step3_point2")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("after_decision.step4_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("after_decision.step4_point1")}</li>
              <li>{t("after_decision.step4_point2")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("after_decision.step5_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("after_decision.step5_point1")}</li>
              <li>{t("after_decision.step5_point2")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("after_decision.step6_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("after_decision.step6_point1")}</li>
              <li>{t("after_decision.step6_point2")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-4">{t("after_decision.important_title")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("after_decision.important_point1")}</li>
              <li>{t("after_decision.important_point2")}</li>
              <li>{t("after_decision.important_point3")}</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src={procedureImage} alt={t("after_decision.image_alt")} className="h-60 object-contain w-full rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AfterDecision;