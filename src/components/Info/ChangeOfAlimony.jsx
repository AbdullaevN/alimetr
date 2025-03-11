import procedureImage from '../../assets/info2.png';

const ChangeOfAlimony = () => {
  return (
    <section className="py-8 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Можно ли изменить размер алиментов?</h1>
          
          <p className="text-lg">Размер алиментов можно увеличить через суд, если изменились жизненные обстоятельства. Для этого нужно подать иск об изменении размера алиментов.</p>
          
          <h2 className="text-xl font-semibold mt-4">Основания для увеличения алиментов:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Увеличились расходы на ребенка (например, лечение, обучение, дополнительные нужды).</li>
            <li>Доход плательщика алиментов значительно вырос.</li>
            <li>Ребенок стал инвалидом, требующим дополнительных средств на содержание.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-4">Как подать на изменение размера алиментов?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Подготовьте исковое заявление об изменении размера алиментов в суд.</li>
            <li>Приложите документы, подтверждающие изменение обстоятельств (справки о доходах, медицинские заключения и т. д.).</li>
            <li>Укажите желаемый новый размер алиментов и обоснуйте свои требования.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-4">Дополнительные советы:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Контролируйте процесс:</strong> Сохраняйте все документы, связанные с взысканием алиментов (исполнительные листы, квитанции, уведомления). Это поможет в случае споров.</li>
            <li><strong>Учитывайте сроки:</strong> Если вы обнаружили, что алименты не выплачиваются, действуйте быстро. Чем дольше вы ждете, тем больше может накопиться долг.</li>
            <li><strong>Проконсультируйтесь с юристом:</strong> Если ситуация сложная (например, должник скрывает доходы или находится за границей), лучше обратиться за профессиональной помощью.</li>
          </ul>
        </div>
        
        <div className="lg:w-1/2">
          <img src={procedureImage} alt="Изменение размера алиментов" className="h-60 object-contain w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ChangeOfAlimony;
