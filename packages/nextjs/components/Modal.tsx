import React from "react";

type ModalProps = {
  onClose: () => void;
  title: string;
};

const Modal: React.FC<ModalProps> = ({ title, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-[#1A1D1F] p-8 rounded-md">
        <h3 className="text-xl mb-4">{title}</h3>
        <p>Additional details about the card...</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
