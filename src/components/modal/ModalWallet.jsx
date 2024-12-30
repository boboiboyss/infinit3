import React, { useEffect, useState } from 'react';
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
    setSelectedWallet(wallet);
    onClose();
  };

  const wallets = [
    { id: 1, name: "Metamask", image: metamask },
    { id: 2, name: "OKX Wallet", image: okx },
    { id: 3, name: "Coin98 Wallet", image: coin98 },
    { id: 4, name: "DeFi Wallet", image: defi },
    { id: 5, name: "Wallet Connect", image: wallet },
    { id: 6, name: "Bitget Wallet", image: bitget },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#C5D2F7] max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="px-4 py-6 border-b md:border-b-0 md:border-r border-black w-full md:w-1/3">
            <img src={logo} alt="logo" className="h-12 mb-4 mx-auto md:mx-0" />
            <h2 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">
              Connect your wallet
            </h2>
            <p className="mb-4 text-sm md:text-base text-justify">
              Connect your wallet to access Web3. Choose your preferred wallet from the options below to get started.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center space-x-2">
                <p className="text-sm md:text-base">I don't have a wallet</p>
                <IoMdInformationCircleOutline className="h-5 w-5 md:h-6 md:w-6 rotate-180" />
              </div>
            </div>
          </div>

          {/* Wallet List */}
          <div className="w-full md:w-2/3 px-4 py-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg md:text-xl font-bold">Available Wallets ({wallets.length})</h1>
              <button
                onClick={onClose}
                className="text-black hover:text-gray-600 focus:outline-none absolute right-4 top-4 md:right-6 md:top-6"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {wallets.map((wallet, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleWalletClick({
                      id: wallet.id,
                      name: wallet.name,
                      image: wallet.image,
                    })
                  }
                >
                  <div className="p-4 border border-black rounded-xl bg-white flex items-center space-x-4 hover:shadow-lg transition">
                    <img
                      src={wallet.image}
                      alt={wallet.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full"
                    />
                    <span className="text-sm md:text-base font-semibold">
                      {wallet.name}
                    </span>
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
