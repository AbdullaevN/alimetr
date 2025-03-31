import courtImage from '../../assets/info4.png';
import { Helmet } from 'react-helmet-async';

const HowToBehave = () => {
  return (
    <>
      <Helmet>
        <title>Как вести себя в суде по алиментам? Советы и рекомендации</title>
        <meta name="description" content="Узнайте, как правильно вести себя в суде при разбирательстве по алиментам, чтобы добиться справедливого решения." />
        <meta name="keywords" content="суд по алиментам, поведение в суде, советы для суда, как говорить в суде" />
      </Helmet>
      <section className="py-8 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Как вести себя в суде?</h1>
            <p className="mb-4">
              Ведение себя в суде по алиментам очень важно для успешного рассмотрения дела. Вот несколько рекомендаций:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Подготовка:</strong> Ознакомьтесь с делом и соберите все необходимые документы.</li>
              <li><strong>Одевайтесь соответствующе:</strong> Деловая одежда создаст положительное впечатление.</li>
              <li><strong>Приходите вовремя:</strong> Опоздание может негативно сказаться на деле.</li>
              <li><strong>Уважение к суду:</strong> При входе судей в зал все должны встать.</li>
              <li><strong>Как отвечать:</strong> Говорите стоя, если судья не разрешил сидя.</li>
              <li><strong>Как обращаться к судье:</strong> Начинайте речь со слов: "Уважаемый суд".</li>
              <li><strong>Не вступайте в споры:</strong> Оставайтесь спокойным и не реагируйте на провокации.</li>
              <li><strong>Ясность мысли:</strong> Структурируйте аргументы, избегайте лишних эмоций.</li>
              <li><strong>Поддержка адвоката:</strong> Проконсультируйтесь перед заседанием.</li>
            </ul>
            <p className="mt-4 font-semibold">
              Эти рекомендации помогут вам вести себя уверенно и профессионально в суде.
            </p>
          </div>

          <div className="lg:w-1/2">
            <img src={courtImage} alt="Суд" className="h-60 object-contain w-full rounded-lg" />
          </div>

        </div>
      </section>
    </>
  );
};

export default HowToBehave;
