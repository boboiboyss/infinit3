import React, {useEffect, useState} from 'react';
import chart from '../../assets/chart.jpeg'

const ModalChart = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-[1400px] h-[800px]">
         <img src={chart} alt='chart' className='w-full h-full' />
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

export default ModalChart;
