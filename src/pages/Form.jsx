import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formsData } from "../components/Form/formsData.js";
import { generateDocument } from "../utils/generateDocument";

const FormPage = () => {
  const { id } = useParams();
  const form = formsData.find((item) => item.id === id);

  if (!form) {
    return <h2 className="text-center text-red-500 text-xl">❌ Форма не найдена</h2>;
  }

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, field) => {
    setFormData({ ...formData, [field]: date });
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">{form.title}</h1>
      <form className="bg-white/50 p-6 rounded-lg shadow-md space-y-4">
      <h3 className="text-2xl font-bold mb-4 text-center">Введите данные для заявления</h3>
        {form.fields.map((field) => (
          <label key={field.name} className="block">
            <span className="text-black flex flex-col">{field.label}:</span>
            {field.type === "text" || field.type === "textarea" ? (
              <input
                type="text"
                name={field.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 my-5 border-[#ccc] border-1 rounded-full bg-white" 
                placeholder={field.placehol}
              />
            ) : field.type === "date" ? (
              <DatePicker
                selected={formData[field.name]}
                onChange={(date) => handleDateChange(date, field.name)}
                className="w-full mt-1 p-2 border-[#ccc] border-1 rounded-full bg-white" 
                placeholderText="Выберите дату"
              />
            ) : null}
          </label>
        ))}

        <button
          type="button"
          onClick={() => generateDocument(form, formData)}
          className="w-full bg-blue-500 mt-3 text-white p-3 rounded-full shadow-md hover:bg-blue-900  cursor-pointer"
        >
          Скачать документ
        </button>
      </form>
    </section>
  );
};

export default FormPage;
