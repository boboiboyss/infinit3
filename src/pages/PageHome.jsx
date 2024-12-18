import React, {useEffect, useState}from 'react';
import ModalWallet from '../components/modal/ModalWallet';
import ModalWalletConnected from '../components/modal/ModalWalletConnected';
import { useNavigate } from 'react-router-dom';
import product from '../assets/product.jpeg'
import ModalKYC from '../components/modal/ModalKCY';
import ModalTerms from '../components/modal/ModalTerms';

function PageHome() {
const [isModal, setIsmodal] = useState(false);
const [isModalWalletConnectedOpen, setIsModalWalletConnectedOpen] = useState(false);
const [isModalKYC, setIsModalKYC] = useState(false)
const [isModalTerms, setIsModalTerms] = useState(false)
const navigate = useNavigate();

 useEffect(() => {
    setIsmodal(true);

 }, [])

 const closeModal = () => {
    setIsmodal(false)
 }

 const handleProductBuy = (event) => {
    event.preventDefault();
    navigate('/product-buy');
}

  const openModalWalletConnected = () => setIsModalWalletConnectedOpen(true);
  const closeModalWalletConnected = () => setIsModalWalletConnectedOpen(false);
  const closeModalKYC = () => setIsModalKYC(false)
  const closeModalTerms = () => setIsModalTerms(false)

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-3">Product</h1>
        <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 border-[1px] border-black">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                        <img
                          src={product}
                          alt="Product Icon"
                          className="w-20 h-20 rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-gray-800">Insights</p>
                            <p>Ondo US Dollar Yield Token</p>
                        </div>
                    </div>
                    <button  onClick={handleProductBuy} className="bg-black text-white px-4 py-2 rounded-md">
                        Invest
                    </button>
                </div>
                <hr className='border-[1px] border-black my-4'/>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className='font-bold'>Status:</span>
                        <span>No Access</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Eligibility:</span>
                        <span>Non-US Individuals & Organizations</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Minimum Purchase:</span>
                        <span>500 USDC</span>
                    </div>
                </div>
            </div>
           <div className="rounded-xl p-4 border-[1px] border-black">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                        <img
                          src={product}
                          alt="Product Icon"
                          className="w-20 h-20 rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-gray-800">Insights</p>
                            <p>Ondo US Dollar Yield Token</p>
                        </div>
                    </div>
                    <button onClick={handleProductBuy} className="bg-black text-white px-4 py-2 rounded-md">
                        Invest
                    </button>
                </div>
                <hr className='border-[1px] border-black my-4'/>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className='font-bold'>Status:</span>
                        <span>No Access</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Eligibility:</span>
                        <span>Non-US Individuals & Organizations</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Minimum Purchase:</span>
                        <span>500 USDC</span>
                    </div>
                </div>
            </div>
              <div className="rounded-xl p-4 border-[1px] border-black">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                        <img
                          src={product}
                          alt="Product Icon"
                          className="w-20 h-20 rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-gray-800">Insights</p>
                            <p>Ondo US Dollar Yield Token</p>
                        </div>
                    </div>
                    <button onClick={handleProductBuy} className="bg-black text-white px-4 py-2 rounded-md">
                        Invest
                    </button>
                </div>
                <hr className='border-[1px] border-black my-4'/>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className='font-bold'>Status:</span>
                        <span>No Access</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Eligibility:</span>
                        <span>Non-US Individuals & Organizations</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Minimum Purchase:</span>
                        <span>500 USDC</span>
                    </div>
                </div>
            </div>
            <div className="rounded-xl p-4 border-[1px] border-black">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                        <img
                          src={product}
                          alt="Product Icon"
                          className="w-20 h-20 rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-gray-800">Insights</p>
                            <p>Ondo US Dollar Yield Token</p>
                        </div>
                    </div>
                    <button onClick={handleProductBuy} className="bg-black text-white px-4 py-2 rounded-md">
                        Invest
                    </button>
                </div>
                <hr className='border-[1px] border-black my-4'/>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className='font-bold'>Status:</span>
                        <span>No Access</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Eligibility:</span>
                        <span>Non-US Individuals & Organizations</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='font-bold'>Minimum Purchase:</span>
                        <span>500 USDC</span>
                    </div>
                </div>
            </div>
        </div>

        <ModalWallet isOpen={isModal} onClose={closeModal} openWalletConnected={openModalWalletConnected}/>

        <ModalWalletConnected isOpen={isModalWalletConnectedOpen} onClose={closeModalWalletConnected} openKYC={() => setIsModalKYC(true)} />

        <ModalKYC isOpen={isModalKYC} onClose={closeModalKYC} openModalTerms={setIsModalTerms} />
        <ModalTerms isOpen={isModalTerms} onClose={closeModalTerms} />
        
    </div>
  );
}

export default PageHome;

