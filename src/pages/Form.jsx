

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formsData } from "../components/Form/formsData";
import Modal from "../components/Form/Modal";
import {
  generateAlimonyDoc,
  generateDivorceAlimonyDoc,
  generateAlimonyIncomeShareDoc,
  generate1,
  generate2,
} from "../utils/generateDocument";
import {FormInput} from "../components/Form/FormInput";
import ChildInput from "../components/Form/ChildInput";

 import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useTranslation } from "react-i18next";

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

  const formatDate = (date) => {
    if (!date) return '_________';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = d.getFullYear();
    return `${day}.${month}.${year}`
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const handleChildrenChange = (e) => {
    setChildrenCount(parseInt(e.target.value, 10));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
     generateDoc({ ...formData, witnesses });
  };


  const generateDoc = (formData) => {
    let documentContent = "";
  
    switch (form.id) {
      case "alimony":
        documentContent = generateAlimonyDoc(formData,childrenCount, formatDate);
        break;
      case "alimony_divorce":
        documentContent = generateDivorceAlimonyDoc(formData, childrenCount,formatDate);
        break;
        case "alimony_income_share":
          documentContent = generateAlimonyIncomeShareDoc(formData, childrenCount,formatDate);
          break;
          case "alimony1":
          documentContent = generate1(formData, childrenCount,formatDate);
          break;
          case "alimony2":
            documentContent = generate2(formData, childrenCount,formatDate);
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
 



const downloadDoc = () => {
  const input = document.createElement("div");
  input.innerHTML = modalContent;
  document.body.appendChild(input);

  // Скрываем блок
  input.style.position = "absolute";
  input.style.left = "-9999px";
  input.style.width = "800px"; // ширина, близкая к A4
  input.style.fontSize = "14px";
  input.style.lineHeight = "1.6";

  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // px -> mm
    const pxToMm = 0.2646;
    const imgWidthMm = imgWidth * pxToMm;
    const imgHeightMm = imgHeight * pxToMm;

    const ratio = pdfWidth / imgWidthMm;
    const scaledHeight = imgHeightMm * ratio;

    let position = 0;
    let pageHeightLeft = scaledHeight;

    while (pageHeightLeft > 0) {
      pdf.addImage(
        imgData,
        "PNG",
        0,
        position ? -position : 0,
        pdfWidth,
        scaledHeight
      );
      pageHeightLeft -= pdfHeight;
      position += pdfHeight;
      if (pageHeightLeft > 0) pdf.addPage();
    }

    pdf.save("document.pdf");
    document.body.removeChild(input);
  });
};



  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { t } = useTranslation();

  const formTexts = t(`forms.${form.id}`, { returnObjects: true });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-sm px-6 py-2">
        <Link to="/" className="hover:underline">Главная</Link> / 
        <Link to="/templates" className="hover:underline">Генератор заявлений</Link> / 
        <span className="text-[#F8F8FA] font-bold">{form.title}</span>
      </div>



    
     
      <p className="text-center mt-8"></p>
      <div className="flex items-baseline md:flex-row flex-col px-6">
        <h1 className="text-3xl px-0 mx-0 py-4">{form.title}</h1>
        {/* <p className="mb-4 text-3xl">{form.description}</p> */}

      </div>
      
     

    
 
      <div className="flex px-6 justify-between pt-10 md:flex-row flex-col">
        <div className="w-full md:w-2/12 px-0 mx-0">
        <span className="font-bold mt-10 hidden md:block">Введите данные для заявления</span>
          <p className="text-center mt-20">{formTexts.description1}</p>
          {/* {formTextsTexts.description} */}

          <p className="text-center mt-10">{formTexts.description2}</p>
          <p className="text-center mt-10">{formTexts.description3}</p>
          <p className="text-center mt-10">{formTexts.description4}</p>
          <p className="text-center mt-10">{formTexts.description5}</p>
          <p className="text-center mt-10">{formTexts.description6}</p>
          <p className="text-center mt-10">{formTexts.description7}</p>
          <p className="text-center mt-10">{formTexts.description8}</p>
          <span className="font-bold mt-10 block md:hidden">Введите данные для заявления</span>
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
    placeholder={field.placeholder}  
    options={field.options}  
  />
))}
          </div>
  

          {form.id !== "alimony1" && (
            <>
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
</>

)}
           {/* <div className="mb-4">
            <label className="block text-sm font-medium">Количество детей</label>
            <input
              type="number"
              min="1"
              max="12"
              value={childrenCount}
              onChange={handleChildrenChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
            />
          </div>  */}
  
        
  
  
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