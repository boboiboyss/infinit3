import React, {useEffect, useState} from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import logo from '../../assets/logo3.png';

import metamask from '../../assets/metamaskwallet.png';
import okx from '../../assets/okxwallet.jpeg';
import coin98 from '../../assets/coin98.png';
import defi from '../../assets/defiwallet.png';
import wallet from '../../assets/walletconnect.png';
import bitget from '../../assets/bitget.png';

const ModalWallet = ({ isOpen, onClose, openWalletConnected, setSelectedWallet }) => {
  if (!isOpen) return null;

 const handleWalletClick = (wallet) => {
     openWalletConnected();
     setSelectedWallet(wallet)
    onClose(); 
  };

   const wallets = [
    { id : 1, name: "Metamask", image: metamask },
    { id : 2, name: "OKX Wallet", image: okx },
    { id : 3, name: "Coin98 Wallet", image: coin98 },
    { id : 4, name: "DeFi Wallet", image: defi },
    { id : 5, name: "WalletConnect", image: wallet },
    { id : 6, name: "Bitget Wallet", image: bitget },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative rounded-lg shadow-lg w-1/2 bg-[#C5D2F7]">
        <div className="flex">
          <div className="px-4 border-r border-black w-1/3">
            <img src={logo} alt="logo" className="h-16" />
            <h2 className="text-xl font-bold mb-4">Connect your wallet</h2>
            <p className="mb-4">
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
                <h1 className='text-2xl font-bold my-3'>Available Wallets (6)</h1>
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

             <div className='content grid grid-cols-2 gap-4 p-4'>
                {wallets.map((wallet, index) => (
                <button key={index} onClick={() => handleWalletClick({
                    id: wallet.id,
                    name:wallet.name,
                    image:wallet.image
                })}>
                  <div className="p-5 border border-black rounded-xl bg-white flex items-center space-x-2">
                    <img
                      src={wallet.image}
                      alt={wallet.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <span>{wallet.name}</span>
                  </div>
                </button>
              ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWallet;
