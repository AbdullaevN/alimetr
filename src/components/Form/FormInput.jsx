export const FormInput = ({ label, type, name, value, onChange, placeholder, options }) => {
  if (type === "select") {
    return (
      <div className="mb-4 w-full">
        <label className="block text-xl font-medium">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-2xl text-[#9D9D9D] bg-[#F5F5F5]"
        >
          {/* Значение по умолчанию */}
          <option value="Нет"></option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>  
          ))}
        </select>
      </div>
    );
  }

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
