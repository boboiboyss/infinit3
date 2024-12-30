import Headers from "../components/Headers";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import React, {useState} from "react";
import product from '../assets/product.jpeg'
import ModalTransaction from "../components/modal/ModalTransaction";
import iconSuccess from './../assets/icon-success.png';


function PageProductBuy() {
    const [selectedWallet, setSelectedWallet] = useState(null)
    // const [btnApprove, setBtnApprove] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [no, setNo] = useState(0);

    const navigate = useNavigate();

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const handleDone = (event) => {
        event.preventDefault();
        navigate('/')
    }

    const openModal2 = () => {
        setNo(no + 1);
        setIsOpenModal(true)
    }


    return (
        <div className="min-h-screen min-w-full bg-gray-100">
  <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
    {/* Left Section */}
    <div className="left w-full md:w-1/2 h-auto md:h-screen bg-white p-4 md:p-8">
      <Link to="/">
        <img src={logo} alt="logo" className="h-12 md:h-16" />
      </Link>
      <div className="flex items-center space-x-3 mb-4">
        <img src={product} alt="coin" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
        <div className="flex flex-col gap-y-1">
          <span className="font-semibold text-sm md:text-base">Asset</span>
          <span className="text-sm">Ondo US Dollar Yield Token</span>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-bold mb-4">How it Works</h1>
        {selectedWallet ? (
          <p className="text-justify text-sm md:text-base">
            To ensure compliance with US laws and regulations, you will receive your transferable USDY tokens 40-50 days
            after depositing funds and can only redeem in USD to a non-US bank account.
          </p>
        ) : (
          <p className="text-justify text-sm md:text-base">
            To comply with U.S. laws and regulations, transferable USDY tokens will be issued 40-50 days after the deposit
            of funds. Redemptions can only be processed in USD to a non-U.S. bank account.
          </p>
        )}
        <ol className="list-decimal pl-4 mt-3 ml-1 space-y-2 text-sm md:text-base">
          <li className="font-semibold">Deposit Funds</li>
          <p>You will begin earning interest as soon as your deposit is processed, typically within 2-3 business days.</p>
          <li className="font-semibold">Get Your Certificate</li>
          <p>
            Within a few days, you will receive a Token Certificate, granting you the entitlement to claim your tokens as
            soon as we are authorized to mint them.
          </p>
          <li className="font-semibold">Receive Your Tokens</li>
          <p>
            After the required holding period has elapsed, your tokens will be credited to your designated wallet. At that
            point, you will have the freedom to transfer your tokens to any eligible recipient.
          </p>
          <li className="font-semibold">Redeem to Your Bank Account</li>
          <p>
            Kindly submit a redemption request and provide your bank account details. We will process the transfer in USD
            directly to your account.
          </p>
        </ol>
      </div>
    </div>

    {/* Right Section */}
    <div className="right w-full md:w-1/2 h-auto md:h-screen bg-[#C5D2F7] px-6 py-8 md:px-12 md:py-20">
      {isDone ? (
        <div>
          <h1 className="text-2xl font-bold mb-8 md:mb-20">Thank you for your deposit!</h1>
          <img src={iconSuccess} alt="icon-success" className="w-20 h-20 md:w-28 md:h-28 mx-auto" />
          <p className="mt-10 md:mt-20 text-justify text-sm md:text-base">
            You should receive an email confirming your deposit shortly. You will also receive within 2-3 Business Days. If
            you do not hear from us within 5 Business Days, please contact us at support@Infinit3.finance.
          </p>
          <button
            onClick={handleDone}
            className="bg-black text-white p-3 md:p-4 text-center rounded-lg w-full text-sm mt-5 font-semibold"
          >
            Done
          </button>
        </div>
      ) : (
        <div>
          <div className="heading">
            <h1 className="text-lg md:text-xl font-semibold">Buy Asset With USDT</h1>
          </div>
          <p className="text-sm md:text-base">Please connect a wallet associated with your account to buy Asset.</p>
          {selectedWallet && (
            <div className="w-full bg-white p-3 rounded-lg my-6">
              <div className="flex items-center space-x-4">
                <img src={selectedWallet?.image} alt="coin" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold">{selectedWallet?.walletName}</span>
                  <span className="text-sm">{selectedWallet?.publicAddress}</span>
                </div>
              </div>
            </div>
          )}
          <div className="w-full bg-white p-3 rounded-lg my-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-between">
              <div className="left space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">500</h1>
                <p className="text-sm">Minimum Amount: 500 USDT</p>
                <p className="text-sm">1 Asset = $1.123456789</p>
              </div>
              <div className="right space-y-2">
                <div className="flex items-center space-x-3">
                  <img src={product} alt="coin" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
                  <h1 className="text-xl md:text-2xl font-bold">USDT</h1>
                </div>
                <div className="mt-2 text-sm">
                  <span>Balance: 600.00 Max</span>
                </div>
              </div>
            </div>
          </div>
          {selectedWallet ? (
            <button
              onClick={openModal2}
              className="text-white bg-black text-center p-4 md:p-5 w-full rounded-xl font-semibold"
            >
              Approve use of USDT
            </button>
          ) : (
            <button
              onClick={openModal}
              className="text-white bg-black text-center p-4 md:p-5 w-full rounded-xl font-semibold"
            >
              Connect Wallet
            </button>
          )}
        </div>
      )}
    </div>
  </div>
  <ModalTransaction
    isOpen={isOpenModal}
    onClose={closeModal}
    isDone={isDone}
    setIsDone={setIsDone}
    setSelectedWallet={setSelectedWallet}
    no={no}
  />
</div>

    );
}

export default PageProductBuy;
