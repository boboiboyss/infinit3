import React, { useState, useEffect } from "react";
import iconLoading from "../../assets/icon-loading.png";
import iconSuccess from "../../assets/icon-success.png";
import metamask from '../../assets/metamaskwallet.png';
import okx from '../../assets/okxwallet.jpeg';
import coin98 from '../../assets/coin98.png';
import defi from '../../assets/defiwallet.png';
import wallet from '../../assets/walletconnect.png';
import bitget from '../../assets/bitget.png';
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const ModalSellAsset = ({ isOpen, onClose}) => {
  if (!isOpen) return null;

  const [isOpened, setIsOpened] = useState(false);
  const [transactionStep, setTransactionStep] = useState(1);
  const navigate = useNavigate();

   const wallets = [
    { id : 1, name: "Metamask", image: metamask, walletName : "Audi's Wallet", publicAddress : "0x12345678987654321" },
    { id : 2, name: "OKX Wallet", image: okx, walletName : "Audi's Wallet", publicAddress : "0x12345678987654321" },
    { id : 3, name: "Coin98 Wallet", image: coin98, walletName : "Audi's Wallet", publicAddress : "0x12345678987654321" },
    { id : 4, name: "DeFi Wallet", image: defi, walletName : "Audi's Wallet", publicAddress : "0x12345678987654321" },
    { id : 5, name: "WalletConnect", image: wallet, walletName : "Audi's Wallet", publicAddress : "0x12345678987654321" },
  ];

  useEffect(() => {
    if(transactionStep >= 1) {
        setTimeout(() => {
            setIsOpened(true);
        }, 500);
    }
  }, [transactionStep]);

  const handleNextTransaction = () => {
    setIsOpened(false); 
    setTransactionStep(transactionStep + 1);
  };

  const handleDone = () => {
    navigate('/')
    onClose()
  }

//   const handleSelectedWallet = (wallet) => {
//     setSelectedWallet(wallet);
//     setTransactionStep(transactionStep + 1);
//     onClose();
//   }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className={`relative rounded-lg shadow-lg bg-[#E096AA] ${transactionStep == 0 ? "p-6 w-11/12 sm:w-1/3" : "p-6 sm:p-8 lg:p-12  max-[390px]:w-11/12 max-[480px]:w-9/12 w-8/12 sm:w-2/4 md:w-[400px]" }`}>
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-black hover:text-gray-600 focus:outline-none"
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

    <div className="flex flex-col justify-center items-center gap-y-6">
      {transactionStep === 1 && (
        <>
          {isOpened ? (
            <img src={iconSuccess} alt="icon-success" className="h-18 w-[70px]" />
          ) : (
            <img src={iconLoading} alt="icon-loading" className="h-18 w-16" />
          )}
          <p className="text-xl font-bold">Sell Asset Complete</p>
          {isOpened ? (
            <>
              <p className="text-sm text-center">
                Your sale of 250 USDT from the Infinit3 smart contract is currently being processed. The transaction will be completed once the funds are successfully delivered to your account.
              </p>
              <div className="space-y-2 mt-12">
                <button onClick={handleDone} className="bg-black text-white p-4 text-center rounded-lg w-full text-sm px-14">
                  Complete
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-xl font-bold">Waiting for confirmation</p>
              <p className="text-sm text-center">
                You are about to sell 250 USDT from the Infinit3 smart contract.
              </p>
            </>
          )}
        </>
      )}
    </div>
  </div>
</div>

  );
};

export default ModalSellAsset;
