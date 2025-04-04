

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formsData } from "../components/Form/formsData";
import Modal from "../components/Form/Modal";
import {
  generateAlimonyDoc,
  generateDivorceAlimonyDoc,
  generateAlimonyIncomeShareDoc,
  generatePaternityAlimonyDoc,
  generatePaternityDoc,
} from "../utils/generateDocument";
import FormInput from "../components/Form/FormInput";
import ChildInput from "../components/Form/ChildInput";

 import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FormPage = () => {
  const { id } = useParams();
  const [witnesses, setWitnesses] = useState([]);
  const [witnessName, setWitnessName] = useState("");
  const [witnessStatement, setWitnessStatement] = useState("");

  const addWitness = () => {
    if (witnessName
      //  && witnessStatement
      ) {
      setWitnesses([...witnesses, { name: witnessName, 
        // statement: witnessStatement
       }]);
      setWitnessName("");
      // setWitnessStatement("");
    }
  };
 
  const form = formsData.find((f) => f.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(
    form.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [childrenCount, setChildrenCount] = useState(1);
  const [modalContent, setModalContent] = useState("");
  new Date(formData.marriageDate).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })

  // const formatDate = (date) => {
  //   return new Date(date).toLocaleDateString('ru-RU', {
  //     day: '2-digit',
  //     month: 'long',
  //     year: 'numeric'
  //   });
  // };

  const formatDate = (date) => {
    if (!date) return '_________';
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString('ru-RU', { month: 'long' });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };



  useEffect(() => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      for (let i = 1; i <= childrenCount; i++) {
        if (!newData[`child${i}_name`]) newData[`child${i}_name`] = "";
        if (!newData[`child${i}_birthdate`]) newData[`child${i}_birthdate`] = "";
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   generateDoc(formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Включаем свидетелей в formData перед генерацией документа
    generateDoc({ ...formData, witnesses });
  };


  const generateDoc = (formData) => {
    let documentContent = "";
  
    switch (form.id) {
      case "alimony":
        documentContent = generateAlimonyDoc(formData, childrenCount,formatDate);
        break;
      case "alimony_divorce":
        documentContent = generateDivorceAlimonyDoc(formData, childrenCount,formatDate);
        break;
        case "alimony_income_share":
          documentContent = generateAlimonyIncomeShareDoc(formData, childrenCount,formatDate);
          break;
          case "paternity_alimony":
            documentContent = generatePaternityAlimonyDoc({ ...formData, witnesses }, formatDate); 
            break;

            case "paternity":
              documentContent = generatePaternityDoc(formData,formatDate);  
              break;
      default:
        documentContent = "<p>Форма не найдена</p>";
        break;
    }
  
    setModalContent(documentContent);
    setIsModalOpen(true);
  };

 
const downloadAsDoc = () => {
  const docContent = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="UTF-8">
      <title>Документ</title>
    </head>
    <body>
      ${modalContent}
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', docContent], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "document.doc";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
 



// const downloadDoc = () => {
//   const input = document.createElement("div");
//   input.innerHTML = modalContent;
//   document.body.appendChild(input);

//   html2canvas(input).then((canvas) => {
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF();
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("document.pdf");

//     document.body.removeChild(input);
//   });
// };


const downloadDoc = () => {
  const input = document.createElement("div");
  input.innerHTML = modalContent;
  document.body.appendChild(input);

  // Adjust styles before rendering to canvas
  input.style.margin = "20px 40px";
  input.style.fontSize = "14px"; // Adjust text size
  input.style.lineHeight = "1.6"; // Improve text readability

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("document.pdf");

    document.body.removeChild(input);
  });
};
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-sm px-6 py-2">
        <Link to="/" className="hover:underline">Главная</Link> / 
        <Link to="/templates" className="hover:underline">Генератор заявлений</Link> / 
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
  
        <form onSubmit={handleSubmit} className="px-2 rounded-lg w-full md:w-7/12 sm:w-7/12 py-16">
          <div className="flex gap-4 flex-col w-full">
            {form.fields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placehol}
              />
            ))}
          </div>
  
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
  
          <div className="grid grid-cols-1 gap-4">
            {Array.from({ length: childrenCount }).map((_, index) => (
              <ChildInput
                key={index}
                index={index}
                formData={formData}
                handleChange={handleChange}
              />
            ))}
          </div>
  
          {/* Показываем блок свидетелей только для paternity_alimony */}
          {form.id === "paternity_alimony" && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium">Имя свидетеля</label>
                <input
                  type="text"
                  value={witnessName}
                  onChange={(e) => setWitnessName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
                  placeholder="Введите имя свидетеля"
                />
              </div>
  
              {/* <div className="mb-4">
                <label className="block text-sm font-medium">Заявление свидетеля</label>
                <input
                  type="text"
                  value={witnessStatement}
                  onChange={(e) => setWitnessStatement(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
                  placeholder="Введите заявление свидетеля"
                />
              </div> */}
  
              <button
                type="button"
                onClick={addWitness}
                className="px-4 py-3 text-sm mt-4 bg-[#65bec8] text-[#121212] w-full rounded-2xl"
              >
                Добавить свидетеля
              </button>
  
              <div className="mt-4">
                {witnesses.length > 0 && (
                  <div>
                    <h3 className="font-semibold">Список свидетелей:</h3>
                    {witnesses.map((witness, index) => (
                      <div key={index} className="mb-2">
                        <p><strong>Свидетель {index + 1}:</strong> {witness.name}</p>
                        {/* <p><strong>Заявление:</strong> {witness.statement}</p> */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
  
          <button
            type="submit"
            className="px-4 py-3 text-sm mt-4 bg-[#F5F5F5] text-[#121212] w-full rounded-2xl"
          >
            Открыть модальное окно
          </button>
        </form>
      </div>
  
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalContent={modalContent}
        onDownloadDoc={downloadAsDoc}  
        onDownloadPDF={downloadDoc}  
      />
    </div>
  );
  
  
};

export default FormPage;