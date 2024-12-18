import React from 'react';
import logo from '../assets/logo.png';
import { AiOutlineMail } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdRefresh } from "react-icons/md";
import { Link } from 'react-router-dom';

function PageCheckEmail() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white p-6 mx-10">
        <div className="container">
          <Link to={'/'}>
            <img src={logo} alt="Logo" className="h-16" />
          </Link>
        </div>
      </header>

      <main className="flex items-center justify-center mt-20">
        <div className="w-full max-w-md bg-[#C5D2F7] rounded-2xl shadow-md p-10">
          <div className="mb-6">
            <h1 className="text-2xl text-gray-800 mb-2 font-semibold">Check Your Email</h1>
            <p className="text-sm">
              We sent an email to <span className="font-semibold">audi.hagi2002@gmail.com</span> with instructions on how to sign in to your account
            </p>
          </div>

          <div className="space-y-4 mb-20">
            <div className="flex items-center gap-4">
              <AiOutlineMail className="text-3xl " />
              <span className="text-gray-800">The magic link is in your email.</span>
            </div>

            <div className="flex items-center gap-4">
              <IoTimerOutline className="text-3xl " />
              <span className="text-gray-800">The link expires in 2 minutes.</span>
            </div>

            <div className="flex items-center gap-4">
              <CiLock className="text-3xl" />
              <span className="text-gray-800">Don't share this link. It's only meant for you.</span>
            </div>

            <div className="flex items-center gap-4">
              <MdRefresh className="text-3xl" />
              <span className="text-gray-800">
                Didn't receive this link? <span className="underline cursor-pointer">Try Again</span>.
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageCheckEmail;
