import React, {useState, useEffect} from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';

const ModalWalletConnected = ({ isOpen, onClose, openKYC, wallet}) => {
  if (!isOpen) return null;

    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsConnected(true)
        }, 1000)
    }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative rounded-xl shadow-lg w-1/2 bg-[#C5D2F7] h-[480px]">
        <div className="flex">
          <div className="px-4 border-r border-black w-1/3">
            <img src={logo} alt="logo" className="h-16" />
            <h2 className="text-xl font-bold mb-4">Connect your wallet</h2>
            <p className="mb-4 text-justify">
              Connect your wallet to access Web3. Choose your preferred wallet from the options below to get started.
            </p>

            <div className='flex items-center justify-center h-full'>
                <div className='flex items-center justify-center space-x-2'>
                <p className='text-lg'>I don't have a wallet</p>
                <IoMdInformationCircleOutline className='h-6 w-6 rotate-180' />
                </div>

            </div>
          </div>

          <div className="w-2/3">
             <div className='border-b-[1px] border-black flex justify-between px-2'>
                <h1 className='text-2xl font-bold my-3'>Connecting to {wallet?.name} Wallet...</h1>
                <button
                onClick={onClose}
                className=" text-black hover:text-gray-600 focus:outline-none"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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

             <div className='content w-full p-4 h-[400px]'>
                <div className='flex flex-col items-center justify-center gap-y-5'>
                    {
                        isConnected ? (
                             <div className=' m-10 flex flex-col space-y-6 items-center justify-center'>
                                <img alt={wallet?.name} className=" w-36 mx-auto h-36 rounded-full object-cover" src={wallet?.image}  />
                                <p className='text-center font-semibold'>Successfully Connected to {wallet?.name} Wallet</p>

                                <span className='text-sm text-center'>You can view your list of wallets in the <Link to={'/address-book'} className='text-black no-underline font-bold'>Address Book</Link> menu or here</span>
                                <button 
                                    onClick={() => {
                                        onClose();
                                        openKYC();
                                    }}
                                    className="bg-black text-white p-4 text-center rounded-lg w-full text-sm mt-5"
                                >Next: KYC   
                                </button>
                            </div>
                         
                        ) : (
                              <div className='w-full bg-white p-3 rounded-xl border border-black'>
                                <div className='flex items-center space-x-3'>
                                    <img src={wallet?.image} alt={wallet?.name} className='h-20 w-20 rounded-full object-cover' /> 
                                    <div className='flex flex-col justify-center space-y-1'>
                                        <p className='font-bold text-lg'>Connecting to {wallet?.name} Wallet...</p>
                                        <p>Make sure to select all accounts that you want to grant access to.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                     
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWalletConnected;
