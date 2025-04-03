import { Helmet } from "react-helmet-async";
import info2 from '../../assets/info2.png';

const Ready = () => {
  return (
    <>
      <Helmet>
        <title>Что делать после подготовки документов на алименты?</title>
        <meta name="description" content="Документы собраны, что дальше? Разбираемся, как подать иск в суд, куда обращаться и какие шаги предпринять." />
        <meta name="keywords" content="подача иска, документы на алименты, суд по алиментам, что делать дальше" />
      </Helmet>

      <section className="py-8 text-white ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2 px-4 sm:px-8">
            <h1 className="text-2xl font-bold mb-4">Документы готовы. Что дальше?</h1>
            <p className="mb-4">Теперь, когда все документы подготовлены, вам нужно решить, в какой суд подавать иск. У вас есть два варианта:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Суд по месту проживания алиментоплательщика (отца ребенка/детей).</li>
              <li>Суд по вашему месту проживания.</li>
            </ul>
            <p className="mt-4">Для большинства людей удобнее выбрать второй вариант. Например, если вы живете в Первомайском районе, то вам следует обратиться в Первомайский районный суд.</p>
            <p className="mt-4 text-sm">Примечание: Части 3 и 5 статьи 31 Гражданского процессуального кодекса Кыргызской Республики определяют возможность подачи иска о взыскании алиментов по месту жительства истца.</p>
            <p className="mt-4 font-semibold">Эти правила делают процесс подачи иска более удобным, например, для матерей с маленькими детьми или людей, у которых есть проблемы со здоровьем. В таком случае не нужно ехать в другой город или регион, чтобы подать заявление в суд.</p>
          </div>
          
          <div className="lg:w-1/2 px-4 sm:px-8">
            <img src={info2} alt="Судебные документы" className="h-60 object-contain w-full rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ready;
