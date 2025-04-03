import { Helmet } from "react-helmet-async";
import procedureImage from '../../assets/info6.png';

const ProcedureCourt = () => {
  return (
    <>
      <Helmet>
        <title>Как получить судебный приказ на алименты? Инструкция</title>
        <meta name="description" content="Судебный приказ – быстрый способ взыскать алименты. Узнайте, как его оформить и подать в суд." />
        <meta name="keywords" content="судебный приказ, алименты через суд, взыскание алиментов, подача судебного приказа" />
      </Helmet>

      <section className="py-8 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Порядок подачи судебного приказа</h1>
            <p className="mb-4">
              Судебный приказ — это упрощенное решение суда, которое выносится без вызова сторон в суд. Он используется для быстрого взыскания алиментов, задолженностей по зарплате, кредитам или коммунальным платежам.
            </p>

            <h2 className="text-xl font-semibold mt-4">Как это работает?</h2>
            
            <h3 className="mt-2 font-semibold">1. Вынесение судебного приказа</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Судья рассматривает ваше заявление и выносит судебный приказ в течение 3 дней после его подачи.</li>
              <li>Приказ оформляется на специальном бланке, подписывается судьей и заверяется печатью суда.</li>
            </ul>

            <h3 className="mt-2 font-semibold">2. Отправка копии должнику</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>После вынесения приказа суд отправляет его копию должнику (например, бывшему супругу) по почте с уведомлением о вручении.</li>
              <li>У должника есть 10 дней, чтобы выразить возражения против приказа.</li>
            </ul>

            <h3 className="mt-2 font-semibold">Что делать, если должник не возражает?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Судья выдает вам заверенный экземпляр судебного приказа.</li>
              <li>Вы можете сразу отнести этот приказ в Подразделение службы судебных исполнителей по месту проживания должника для взыскания алиментов.</li>
            </ul>

            <h3 className="mt-2 font-semibold">Что делать, если должник возражает?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Судья отменяет судебный приказ в течение 3 дней.</li>
              <li>Вам сообщат об этом и разъяснят, что вы можете подать исковое заявление в суд в общем порядке.</li>
            </ul>

            <h3 className="mt-2 font-semibold">Что указано в судебном приказе?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Данные взыскателя (ваше имя, адрес).</li>
              <li>Данные должника (имя, адрес).</li>
              <li>Основание для взыскания.</li>
              <li>Размер алиментов, срок их выплаты и другие подробности.</li>
              <li>Если речь идет о детях, указываются их имена и даты рождения.</li>
            </ul>

            <h3 className="mt-2 font-semibold">Как предъявить судебный приказ к исполнению?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>После получения судебного приказа отнесите его в подразделение службы судебных исполнителей по месту жительства должника или направьте заказным письмом.</li>
              <li>Копии документов и квитанции об отправке сохраните у себя.</li>
              <li>При личной подаче рекомендуется взять расписку о получении документов.</li>
              <li>Предоставьте свои реквизиты для перечисления денег (например, банковский счет).</li>
            </ul>

            <h3 className="mt-2 font-semibold">Важно помнить</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Если должник не возражает, судебный приказ действует как исполнительный документ.</li>
              <li>Если должник возражает, придется подавать иск в суд в общем порядке.</li>
            </ul>

            <p className="mt-4">
              <a href="https://suddep.sot.kg/page/contacts" target="_blank" rel="noopener noreferrer" className="text-blue-200 underline">
                Список почтовых адресов ПССИ по Кыргызстану
              </a>
            </p>
          </div>

          <div className="lg:w-1/2">
            <img src={procedureImage} alt="Процедура подачи судебного приказа" className="h-60 object-contain w-full rounded-lg" />
          </div>

        </div>
      </section>
    </>
  );
};

export default ProcedureCourt;
