import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formsData } from "../components/Form/formsData";

const FormPage = () => {
  const { id } = useParams();
  const form = formsData.find((f) => f.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(
    form.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [childrenCount, setChildrenCount] = useState(1);
  const [modalContent, setModalContent] = useState("");

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

  // Функция для генерации документа
  const generateDoc = (formData) => {
    let documentContent = `
      <h2>Документ</h2>
      <p><strong>В районный суд</strong></p>
      <p><strong>Истец:</strong> ${formData.claimantName}</p>
      <p><strong>Адрес истца:</strong> ${formData.claimantAddress}</p>
      <p><strong>Ответчик:</strong> ${formData.defendantName}</p>
      <p><strong>Адрес ответчика:</strong> ${formData.defendantAddress}</p>
      <p><strong>ИСКОВОЕ ЗАЯВЛЕНИЕ</strong><br/>
      о взыскании алиментов (в долях к заработку или иному доходу)</p>
      <p><strong>г.</strong> ${formData.marriageDate} вступила в брак с ${formData.defendantName}. 
      Решением суда от ${formData.courtDecisionDate} наш брак расторгнут. 
      Регистрация расторжения брака произведена ${formData.divorceDate} в отделе ЗАГС района.
      В настоящее время мы проживаем раздельно.</p>
      <p>От данного брака мы имеем детей:</p>
    `;

    // Добавляем информацию о детях
    for (let i = 1; i <= childrenCount; i++) {
      documentContent += `
        <p>${formData[`child${i}`]} года рождения</p>
      `;
    }

    documentContent += `
      <p>Дети находятся на моем иждивении, ответчик никакой материальной помощи на их содержание не оказывает.</p>
      <p>В соответствии с частью 1 статьи 85 Семейного кодекса КР, родители обязаны содержать своих несовершеннолетних детей. 
      Согласно части 2 этой же статьи Семейного кодекса КР, в случае если родители (один из них) не предоставляют содержание своим несовершеннолетним детям, 
      средства на их содержание (алименты) взыскиваются с родителей (одного из них) в судебном порядке на основании иска в суд, поданного от имени ребенка одним из родителей.</p>
      <p>На основании изложенного, в соответствии со статьями 9, 85, 86 Семейного кодекса КР, частью 1 статьи 4, статьями 25, 30, 31, 134, 135 Гражданского процессуального кодекса КР,</p>
      <p><strong>ПРОШУ:</strong></p>
      <p>Взыскать с ответчика ${formData.defendantName}, года рождения, уроженца ${formData.defendantBirthplace}, в мою пользу алименты на содержание детей:</p>
    `;

    // Добавляем детей в просьбу
    for (let i = 1; i <= childrenCount; i++) {
      documentContent += `
        <p>${formData[`child${i}`]} года рождения</p>
      `;
    }

    documentContent += `
      <p>в размере одной трети заработка и иных доходов до совершеннолетия детей.</p>
      <p><strong>Приложения:</strong></p>
      <ul>
        <li>Доказательство направления другим лицам, участвующим в деле, копии искового заявления (почтовая квитанция);</li>
        <li>Копия паспорта истца</li>
        <li>Копия искового заявления</li>
        <li>Копия свидетельства о расторжении брака от ${formData.divorceDate}</li>
        <li>Копии свидетельств о рождении детей</li>
    `;

    // Добавляем информацию о каждом ребенке
    for (let i = 1; i <= childrenCount; i++) {
      documentContent += `
        <li>${formData[`child${i}`]} года рождения</li>
      `;
    }

    documentContent += `
        <li>Документы о заработке ответчика</li>
        <li>Справка с ЦОН о регистрационном учете детей.</li>
      </ul>
      <p>3/16/2025</p>
      <p>Истец: ${formData.claimantName}</p>
    `;

    setModalContent(documentContent);
    setIsModalOpen(true); // Открыть модальное окно
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
          {form.fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-sm font-medium">{field.label}</label>
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
          {Array.from({ length: childrenCount }).map((_, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium">
                Имя ребенка {index + 1}
              </label>
              <input
                type="text"
                name={`child${index + 1}`}
                value={formData[`child${index + 1}`] || ""}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
              />
            </div>
          ))}

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
          <div className="modal-content bg-white p-6 rounded-lg w-10/12 max-w-4xl h-96 overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 text-xl">X</button>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: modalContent }} />
            <div className="modal-footer flex justify-between mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
              >
                Закрыть
              </button>
              <button
                onClick={downloadDoc}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
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
