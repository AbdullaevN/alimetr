import React from "react";

const FormInput = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-xl font-medium">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl text-[#9D9D9D] bg-[#F5F5F5]"
      />
    </div>
  );
};

export default FormInput;