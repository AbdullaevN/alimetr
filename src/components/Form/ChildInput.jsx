import React from "react";

const ChildInput = ({ index, formData, handleChange }) => {
  return (
    <div key={index} className="flex flex-col gap-4 w-full">

<div className="flex gap-4 w-full mb-4"> {/* Первый ряд */}
      <div>
      <label className="text-sm font-medium">Имя ребенка {index + 1}</label>
        <input
          type="text"
          name={`child${index + 1}_name`}
          value={formData[`child${index + 1}_name`] || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl text-[#9D9D9D] bg-[#F5F5F5]"
        />
      </div>

       <div>
       <label className="text-sm font-medium">Дата рождения ребенка {index + 1}</label>
        <input
          type="date"
          name={`child${index + 1}_birthdate`}
          value={formData[`child${index + 1}_birthdate`] || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
        />
       </div>
</div>

<div className="flex  gap-4 w-full"> {/* Второй ряд */}
        <div>
        <label className="text-sm font-medium">Номер свидетельства о рождении {index + 1}</label>
        <input
          type="text"
          name={`child${index + 1}_certificateNumber`}
          value={formData[`child${index + 1}_certificateNumber`] || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
        />
        </div>
      <div>
      <label className="text-sm font-medium">Дата выдачи свидетельства {index + 1}</label>
        <input
          type="date"
          name={`child${index + 1}_certificateDate`}
          value={formData[`child${index + 1}_certificateDate`] || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl"
        />
      </div>
</div>
      

      
    </div>
  );
};

export default ChildInput;