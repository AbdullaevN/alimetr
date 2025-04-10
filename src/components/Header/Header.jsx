 


import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
  // { code: "en", label: "English" },
  { code: "ru", label: "RU" },
  { code: "ky", label: "KG" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
 
    const [language, setLanguage] = useState(localStorage.getItem("language") || "ru");
  
    useEffect(() => {
      i18n.changeLanguage(language);
    }, [language, i18n]);
  
    const changeLanguage = (code) => {
      i18n.changeLanguage(code).then(() => {
        setCurrentLanguage(code);
        localStorage.setItem("language", code);
      });
    };

  const desktopMenu = (
    <nav className="hidden md:flex text-white text-sm gap-8 font-normal mx-10 list-none">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "hover:text-gray-200"}
      >
        <li className="cursor-pointer">{t("header.calculator")}</li>
      </NavLink>
      
      <NavLink
        to="/templates"
        className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "hover:text-gray-200"}
      >
        <li className="cursor-pointer">{t("header.generator")}</li>
      </NavLink>
      
      <NavLink
        to="/info"
        className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "hover:text-gray-200"}
      >
        <li className="cursor-pointer">{t("header.info")}</li>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "hover:text-gray-200"}
      >
        <li className="cursor-pointer">{t("header.about")}</li>
      </NavLink>
    </nav>
  );




    const mobileMenu =

  menuOpen && (
  <nav className="fixed inset-0 bg-gradient-to-r from-[#2EA481] to-[#1DA29F] flex justify-end z-50">
    <div className="w-full sm:w-full px-14 py-7">
      <button
        onClick={() => setMenuOpen(false)}
        className="text-white text-2xl absolute top-9 right-9"
        aria-label="Закрыть меню"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      <ul className="text-white text-lg gap-8 font-sm flex-col items-start pl-0 w-full text-start block mt-10">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <li className="cursor-pointer py-3">{t("header.calculator")}</li>
        </NavLink>
        <NavLink to="/templates" onClick={() => setMenuOpen(false)}>
          <li className="cursor-pointer py-3">{t("header.generator")}</li>
        </NavLink>
        <NavLink to="/info" onClick={() => setMenuOpen(false)}>
          <li className="cursor-pointer py-3">{t("header.info")}</li>
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          <li className="cursor-pointer py-3">{t("header.about")}</li>
        </NavLink>
      </ul>

      {/* Переключатель языка внутри мобильного меню */}
      <div className="mt-10 flex space-x-5">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            className={`text-white text-lg font-medium ${currentLanguage === code ? "underline" : ""}`}
            onClick={() => {
              changeLanguage(code);
              setMenuOpen(false);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  </nav>
  )



  
  return (
    <header className="bg-gradient-to-r from-[#2EA481] to-[#1DA29F] py-4">
      <div className="container w-full m-0">
        <div className="flex w-full justify-between items-center m-0">
          <div className="mx-10 py-5">
            {/* Логотип */}
            <Link to="/" className="flex items-center">
              {/* <img src={logo} alt="ALIMETR Logo" className="h-10" />
              <p className="text-white font-semibold text-3xl">ALIMETR</p> */}
              <svg width="189" height="38" viewBox="0 0 189 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.4662 32H55.1083L53.6303 27.5084H44.799L43.3579 32H38L46.4248 8.19101C46.7943 7.36329 47.2008 6.7912 47.6442 6.47472C48.1123 6.15824 48.6788 6 49.344 6C50.0091 6 50.5387 6.14607 50.9329 6.4382C51.3516 6.73034 51.7211 7.31461 52.0414 8.19101L60.4662 32ZM52.4478 23.236L49.344 12.9382L46.0923 23.236H52.4478Z" fill="white"/>
<path d="M80.2976 32H72.464C69.508 32 67.3648 31.4401 66.0346 30.3202C64.729 29.176 64.0762 27.3258 64.0762 24.7697V6H69.2123V24.7697C69.2123 25.7921 69.4464 26.4981 69.9144 26.8876C70.3825 27.2772 71.2323 27.4719 72.464 27.4719H80.2976V32Z" fill="white"/>
<path d="M89.5282 32H84.392V6H89.5282V32Z" fill="white"/>
<path d="M115.087 16.4803L110.357 26.3399C109.667 27.6545 108.805 28.3118 107.77 28.3118C106.76 28.3118 105.911 27.618 105.221 26.2303L100.417 16.4803V32H95.281V6H100.343L107.77 21.0084L115.161 6H120.223V32H115.087V16.4803Z" fill="white"/>
<path d="M142.931 32H133.619C130.663 32 128.582 31.5009 127.375 30.5028C126.192 29.4803 125.601 27.691 125.601 25.1348V6H142.931V10.5281H130.737V16.6264H139.273L138.903 21.1545H130.737V24.7697C130.737 25.7921 130.971 26.4981 131.439 26.8876C131.907 27.2772 132.757 27.4719 133.989 27.4719H142.931V32Z" fill="white"/>
<path d="M165.082 10.5281H158.024V32H152.888V10.5281H145.868V6H165.082V10.5281Z" fill="white"/>
<path d="M189 32H183.051L177.915 22.3596H174.22V32H169.083V11.5871C169.083 9.63951 169.539 8.22753 170.451 7.35112C171.362 6.45037 172.889 6 175.033 6H179.393C182.004 6 184.073 6.7912 185.601 8.37359C187.152 9.93165 187.928 11.9157 187.928 14.3258C187.928 16.0787 187.46 17.6002 186.524 18.8904C185.613 20.1564 184.48 21.0328 183.125 21.5197L189 32ZM179.06 18.1236C180.144 18.1236 181.031 17.7584 181.721 17.0281C182.435 16.2734 182.792 15.3483 182.792 14.2528C182.792 13.133 182.447 12.2322 181.758 11.5506C181.093 10.8689 180.193 10.5281 179.06 10.5281H176.511C174.983 10.5281 174.22 11.2949 174.22 12.8286V18.1236H179.06Z" fill="white"/>
<path d="M0.211111 5.62963C0.211111 2.64088 2.68224 0.211111 5.73913 0.211111H27.2609C30.3178 0.211111 32.7889 2.64088 32.7889 5.62963V32.3704C32.7889 35.3591 30.3178 37.7889 27.2609 37.7889H5.73913C2.68224 37.7889 0.211111 35.3591 0.211111 32.3704V5.62963ZM3.08068 5.62963C3.08068 4.19546 4.26705 3.02593 5.73913 3.02593H27.2609C28.7329 3.02593 29.9193 4.19546 29.9193 5.62963V11.2593C29.9193 12.6934 28.7329 13.863 27.2609 13.863H5.73913C4.26706 13.863 3.08068 12.6934 3.08068 11.2593V5.62963ZM5.73913 2.6037C4.04157 2.6037 2.65845 3.95464 2.65845 5.62963V11.2593C2.65845 12.9342 4.04157 14.2852 5.73913 14.2852H27.2609C28.9584 14.2852 30.3415 12.9342 30.3415 11.2593V5.62963C30.3415 3.95464 28.9584 2.6037 27.2609 2.6037H5.73913ZM29.9193 18.2963C29.9193 19.7305 28.7329 20.9 27.2609 20.9C25.7888 20.9 24.6024 19.7305 24.6024 18.2963C24.6024 16.8621 25.7888 15.6926 27.2609 15.6926C28.7329 15.6926 29.9193 16.8621 29.9193 18.2963ZM27.2609 21.3222C28.9584 21.3222 30.3415 19.9713 30.3415 18.2963C30.3415 16.6213 28.9584 15.2704 27.2609 15.2704C25.5633 15.2704 24.1802 16.6213 24.1802 18.2963C24.1802 19.9713 25.5633 21.3222 27.2609 21.3222ZM29.9193 25.3333C29.9193 26.7675 28.7329 27.937 27.2609 27.937C25.7888 27.937 24.6024 26.7675 24.6024 25.3333C24.6024 23.8992 25.7888 22.7296 27.2609 22.7296C28.7329 22.7296 29.9193 23.8992 29.9193 25.3333ZM27.2609 28.3593C28.9584 28.3593 30.3415 27.0083 30.3415 25.3333C30.3415 23.6583 28.9584 22.3074 27.2609 22.3074C25.5633 22.3074 24.1802 23.6583 24.1802 25.3333C24.1802 27.0083 25.5633 28.3593 27.2609 28.3593ZM29.9193 32.3704C29.9193 33.8045 28.7329 34.9741 27.2609 34.9741C25.7888 34.9741 24.6024 33.8045 24.6024 32.3704C24.6024 30.9362 25.7888 29.7667 27.2609 29.7667C28.7329 29.7667 29.9193 30.9362 29.9193 32.3704ZM27.2609 35.3963C28.9584 35.3963 30.3415 34.0454 30.3415 32.3704C30.3415 30.6954 28.9584 29.3444 27.2609 29.3444C25.5633 29.3444 24.1802 30.6954 24.1802 32.3704C24.1802 34.0454 25.5633 35.3963 27.2609 35.3963ZM22.7454 18.2963C22.7454 19.7305 21.559 20.9 20.087 20.9C18.6149 20.9 17.4285 19.7305 17.4285 18.2963C17.4285 16.8621 18.6149 15.6926 20.087 15.6926C21.559 15.6926 22.7454 16.8621 22.7454 18.2963ZM20.087 21.3222C21.7845 21.3222 23.1676 19.9713 23.1676 18.2963C23.1676 16.6213 21.7845 15.2704 20.087 15.2704C18.3894 15.2704 17.0063 16.6213 17.0063 18.2963C17.0063 19.9713 18.3894 21.3222 20.087 21.3222ZM22.7454 25.3333C22.7454 26.7675 21.559 27.937 20.087 27.937C18.6149 27.937 17.4285 26.7675 17.4285 25.3333C17.4285 23.8992 18.6149 22.7296 20.087 22.7296C21.559 22.7296 22.7454 23.8992 22.7454 25.3333ZM20.087 28.3593C21.7845 28.3593 23.1676 27.0083 23.1676 25.3333C23.1676 23.6583 21.7845 22.3074 20.087 22.3074C18.3894 22.3074 17.0063 23.6583 17.0063 25.3333C17.0063 27.0083 18.3894 28.3593 20.087 28.3593ZM22.7454 32.3704C22.7454 33.8045 21.559 34.9741 20.087 34.9741C18.6149 34.9741 17.4285 33.8045 17.4285 32.3704C17.4285 30.9362 18.6149 29.7667 20.087 29.7667C21.559 29.7667 22.7454 30.9362 22.7454 32.3704ZM20.087 35.3963C21.7845 35.3963 23.1676 34.0454 23.1676 32.3704C23.1676 30.6954 21.7845 29.3444 20.087 29.3444C18.3894 29.3444 17.0063 30.6954 17.0063 32.3704C17.0063 34.0454 18.3894 35.3963 20.087 35.3963ZM15.5715 18.2963C15.5715 19.7305 14.3851 20.9 12.913 20.9C11.441 20.9 10.2546 19.7305 10.2546 18.2963C10.2546 16.8621 11.441 15.6926 12.913 15.6926C14.3851 15.6926 15.5715 16.8621 15.5715 18.2963ZM12.913 21.3222C14.6106 21.3222 15.9937 19.9713 15.9937 18.2963C15.9937 16.6213 14.6106 15.2704 12.913 15.2704C11.2155 15.2704 9.83237 16.6213 9.83237 18.2963C9.83237 19.9713 11.2155 21.3222 12.913 21.3222ZM15.5715 25.3333C15.5715 26.7675 14.3851 27.937 12.913 27.937C11.441 27.937 10.2546 26.7675 10.2546 25.3333C10.2546 23.8992 11.441 22.7296 12.913 22.7296C14.3851 22.7296 15.5715 23.8992 15.5715 25.3333ZM12.913 28.3593C14.6106 28.3593 15.9937 27.0083 15.9937 25.3333C15.9937 23.6583 14.6106 22.3074 12.913 22.3074C11.2155 22.3074 9.83237 23.6583 9.83237 25.3333C9.83237 27.0083 11.2155 28.3593 12.913 28.3593ZM15.5715 32.3704C15.5715 33.8045 14.3851 34.9741 12.913 34.9741C11.441 34.9741 10.2546 33.8045 10.2546 32.3704C10.2546 30.9362 11.441 29.7667 12.913 29.7667C14.3851 29.7667 15.5715 30.9362 15.5715 32.3704ZM12.913 35.3963C14.6106 35.3963 15.9937 34.0454 15.9937 32.3704C15.9937 30.6954 14.6106 29.3444 12.913 29.3444C11.2155 29.3444 9.83237 30.6954 9.83237 32.3704C9.83237 34.0454 11.2155 35.3963 12.913 35.3963ZM8.39758 18.2963C8.39758 19.7305 7.21121 20.9 5.73913 20.9C4.26705 20.9 3.08068 19.7305 3.08068 18.2963C3.08068 16.8621 4.26705 15.6926 5.73913 15.6926C7.21121 15.6926 8.39758 16.8621 8.39758 18.2963ZM5.73913 21.3222C7.43669 21.3222 8.81981 19.9713 8.81981 18.2963C8.81981 16.6213 7.43669 15.2704 5.73913 15.2704C4.04157 15.2704 2.65845 16.6213 2.65845 18.2963C2.65845 19.9713 4.04157 21.3222 5.73913 21.3222ZM8.39758 25.3333C8.39758 26.7675 7.21121 27.937 5.73913 27.937C4.26705 27.937 3.08068 26.7675 3.08068 25.3333C3.08068 23.8992 4.26705 22.7296 5.73913 22.7296C7.21121 22.7296 8.39758 23.8992 8.39758 25.3333ZM5.73913 28.3593C7.43669 28.3593 8.81981 27.0083 8.81981 25.3333C8.81981 23.6583 7.43669 22.3074 5.73913 22.3074C4.04157 22.3074 2.65845 23.6583 2.65845 25.3333C2.65845 27.0083 4.04157 28.3593 5.73913 28.3593ZM8.39758 32.3704C8.39758 33.8045 7.21121 34.9741 5.73913 34.9741C4.26705 34.9741 3.08068 33.8045 3.08068 32.3704C3.08068 30.9362 4.26705 29.7667 5.73913 29.7667C7.21121 29.7667 8.39758 30.9362 8.39758 32.3704ZM5.73913 35.3963C7.43669 35.3963 8.81981 34.0454 8.81981 32.3704C8.81981 30.6954 7.43669 29.3444 5.73913 29.3444C4.04157 29.3444 2.65845 30.6954 2.65845 32.3704C2.65845 34.0454 4.04157 35.3963 5.73913 35.3963Z" stroke="white" stroke-width="0.422222"/>
</svg>

            </Link>
          </div>

          {/* Десктопное меню */}
          {/* <nav className="hidden md:flex text-white text-sm gap-8 font-normal mx-10 list-none">
            <NavLink
              to="/"
              aria-label="Онлайн-калькулятор"
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              className={({ isActive }) =>
                isActive ? "text-gray-700 font-bold" : "hover:text-gray-200"
              }
            >
              <li className="cursor-pointer">Онлайн-калькулятор</li>
            </NavLink>

            <NavLink
              to="/templates"
              aria-label={t("2")}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              className={({ isActive }) =>
                isActive ? "text-gray-700 font-bold" : "hover:text-gray-200"
              }
            >
              <li className="cursor-pointer">{t("2")}</li>
            </NavLink>

            <NavLink
              to="/info"
              aria-label={t("3")}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              className={({ isActive }) =>
                isActive ? "text-gray-700 font-bold" : "hover:text-gray-200"
              }
            >
              <li className="cursor-pointer"> {t("3")}</li>
            </NavLink>
 
       <div className="mx-10 flex items-center space-x-2">
  {languages.map(({ code, label }) => (
    <React.Fragment key={code}>
      <button
        className={`text-white px-2 py-1 ${
          i18n.language === code ? "font-bold underline" : "opacity-50"
        }`}
        onClick={() => changeLanguage(code)}
      >
        {label}
      </button>
      {code !== languages[languages.length - 1].code && (
        <span className="text-white">/</span>
      )}
    </React.Fragment>
  ))}
</div>

         
          </nav> */}
   {desktopMenu}

  {/* Переключатель языка
  <div className="md:flex space-x-5 items-center hidden ">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                className={`text-white font-medium ${currentLanguage === code ? "underline" : " / "}`}
                onClick={() => changeLanguage(code)}
              >
                {label}
              </button>
            ))}
          </div> */}
          {/* Переключатель языка (десктопная версия) */}
<div className="hidden md:flex items-center mx-10">
  {languages.map(({ code, label }, index) => (
    <React.Fragment key={code}>
      <button
        className={`text-white px-2 py-1 ${
          currentLanguage === code ? "font-bold underline" : "opacity-50"
        }`}
        onClick={() => changeLanguage(code)}
      >
        {label}
      </button>
      {index < languages.length - 1 && (
        <span className="text-white">/</span>
      )}
    </React.Fragment>
  ))}
</div>
              
      {mobileMenu}
   
          {/* <nav className="flex gap-4 text-white">
          <Link to="/">{t("header.calculator")}</Link>
          <Link to="/templates">{t("header.generator")}</Link>
          <Link to="/info">{t("header.info")}</Link>
        </nav>
        <div className="flex space-x-5 items-center">
             {languages.map(({ code, label }) => (
              <button
                key={code}
                className={`text-white font-medium ${language === code ? "underline" : ""}`}
                onClick={() => changeLanguage(code)}
              >
                {label}
              </button>
            ))}
          </div> */}
       




          {/* Бургер-меню (мобильное) */}
        {/* Бургер-меню (мобильное) */}
<div className="md:hidden mx-10">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white text-2xl"
    aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
  >
    {menuOpen ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12H9M21 18H7M21 6H3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </button>
</div>








        </div>
      </div>





{/* Бургер-меню (только на мобилках) */}
{/* <div className="md:hidden mx-10">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
              aria-label="Меню"
            >
              {menuOpen ? (
                "X"
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12H9M21 18H7M21 6H3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div> */}
      

      {/* Мобильное меню (SideBar) */}
      {/* {menuOpen && (
        <nav className="fixed inset-0 bg-gradient-to-r from-[#2EA481] to-[#1DA29F] flex justify-end z-50">
          <div className="w-full sm:w-full px-14 py-7">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-2xl absolute top-9 right-9"
              aria-label="Закрыть меню"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className="text-white text-lg gap-8 font-sm flex-col items-start pl-0 w-full text-start block mt-10">
              <NavLink
                to="/"
                aria-label="Онлайн-калькулятор"
                onClick={() => setMenuOpen(false)}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                className={({ isActive }) =>
                  isActive ? "text-gray-700" : "hover:text-gray-200"
                }
              >
                <li className="cursor-pointer py-3">Онлайн-калькулятор</li>
              </NavLink>

              <NavLink
                to="/templates"
                aria-label="Генератор заявлений"
                onClick={() => setMenuOpen(false)}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                className={({ isActive }) =>
                  isActive ? "text-gray-700" : "hover:text-gray-200"
                }
              >
                <li className="cursor-pointer py-3">Генератор заявлений</li>
              </NavLink>

              <NavLink
                to="/info"
                aria-label="Полезная информация"
                onClick={() => setMenuOpen(false)}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                className={({ isActive }) =>
                  isActive ? "text-gray-700" : "hover:text-gray-200"
                }
              >
                <li className="cursor-pointer py-3">Полезная информация</li>
              </NavLink>
            </ul>

           
           <div className="mx-10 flex items-center space-x-2">
            <button
              className={`text-white px-2 py-1 ${
                language === "KG" ? "font-bold underline" : "opacity-50"
              }`}
              onClick={() => setLanguage("KG")}
            >
              KG
            </button>
            <span className="text-white">/</span>
            <button
              className={`text-white px-2 py-1 ${
                language === "RU" ? "font-bold underline" : "opacity-50"
              }`}
              onClick={() => setLanguage("RU")}
            >
              RU
            </button>
          </div>
          </div>
        </nav>
      )} */}
    </header>
  );
};

export default Header;
