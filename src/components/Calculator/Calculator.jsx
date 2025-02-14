import { useState } from "react";

import calculate from '../../assets/calculate.png'

const SalaryCalculator = () => {
    const [region, setRegion] = useState('Бишкек');
    const [childrenCount, setChildrenCount] = useState(1);
    const [salary, setSalary] = useState('');
  
    const handleNumberClick = (number) => {
      setSalary((prev) => prev + number);
    };
  
    const handleClear = () => {
      setSalary('');
    };
  
    return (
      <section className='container'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          {/* Форма */}
          <div className="p-6 max-w-sm shadow-md rounded-2xl bg-[#FFFFFF82]">
            {/* Выбор региона */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#181818]">Выберите регион</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-xl bg-[#F7F7FD]"
              >
                <option value="Бишкек">Бишкек</option>
              </select>
            </div>
  
            {/* Количество детей */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#181818]">Количество детей</label>
              <input
                type="number"
                value={childrenCount}
                onChange={(e) => setChildrenCount(e.target.value)}
                placeholder="1 ребенок"
                className="mt-1 block w-full p-2 px-4 border border-gray-300 rounded-xl bg-[#F7F7FD]"
              />
            </div>
  
            {/* Зарплата */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#181818]">Зарплата в сомах</label>
              <input
                type="text"
                value={salary}
                readOnly
                placeholder='Введите зарплату'
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#F7F7FD]"
              />
            </div>
  
            {/* Кнопки */}
            <div className="grid grid-cols-3 gap-2 font-medium text-sm text-[#181818]">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, ''].map((item, index) => (
    <button
      key={index}
      onClick={() => (item === 'C' ? handleClear() : handleNumberClick(item))}
      className="px-9 py-2 border border-gray-300 rounded-2xl hover:bg-gray-300 transition"
    >
      {item === '' ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9999 9L17.9999 15M17.9999 9L11.9999 15M9.99994 5C9.50302 5.00003 9.02391 5.18504 8.65594 5.519L2.32794 11.259C2.22466 11.3527 2.14213 11.467 2.08565 11.5946C2.02918 11.7221 2 11.86 2 11.9995C2 12.139 2.02918 12.2769 2.08565 12.4044C2.14213 12.532 2.22466 12.6463 2.32794 12.74L8.65594 18.481C9.02391 18.815 9.50302 19 9.99994 19H19.9999C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7892 18.0391 21.9999 17.5304 21.9999 17V7C21.9999 6.46957 21.7892 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 19.9999 5H9.99994Z" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      ) : (
        item
      )}
    </button>
  ))}
</div>

  
            {/* Кнопка "Рассчитать" с иконкой */}
            <button className="mt-4 w-full flex items-center justify-center gap-2 p-3 bg-[#FFFFFF] text-black rounded-xl hover:bg-blue-600 transition">
              Рассчитать
             
            </button>
          </div>
  
          {/* Картинка */}
          <div>
            <img src={calculate} alt="Калькулятор" className="max-w-xs" />
          </div>
        </div>
      </section>
    );
  };
  
  export default SalaryCalculator;
  