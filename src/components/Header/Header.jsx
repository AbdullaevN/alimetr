import { useState } from "react";
 import logo from "../../assets/logo.png"; // Убедись, что путь к лого верный

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#2EA481] to-[#1DA29F] py-4 ">
      <div className="container mx-auto flex items-end justify-between px-6 w-full">
        {/* Логотип */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
          <p className="text-white font-semibold text-lg ml-2">alimetr</p>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex">
          <ul className="flex text-white text-lg gap-8 font-bold">
            <li className="hover:text-gray-200 cursor-pointer">Главная</li>
            <li className="hover:text-gray-200 cursor-pointer">Форма заявления</li>
            <li className="hover:text-gray-200 cursor-pointer">Блог</li>
          </ul>
        </nav>

        {/* Бургер-меню (мобильное) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ?   <p>U</p> : <h2>g</h2>}
          </button>
        </div>
      </div>

      {/* Мобильное меню (SideBar) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="w-2/3 sm:w-1/3 bg-white p-6 shadow-lg">
            <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl mb-4">
              Х
            </button>
            <ul className="text-gray-900 text-lg space-y-4">
              <li className="hover:text-gray-500 cursor-pointer">Главная</li>
              <li className="hover:text-gray-500 cursor-pointer">Форма заявления</li>
              <li className="hover:text-gray-500 cursor-pointer">Блог</li>
            </ul>
          </div>
        </div>
      )}
    </header>

  );
};

export default Header;
