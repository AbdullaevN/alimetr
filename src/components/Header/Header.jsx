import { useState } from "react";
import logo from "../../assets/logo.png"; // Убедись, что путь к лого верный
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#2EA481] to-[#1DA29F] py-4">
      <div className="container mx-auto flex items-end justify-end ">
        {/* Логотип */}
       <Link to={'/'}>
       <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
          <p className="text-white font-semibold text-3xl ml-2 self-end">ALIMETR</p>
        </div>
       </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex flex-1 justify-end items-end">
  <ul className="flex text-white text-sm gap-8 font-normal relative left-[24%]">
    <NavLink
      to="/"
      className={({ isActive }) => isActive ? "text-gray-700"  : "hover:text-gray-200"}
    >
      <li className="cursor-pointer">Онлайн-калькулятор</li>
    </NavLink>

    <NavLink
      to="/forms"
      className={({ isActive }) => isActive ? "text-gray-700"  : "hover:text-gray-200"}
    >
      <li className="cursor-pointer">Шаблонизатор</li>
    </NavLink>

    <NavLink
      to="/blog"
      className={({ isActive }) => isActive ? "text-gray-700" : "hover:text-gray-200"}
    >
      <li className="cursor-pointer">Полезная информация</li>
    </NavLink>

    <span className="text-white">
      KG / RU
    </span>
  </ul>
 
</nav>

        {/* Бургер-меню (мобильное) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

        {/* Мобильное меню (SideBar) */}
        {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-[#2EA481] to-[#1DA29F] flex justify-end z-50">
          <div className="w-full sm:w-full p-6">
            <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl mb-4">
              ✖
            </button>
            <ul className="flex text-white text-lg gap-8 font-bold flex-col text-start justify-start">
              <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-gray-700" : "hover:text-gray-200"}>
                <li className="cursor-pointer">Главная</li>
              </NavLink>
              <NavLink to="/forms" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-gray-700" : "hover:text-gray-200"}>
                <li className="cursor-pointer">Форма заявления</li>
              </NavLink>
              <NavLink to="/blog" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-gray-700" : "hover:text-gray-200"}>
                <li className="cursor-pointer">Блог</li>
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
