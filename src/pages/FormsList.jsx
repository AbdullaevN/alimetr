import React from "react";
import { formsData } from '../components/Form/formsData.js'
import FormCard from "../components/Form/FormCard";

const FormsList = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-4xl">
      <h1 className="text-2xl font-bold text-center mb-6">Выберите заявление</h1>
      <div className="space-y-4">
        {formsData.map((form) => (
          <FormCard key={form.id} form={form} />
        ))}
      </div>
    </section>
  );
};

export default FormsList;
