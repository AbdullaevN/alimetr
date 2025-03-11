import procedureImage from '../../assets/info2.png';

const Procedure = () => {
  return (
    <section className="py-8 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Порядок подачи иска</h1>
          <p className="mb-4">
            После подготовки всех документов важно правильно подать исковое заявление. Для этого следуйте следующим шагам:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Все документы сдайте в канцелярию суда.</li>
            <li>На один экземпляр вашего заявления вы получите печать и отметку с датой о принятии вашего заявления.</li>
            <li>Номера телефонов канцелярии можно найти на сайте суда или уточнить непосредственно в здании суда при подаче заявления.</li>
          </ul>
          <p className="mt-4 font-semibold">
            Соблюдение этих шагов обеспечит правильность подачи заявления и ускорит процесс его рассмотрения.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img src={procedureImage} alt="Процедура подачи иска" className="h-60 object-contain w-full rounded-lg" />
        </div>

      </div>
    </section>
  );
};

export default Procedure;
