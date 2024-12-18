import React, {useEffect, useState} from 'react';
import documentIdentity from '../../assets/document-identity.jpeg'


const ModalIdentity = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative">
         <img src={documentIdentity} alt='document-identity' />
      </div>
      <button
                onClick={onClose}
                className=" text-black hover:text-gray-600 focus:outline-none absolute right-3 top-3"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
    </div>
  );
};

export default ModalIdentity;
