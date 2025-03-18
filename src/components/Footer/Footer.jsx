import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-4 md:mb-0 flex flex-col justify-start md:relative left-0">
          <h2 className="text-xl font-bold flex items-center">
            ALIMETR
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-start">
          <h3 className="font-semibold text-lg">Мы с социальных сетях</h3>
          <ul className="mt-2 space-y-2 text-start align-baseline">
            <li><a href="#" className="text-white hover:text-gray-400">Instagram</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Facebook </a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Twitter</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg">Навигация</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-white hover:text-gray-400">Онлайн-калькулятор</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Шаблонизатор</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Полезная информация</a></li>
          </ul>
        </div>
      </div>
      <div className="text-start mt-6 px-10">
        <ul className='text-xs'>
          <li>Privacy Policy</li>
          <li>Copyright 2025</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;


       {/* <svg width="20" height="20" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.211111 5.62963C0.211111 2.64088 2.68224 0.211111 5.73913 0.211111H27.2609C30.3178 0.211111 32.7889 2.64088 32.7889 5.62963V32.3704C32.7889 35.3591 30.3178 37.7889 27.2609 37.7889H5.73913C2.68224 37.7889 0.211111 35.3591 0.211111 32.3704V5.62963ZM3.08068 5.62963C3.08068 4.19546 4.26705 3.02593 5.73913 3.02593H27.2609C28.7329 3.02593 29.9193 4.19546 29.9193 5.62963V11.2593C29.9193 12.6934 28.7329 13.863 27.2609 13.863H5.73913C4.26706 13.863 3.08068 12.6934 3.08068 11.2593V5.62963ZM5.73913 2.6037C4.04157 2.6037 2.65845 3.95464 2.65845 5.62963V11.2593C2.65845 12.9342 4.04157 14.2852 5.73913 14.2852H27.2609C28.9584 14.2852 30.3415 12.9342 30.3415 11.2593V5.62963C30.3415 3.95464 28.9584 2.6037 27.2609 2.6037H5.73913ZM29.9193 18.2963C29.9193 19.7305 28.7329 20.9 27.2609 20.9C25.7888 20.9 24.6024 19.7305 24.6024 18.2963C24.6024 16.8621 25.7888 15.6926 27.2609 15.6926C28.7329 15.6926 29.9193 16.8621 29.9193 18.2963ZM27.2609 21.3222C28.9584 21.3222 30.3415 19.9713 30.3415 18.2963C30.3415 16.6213 28.9584 15.2704 27.2609 15.2704C25.5633 15.2704 24.1802 16.6213 24.1802 18.2963C24.1802 19.9713 25.5633 21.3222 27.2609 21.3222ZM29.9193 25.3333C29.9193 26.7675 28.7329 27.937 27.2609 27.937C25.7888 27.937 24.6024 26.7675 24.6024 25.3333C24.6024 23.8992 25.7888 22.7296 27.2609 22.7296C28.7329 22.7296 29.9193 23.8992 29.9193 25.3333ZM27.2609 28.3593C28.9584 28.3593 30.3415 27.0083 30.3415 25.3333C30.3415 23.6583 28.9584 22.3074 27.2609 22.3074C25.5633 22.3074 24.1802 23.6583 24.1802 25.3333C24.1802 27.0083 25.5633 28.3593 27.2609 28.3593ZM29.9193 32.3704C29.9193 33.8045 28.7329 34.9741 27.2609 34.9741C25.7888 34.9741 24.6024 33.8045 24.6024 32.3704C24.6024 30.9362 25.7888 29.7667 27.2609 29.7667C28.7329 29.7667 29.9193 30.9362 29.9193 32.3704ZM27.2609 35.3963C28.9584 35.3963 30.3415 34.0454 30.3415 32.3704C30.3415 30.6954 28.9584 29.3444 27.2609 29.3444C25.5633 29.3444 24.1802 30.6954 24.1802 32.3704C24.1802 34.0454 25.5633 35.3963 27.2609 35.3963ZM22.7454 18.2963C22.7454 19.7305 21.559 20.9 20.087 20.9C18.6149 20.9 17.4285 19.7305 17.4285 18.2963C17.4285 16.8621 18.6149 15.6926 20.087 15.6926C21.559 15.6926 22.7454 16.8621 22.7454 18.2963ZM20.087 21.3222C21.7845 21.3222 23.1676 19.9713 23.1676 18.2963C23.1676 16.6213 21.7845 15.2704 20.087 15.2704C18.3894 15.2704 17.0063 16.6213 17.0063 18.2963C17.0063 19.9713 18.3894 21.3222 20.087 21.3222ZM22.7454 25.3333C22.7454 26.7675 21.559 27.937 20.087 27.937C18.6149 27.937 17.4285 26.7675 17.4285 25.3333C17.4285 23.8992 18.6149 22.7296 20.087 22.7296C21.559 22.7296 22.7454 23.8992 22.7454 25.3333ZM20.087 28.3593C21.7845 28.3593 23.1676 27.0083 23.1676 25.3333C23.1676 23.6583 21.7845 22.3074 20.087 22.3074C18.3894 22.3074 17.0063 23.6583 17.0063 25.3333C17.0063 27.0083 18.3894 28.3593 20.087 28.3593ZM22.7454 32.3704C22.7454 33.8045 21.559 34.9741 20.087 34.9741C18.6149 34.9741 17.4285 33.8045 17.4285 32.3704C17.4285 30.9362 18.6149 29.7667 20.087 29.7667C21.559 29.7667 22.7454 30.9362 22.7454 32.3704ZM20.087 35.3963C21.7845 35.3963 23.1676 34.0454 23.1676 32.3704C23.1676 30.6954 21.7845 29.3444 20.087 29.3444C18.3894 29.3444 17.0063 30.6954 17.0063 32.3704C17.0063 34.0454 18.3894 35.3963 20.087 35.3963ZM15.5715 18.2963C15.5715 19.7305 14.3851 20.9 12.913 20.9C11.441 20.9 10.2546 19.7305 10.2546 18.2963C10.2546 16.8621 11.441 15.6926 12.913 15.6926C14.3851 15.6926 15.5715 16.8621 15.5715 18.2963ZM12.913 21.3222C14.6106 21.3222 15.9937 19.9713 15.9937 18.2963C15.9937 16.6213 14.6106 15.2704 12.913 15.2704C11.2155 15.2704 9.83237 16.6213 9.83237 18.2963C9.83237 19.9713 11.2155 21.3222 12.913 21.3222ZM15.5715 25.3333C15.5715 26.7675 14.3851 27.937 12.913 27.937C11.441 27.937 10.2546 26.7675 10.2546 25.3333C10.2546 23.8992 11.441 22.7296 12.913 22.7296C14.3851 22.7296 15.5715 23.8992 15.5715 25.3333ZM12.913 28.3593C14.6106 28.3593 15.9937 27.0083 15.9937 25.3333C15.9937 23.6583 14.6106 22.3074 12.913 22.3074C11.2155 22.3074 9.83237 23.6583 9.83237 25.3333C9.83237 27.0083 11.2155 28.3593 12.913 28.3593ZM15.5715 32.3704C15.5715 33.8045 14.3851 34.9741 12.913 34.9741C11.441 34.9741 10.2546 33.8045 10.2546 32.3704C10.2546 30.9362 11.441 29.7667 12.913 29.7667C14.3851 29.7667 15.5715 30.9362 15.5715 32.3704ZM12.913 35.3963C14.6106 35.3963 15.9937 34.0454 15.9937 32.3704C15.9937 30.6954 14.6106 29.3444 12.913 29.3444C11.2155 29.3444 9.83237 30.6954 9.83237 32.3704C9.83237 34.0454 11.2155 35.3963 12.913 35.3963ZM8.39758 18.2963C8.39758 19.7305 7.21121 20.9 5.73913 20.9C4.26705 20.9 3.08068 19.7305 3.08068 18.2963C3.08068 16.8621 4.26705 15.6926 5.73913 15.6926C7.21121 15.6926 8.39758 16.8621 8.39758 18.2963ZM5.73913 21.3222C7.43669 21.3222 8.81981 19.9713 8.81981 18.2963C8.81981 16.6213 7.43669 15.2704 5.73913 15.2704C4.04157 15.2704 2.65845 16.6213 2.65845 18.2963C2.65845 19.9713 4.04157 21.3222 5.73913 21.3222ZM8.39758 25.3333C8.39758 26.7675 7.21121 27.937 5.73913 27.937C4.26705 27.937 3.08068 26.7675 3.08068 25.3333C3.08068 23.8992 4.26705 22.7296 5.73913 22.7296C7.21121 22.7296 8.39758 23.8992 8.39758 25.3333ZM5.73913 28.3593C7.43669 28.3593 8.81981 27.0083 8.81981 25.3333C8.81981 23.6583 7.43669 22.3074 5.73913 22.3074C4.04157 22.3074 2.65845 23.6583 2.65845 25.3333C2.65845 27.0083 4.04157 28.3593 5.73913 28.3593ZM8.39758 32.3704C8.39758 33.8045 7.21121 34.9741 5.73913 34.9741C4.26705 34.9741 3.08068 33.8045 3.08068 32.3704C3.08068 30.9362 4.26705 29.7667 5.73913 29.7667C7.21121 29.7667 8.39758 30.9362 8.39758 32.3704ZM5.73913 35.3963C7.43669 35.3963 8.81981 34.0454 8.81981 32.3704C8.81981 30.6954 7.43669 29.3444 5.73913 29.3444C4.04157 29.3444 2.65845 30.6954 2.65845 32.3704C2.65845 34.0454 4.04157 35.3963 5.73913 35.3963Z" stroke="white" stroke-width="0.422222"/>
</svg> */}