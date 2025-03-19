import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formsData } from "../components/Form/formsData";

const FormPage = () => {
  const { id } = useParams();
  // const [children, setChildren] = useState([]);

  const form = formsData.find((f) => f.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(
    form.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [childrenCount, setChildrenCount] = useState(1);
  const [modalContent, setModalContent] = useState("");
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 

  const generateAlimonyDoc = (formData, childrenCount) => {
    let documentContent = `
    <div style=" margin: 20px 10px";>
      <div style="text-align: right; font-family: 'Times New Roman'; ">
        <p><strong>В _________________ районный суд</strong></p>
        <p><strong>Истец:</strong> ${formData.claimantName}</p>
        <p><strong>Адрес истца:</strong> ${formData.claimantAddress}</p>
        <p><strong>Ответчик:</strong> ${formData.defendantName}</p>
        <p><strong>Адрес ответчика:</strong> ${formData.defendantAddress}</p>
      </div>
   <div style="display: flex; justify-content: center; align-items:center; flex-direction: column; font-weight:bold;">
      <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ</h3>
      <p> ${formData.description}</p>
   </div>
      <p>С ответчицей(ком) я вступил(а) в брак "${formData.marriageDate}" и проживал(а) с ним(ней) совместно до ${formData.divorceDate}. Брак зарегистрирован в отделе ЗАГС ${formData.zagcDistrict}-ского района. От данного брака мы имеем ребенка:</p>
    `;
  
    for (let i = 1; i <= childrenCount; i++) {
      documentContent += `
        <p>${formData[`child${i}_name`]} - ${formData[`child${i}_birthdate`]} года рождения</p>
      `;
    }
  
    documentContent += `
      <p>Совместная супружеская жизнь с ответчиком не сложилась, так как ${formData.reason}. Вследствие указанных причин считаю, что наша дальнейшая совместная жизнь и сохранение семьи невозможны, поэтому предоставление времени для примирения считаю нецелесообразным.</p>
      <p>Брачные отношения между мной и ответчиком прекращены с "${formData.divorceDate}", с этого момента ответчик проживает отдельно и общее хозяйство нами не ведется. Спора о разделе имущества, являющегося нашей совместной собственностью, нет. По вопросу о содержании и воспитании детей спора нет, дети будут проживать со мной. Дети находятся полностью на моем иждивении, поскольку ответчик никакой материальной помощи на их содержание не оказывает.</p>
      <p>На основании вышеизложенного, в соответствии со статьями 9, 22, 23, 24, 25, 85-87 Семейного кодекса КР, частью 1 статьи 4, статьями 25, 30, 31, 134, 135 Гражданского процессуального кодекса КР,</p>
      <h3 style="display:flex; justify-content: center; font-weight:bold;">ПРОШУ:</h3>
      <p>1. Расторгнуть брак между мной и ответчицей(ком) ${formData.defendantName}, зарегистрированный "${formData.marriageDate}" отделом ЗАГС ${formData.zagcDistrict}-ского района, актовая запись № ${formData.divorceCertificateNumber}.</p>
      <p>2. Взыскать с ответчика(цы) ${formData.defendantName}, ${formData.defendantBirthDate} года рождения, в мою пользу алименты на содержание ребенка:</p>
    `;
  
    for (let i = 1; i <= childrenCount; i++) {
      documentContent += `
        <p>${formData[`child${i}_name`]} - ${formData[`child${i}_birthdate`]} года рождения</p>
      `;
    }
  
    documentContent += `
    <p>в размере одной четвертой части заработка и иных доходов до совершеннолетия ребенка.</p>
    <h3 style="font-weight: bold; margin-top: 15px; font-style:italic;">Приложения:</h3>
    <ol>
    <li>1. Квитанция об уплате государственной пошлины;</li>
    <li>2. Копия искового заявления для ответчика;</li>
    <li>3. Доказательство направления другим лицам, участвующим в деле, копии искового заявления (почтовая квитанция);</li>
    <li>4. Подлинник свидетельства о заключении брака №${formData.divorceCertificateNumber} от «${formData.divorceCertificateDate}»;</li>
    <li>5. Копия паспорта истца;</li>
    <li>6. Копии свидетельств о рождении детей;</li>
    <li>7. Справка с ЦОН о регистрационном учете ребенка;</li>
    <li>8. Документы о заработке и иных доходах ответчика;</li>
  </ol>
  
  <div style="display:flex; justify-content: space-between; padding: 20px 1px">
  <p>Истец: ${formData.claimantName}</p>
  <p>Подпись: _________________</p>
  </div>
  <p>Дата: ${new Date().toLocaleDateString()}</p>
    </div>
  
    `
  ;
  
    return documentContent;
  };
  
  const generateFixedSumDoc = (formData, childrenCount) => {
    // Генерация документа для формы "о взыскании алиментов (в твердой денежной сумме)"
    // Аналогично generateAlimonyDoc, но с другим текстом
  };
  
  const generateEstablishPaternityDoc = (formData) => {
    // Генерация документа для формы "об установлении отцовства и взыскании алиментов"
    // Аналогично generateAlimonyDoc, но с другим текстом
  };


  
  // 
  // 
  // 
  // 
  // 
  // 
  // 

  useEffect(() => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      for (let i = 1; i <= childrenCount; i++) {
        if (!newData[`child${i}_name`]) newData[`child${i}_name`] = "";
        if (!newData[`child${i}_birthdate`]) newData[`child${i}_birthdate`] = "";
      }
      return newData;
    });
  }, [childrenCount]);


// 

  if (!form) {
    return <h2 className="text-white text-center mt-10">Форма не найдена</h2>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChildrenChange = (e) => {
    setChildrenCount(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateDoc(formData);
  };

  const generateDoc = (formData) => {
    let documentContent = "";
  
    switch (form.id) {
      case "alimony":
        documentContent = generateAlimonyDoc(formData, childrenCount);
        break;
      case "fixedSum":
        documentContent = generateFixedSumDoc(formData, childrenCount);
        break;
      case "establishPaternity":
        documentContent = generateEstablishPaternityDoc(formData);
        break;
      default:
        documentContent = "<p>Форма не найдена</p>";
        break;
    }
  
    setModalContent(documentContent);
    setIsModalOpen(true);
  };

  // Функция для скачивания документа
  const downloadDoc = () => {
    const docContent = modalContent;
    const blob = new Blob([docContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.html";
    link.click();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-sm px-6 py-2">
        <Link to="/" className="hover:underline">Главная</Link> / 
        <Link to="/templates" className="hover:underline">Шаблонизатор</Link> / 
        <span className="text-[#F8F8FA] font-bold">{form.title}</span>
      </div>

      <div className="flex items-baseline md:flex-row flex-col px-6">
        <h1 className="text-3xl px-0 mx-0 py-4">{form.title}</h1>
        <p className="mb-4 text-3xl">{form.description}</p>
      </div>

      <div className="flex px-6 justify-between pt-10 md:flex-row flex-col">
        <div className="w-full md:w-2/12 px-0 mx-0">
          <span className="font-bold">Введите данные для заявления</span>
        </div>

        <form onSubmit={handleSubmit} className="px-2 rounded-lg w-7/12 py-16">
  <div className="flex gap-4 flex-col w-full">
    {form.fields.map((field) => (
      <div key={field.name} className="mb-4 w-full">
        <label className="block text-xl font-medium">{field.label}</label>
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placehol}
          value={formData[field.name]}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl text-[#9D9D9D] bg-[#F5F5F5]"
        />
      </div>
    ))}
  </div>

  {/* Поле для ввода количества детей */}
  <div className="mb-4">
    <label className="block text-sm font-medium">Количество детей</label>
    <input
      type="number"
      min="1"
      max="12"
      value={childrenCount}
      onChange={handleChildrenChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
    />
  </div>

  {/* Динамические поля для детей */}
  <div className="grid grid-cols-1 gap-4">
  {Array.from({ length: childrenCount }).map((_, index) => (
    <div key={index} className="flex flex-row gap-4 w-full">
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium">
          Имя ребенка {index + 1}
        </label>
        <input
          type="text"
          name={`child${index + 1}_name`}
          value={formData[`child${index + 1}_name`] || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl text-[#9D9D9D] bg-[#F5F5F5]"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-sm font-medium">
          Дата рождения ребенка {index + 1}
        </label>
        <input
          type="date"
          name={`child${index + 1}_birthdate`}
          value={formData[`child${index + 1}_birthdate`] || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
        />
      </div>
    </div>
  ))}
</div>

 

  <button
    type="submit"
    className="px-4 py-3 text-sm mt-4 bg-[#F5F5F5] text-[#121212] w-full rounded-2xl"
  >
    Открыть модальное окно
  </button>
</form>

      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal fixed inset-0 bg-opacity-50 flex justify-center items-center text-black">
          <div className="modal-content bg-white p-6 rounded-lg w-10/12 max-w-4xl h-full overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 text-xl">X</button>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: modalContent }} />
            <div className="modal-footer flex justify-between mt-4">
              <button
                onClick={closeModal}
                className="cursor-pointer px-4 py-3 text-sm mt-4 bg-gray-300 text-gray-800 rounded-2xl"
              >
                Закрыть
              </button>
              <button
                onClick={downloadDoc}
                className="cursor-pointer px-4 py-3 text-sm mt-4 bg-[#65bec8] text-[#121212]  rounded-2xl"
                >
                Скачать документ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPage;
