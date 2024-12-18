import Headers from "../components/Headers";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import React, {useState} from "react";
import product from '../assets/product.jpeg'
import ModalTransaction from "../components/modal/ModalTransaction";
import iconSuccess from './../assets/icon-success.png';


function PageProductBuy() {
    const [isUser, setIsUser] = useState(false)
    const [btnApprove, setBtnApprove] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const navigate = useNavigate();
    const handleUser = () => {
        setBtnApprove(true);
        setIsUser(true);
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const handleDone = (event) => {
        event.preventDefault();
        navigate('/home')
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
                            isUser ? (
                                <p>To ensure compaliane with US laws and regulations, your will recevie your transferable USDY tokens 40-50 days aftar depositing funds and can only redeem in USD to a non-US bank account.</p>
                            ) : (
                                 <p>To comply with U.S. laws and regulations, transferable USDY tokens will be issued 40-50 days after the deposit of funds. Redemptions can only be processed in USD to a non-U.S. bank account.</p>
                            )
                         }
                         <ol className="list-decimal pl-4 mt-3 ml-1">
                            <li className="text-lg font-semibold">
                                Deposit Funds
                            </li>
                            <p>You will begin earning interest as soon as your deposit is processed, typically within 2-3 business days.</p>
                            <li className="text-lg font-semibold">
                                Get Your Certicate
                            </li>
                            <p>Within a few days, you will receive a Token Certificate, granting you the entitlement  to claim your tokens as soon as we are authorized to mint them.</p>
                            <li className="text-lg font-semibold">
                                Receive Your Tokens
                            </li>
                            <p>After the required holding period has elapsed, your tokens will be credited to your designated wallet. At that point, you will have the freedom to transfer your tokens to any eligible recipient.</p>
                            <li className="text-lg font-semibold">
                                Redeen to Your Bank Account
                            </li>
                            <p>Kindly submit a redemption request and provide our bank account details. We will process the transfer in USD directly to your account.</p>
                         </ol>

                    </div>
                </div>

    
                <div className="right w-1/2 h-screen bg-[#C5D2F7] px-12 py-20">
                  {
                    isDone ? (
                        <div>
                            <h1 className="text-2xl font-bold mb-20">Thank you for your deposit!</h1>

                            <img src={iconSuccess} alt="icon-success" className="w-28 h-28 m-auto" /> 

                            <p className="mt-20">You should receive an email confirming your deposit shortly.You will also receive within 2-3 Business Days. If you do not hear from us within 5 Business Days, please contact us at support@Infinit3.finance.</p>

                            <button onClick={handleDone} className="bg-black text-white p-4 text-center rounded-lg w-full text-sm mt-5">Done</button>
                        </div>
                    ) : (
                    <div>
                       <div className="heading">
                        <h1 className="text-lg font-semibold">Buy Asset With USDT</h1>
                    </div>
                    <p>Please connect a wallet associated with your account to buy Asset.</p>

                    {isUser && 
                        <div className="w-full bg-white p-3 rounded-lg my-6">
                            <div className="flex items-center space-x-3">
                                <img src={product} alt="coin" className="w-8 h-8 rounded-full" />
                                <div className="flex flex-col gap-y-1">
                                    <span className="font-semibold">Audi Wallet</span>
                                    <span>0x12345678987654321</span>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="w-full bg-white p-3 rounded-lg my-6">
                        <div className="flex items-center space-x-3 justify-between">
                           <div className="left">
                              <div className="space-y-3">
                                 <h1 className=" text-3xl font-bold">500</h1>
                                 <p>Minimum Amount : 500 USDT</p>
                                 <p>1 Asset = $1.123456789</p>
                              </div>
                           </div>
                           <div className="right">
                               <div className="flex items-center space-x-3">
                                  <img src={product} alt="coin" className="w-12 h-12 rounded-full" />
                                  <h1 className="text-2xl font-bold">USDT</h1>
                               </div>
                            <div className="mt-2">
                                <span>Balance: 600.00 Max</span>
                            </div>
                           </div>
                        </div>
                    </div>
                    {btnApprove ? (
                        <button onClick={openModal} className="text-white bg-black text-center p-5 w-full rounded-xl">Approve use of USDT</button>
                    ) : (
                        <button onClick={handleUser} className="text-white bg-black text-center p-5 w-full rounded-xl">Connect Wallet</button>
                    )}
                    </div>
                    )
                  }
                </div>
            </div>
            <ModalTransaction isOpen={isOpenModal} onClose={closeModal} isDone={isDone} setIsDone={setIsDone} />
        </div>
    );
}

export default PageProductBuy;
