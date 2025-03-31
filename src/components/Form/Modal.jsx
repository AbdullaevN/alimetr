import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, modalContent, onDownloadDoc, onDownloadPDF }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 bg-opacity-50 flex justify-center items-center text-black z-50">
      {/* Добавьте ref к div, который представляет модальное окно */}
      <div ref={modalRef} className="modal-content bg-white p-6 rounded-lg w-10/12 max-w-4xl h-full overflow-y-auto">
      {/* <button onClick={onClose} className="absolute top-4 right-4 text-xl">×</button> */}

        <div className="modal-body" dangerouslySetInnerHTML={{ __html: modalContent }} />
        

        <div className="modal-footer flex justify-between mt-4">

          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-3 text-sm mt-4 bg-gray-300 text-gray-800 rounded-2xl"
          >
            Закрыть
          </button>
          <button
            onClick={onDownloadPDF}
            className="cursor-pointer px-4 py-3 text-sm mt-4 bg-[#65bec8] text-[#121212] rounded-2xl"
          >
            Скачать PDF
          </button>   
          <button
            onClick={onDownloadDoc}
            className="cursor-pointer px-4 py-3 text-sm mt-4 bg-[#65bec8] text-[#121212] rounded-2xl"
          >
            Скачать doc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;