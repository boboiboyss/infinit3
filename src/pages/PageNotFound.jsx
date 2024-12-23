import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-20 h-20 text-red-600"
      >
        <path
          fillRule="evenodd"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-.75-12a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0V8zm0 7.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0z"
          clipRule="evenodd"
        />
      </svg>

      <h1 className="text-9xl font-bold text-gray-800 mt-4">404</h1>
      <p className="text-2xl font-semibold text-gray-600 mt-4">
        Oops! Halaman tidak ditemukan.
      </p>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Halaman yang Anda cari mungkin telah dihapus atau sementara tidak tersedia.
      </p>


      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.25 6.75L4.5 12m0 0l5.75 5.25M4.5 12h15"
          />
        </svg>
        Kembali ke Beranda
      </Link>
    </div>
  );
}

