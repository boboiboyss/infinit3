import Headers from "../components/Headers";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import React, {useState} from "react";
import product from '../assets/product.jpeg'
import iconSuccess from './../assets/icon-success.png';
import ModalWithdraw from "../components/modal/ModalWithdraw";

function PageWithdraw() {
    const [selectedWallet, setSelectedWallet] = useState(null)
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [no, setNo] = useState(0);
    const [activeButton, setActiveButton] = useState(25);
    const total = 500;

    const handleClick = (percentage) => {
        setActiveButton(percentage);
    };

    const navigate = useNavigate();

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const openModal2 = () => {
        setNo(no + 1);
        setIsOpenModal(true)
    }


    return (
        <div className="min-h-screen min-w-full">
            <div className="flex items-center justify-between w-full h-full">
                <div className="left w-1/2 h-screen bg-white p-8">
                  <Link to={'/login'}>
                     <img src={logo} alt="logo" className="h-16" />
                  </Link>
                   <div className="flex items-center space-x-3 mb-4">
                      <img src={product} alt="coin" className="w-16 h-16 rounded-full" />
                      <div className="flex flex-col gap-y-1">
                         <span className="font-semibold">Asset</span>
                         <span>Ondo US Dollar Yield Token</span>
                      </div>
                   </div>

                    <div>
                        <h1 className="text-lg font-bold mb-4">How it Works</h1>
                         {
                            selectedWallet ? (
                                <p className="text-justify">To ensure compaliane with US laws and regulations, your will recevie your transferable USDY tokens 40-50 days aftar depositing funds and can only redeem in USD to a non-US bank account.</p>
                            ) : (
                                 <p className="text-justify">To comply with U.S. laws and regulations, transferable USDY tokens will be issued 40-50 days after the deposit of funds. Redemptions can only be processed in USD to a non-U.S. bank account.</p>
                            )
                         }
                         <ol className="list-decimal pl-4 mt-3 ml-1">
                            <li className="text-lg font-semibold">
                                Deposit Funds
                            </li>
                            <p className="text-justify mb-2">You will begin earning interest as soon as your deposit is processed, typically within 2-3 business days.</p>
                            <li className="text-lg font-semibold">
                                Get Your Certicate
                            </li>
                            <p className="text-justify mb-2">Within a few days, you will receive a Token Certificate, granting you the entitlement  to claim your tokens as soon as we are authorized to mint them.</p>
                            <li className="text-lg font-semibold">
                                Receive Your Tokens
                            </li>
                            <p className="text-justify mb-2">After the required holding period has elapsed, your tokens will be credited to your designated wallet. At that point, you will have the freedom to transfer your tokens to any eligible recipient.</p>
                            <li className="text-lg font-semibold">
                                Redeen to Your Bank Account
                            </li>
                            <p className="text-justify mb-2">Kindly submit a redemption request and provide our bank account details. We will process the transfer in USD directly to your account.</p>
                         </ol>

                    </div>
                </div>

    
                <div className="right w-1/2 bg-[#C5D2F7] p-12 flex flex-col h-screen">
                  
                    <div>
                       <div className="heading">
                        <h1 className="text-lg font-semibold">Withdraw Funds</h1>
                    </div>
                    <p>Please connect a wallet associated with your account to withdraw funds.</p>

                    <div className="w-full bg-white px-3 py-5 rounded-lg my-6">
                        <div className="flex items-center space-x-3 justify-between">
                           <div className="left">
                              <div className="">
                                <p>Withdrawable</p>
                                 <p className=" mt-0">Funds</p>
                              </div>
                           </div>
                           <div className="right">
                               <div className="flex items-center space-x-3">
                                  <h1 className="text-3xl font-bold">{total}</h1>
                                  <p className="text-xl">USDT</p>
                               </div>
                           </div>
                        </div>
                    </div>

                    <div className="w-full bg-white px-3 py-5 rounded-lg my-6">
                        <div className="flex items-center space-x-3 justify-between">
                           <div className="left">
                                <p>Amount</p>
                                <p>to</p>
                                <p>Withdraw</p>
                           </div>
                           <div className="right">
                               <div className="flex items-center space-x-3">
                                  <h1 className="text-3xl font-bold">{(total * activeButton) / 100}</h1>
                                  <p className="text-xl">USDT</p>
                               </div>
                           </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 justify-end mb-5">
                    {[25, 50, 75, 100].map((percentage) => (
                        <div
                        key={percentage}
                        className={`p-3 rounded-lg cursor-pointer ${
                            activeButton === percentage
                            ? "bg-white text-black"
                            : "bg-black text-white"
                        }`}
                        onClick={() => handleClick(percentage)}
                        >
                        <p>{percentage}%</p>
                        </div>
                    ))}
                    </div>

                       {selectedWallet && 
                        <div className="w-full bg-white p-3 rounded-lg my-6">
                            <div className="flex items-center space-x-4">
                                <img src={selectedWallet?.image} alt="coin" className="w-10 h-10 rounded-full object-cover" />
                                <div className="flex flex-col gap-y-1">
                                    <span className="font-semibold">{selectedWallet?.walletName}</span>
                                    <span>{selectedWallet?.publicAddress}</span>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='flex justify-center items-center mt-9'>
                        {selectedWallet ? (
                            <button onClick={openModal2} className="text-white bg-black text-center p-5 w-full rounded-xl mt-7">Withdraw</button>
                        ) : (
                            <button onClick={openModal} className="text-white bg-black text-center p-5 w-full rounded-xl mt-7">Connect Wallet</button>
                        )}
                    </div>

                    </div>
                    
                  
                </div>
            </div>
            <ModalWithdraw isOpen={isOpenModal} onClose={closeModal} isDone={isDone} setIsDone={setIsDone} setSelectedWallet={setSelectedWallet} no={no} />
        </div>
    );
}

export default PageWithdraw;
