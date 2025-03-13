import { useState } from "react";
import logo from "../../assets/logo.png"; // Убедись, что путь к лого верный
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#2EA481] to-[#1DA29F] py-4">
      <div className="  container w-full m-0">
      <div className="flex w-full justify-between items-center m-0"> 
<div className="mx-10 py-5">
    {/* Логотип */}
    <Link to={'/'} className="flex items-center ">
    <img src={logo} alt="Logo" className="h-10" />
    <p className="text-white font-semibold text-3xl ">ALIMETR</p>
  </Link>
</div>

  {/* Десктопное меню */}
  <ul className="hidden md:flex text-white text-sm gap-8 font-normal mx-10">
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

    <span className="text-white">KG / RU</span>
  </ul>


    {/* Бургер-меню (мобильное) */}
    <div className="md:hidden mx-10">
  <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
    {menuOpen ? (
      "X"
    ) : (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12H9M21 18H7M21 6H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  </button>
</div>
</div>


      
</div>

         {/* Мобильное меню (SideBar) */}
         {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-[#2EA481] to-[#1DA29F] flex justify-end z-50">
          <div className="w-full sm:w-full px-14 py-7 ">
            <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl absolute top-9 right-9 ">
              
            <svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
            <ul 
className=" text-white text-lg gap-8 font-sm flex-col items-start pl-0 w-full text-start block mt-10 "
>
              <NavLink to="/calculator" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-gray-700" : "hover:text-gray-200"}>
                <li className="cursor-pointer py-3">Онлайн-калькулятор</li>
              </NavLink>
              <NavLink to="/form-builder" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-gray-700" : "hover:text-gray-200"}>
                <li className="cursor-pointer py-3">Шаблонизатор</li>
              </NavLink>
              <NavLink to="/blog" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-gray-700" : "hover:text-gray-200"}>
                <li className="cursor-pointer py-3">Полезная информация</li>
              </NavLink>
            </ul>
            {/* Языковая кнопка внизу */}
            <div className="text-white mt-30 flex items-start text-start ">
              KG / RU
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
