import React, {useEffect, useState}from 'react';
import ModalWallet from '../components/modal/ModalWallet';
import ModalWalletConnected from '../components/modal/ModalWalletConnected';
import { useNavigate } from 'react-router-dom';
import product from '../assets/product.jpeg'
import ModalKYC from '../components/modal/ModalKCY';
import ModalTerms from '../components/modal/ModalTerms';
import ModalTermsWD from '../components/modal/ModalTermsWD';

function PageProduct() {
const [isModal, setIsmodal] = useState(false);
const [isModalWalletConnectedOpen, setIsModalWalletConnectedOpen] = useState(false);
const [isModalKYC, setIsModalKYC] = useState(false)
const [isModalTerms, setIsModalTerms] = useState(false)
const [selectedWallet, setSelectedWallet] = useState(null);
const [isModalTermsWD, setIsModalTermsWD] = useState(false)
const [btnWD, setBtnWD] = useState(false);

const navigate = useNavigate();

 useEffect(() => {
    setTimeout(() => {
        setIsmodal(true);
    }, 1000)

 }, [])

 const closeModal = () => {
    setIsmodal(false)
 }

 const handleProductBuy = (event) => {
    event.preventDefault();
    navigate('/buy-asset');
}

const handleDetailProduct = () => {
    navigate('/product/1')
}


  const openModalTermsWD = () => setIsModalTermsWD(true);
  const openModalWalletConnected = () => setIsModalWalletConnectedOpen(true);
  const closeModalWalletConnected = () => setIsModalWalletConnectedOpen(false);
  const closeModalKYC = () => setIsModalKYC(false)
  const closeModalTerms = () => setIsModalTerms(false)
  const closeModalTermsWD = () => setIsModalTermsWD(false)

  const products = [
  {
    id: 1,
    name: "Insights",
    description: "Ondo US Dollar Yield Token",
    status: "No Access",
    eligibility: "Non-US Individuals & Organizations",
    minimumPurchase: "500 USDC",
    image: product,
  },
  {
    id: 2,
    name: "Insights",
    description: "Ondo US Dollar Yield Token",
    status: "No Access",
    eligibility: "Non-US Individuals & Organizations",
    minimumPurchase: "500 USDC",
    image: product,
  },
  {
    id: 3,
    name: "Insights",
    description: "Ondo US Dollar Yield Token",
    status: "No Access",
    eligibility: "Non-US Individuals & Organizations",
    minimumPurchase: "500 USDC",
    image: product,
  },
  {
    id: 4,
    name: "Insights",
    description: "Ondo US Dollar Yield Token",
    status: "No Access",
    eligibility: "Non-US Individuals & Organizations",
    minimumPurchase: "500 USDC",
    image: product,
  },
   {
    id: 5,
    name: "Insights",
    description: "Ondo US Dollar Yield Token",
    status: "No Access",
    eligibility: "Non-US Individuals & Organizations",
    minimumPurchase: "500 USDC",
    image: product,
  },
   {
    id: 6,
    name: "Insights",
    description: "Ondo US Dollar Yield Token",
    status: "No Access",
    eligibility: "Non-US Individuals & Organizations",
    minimumPurchase: "500 USDC",
    image: product,
  },
];
  

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-3">Product</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {products.map((product) => (
        <div
          key={product.id}
          className="rounded-xl p-4 border-[1px] border-black"
        >
          <div className="flex justify-between items-center mb-4">
            <div onClick={handleDetailProduct} className="flex items-center space-x-4 hover:cursor-pointer">
              <img
                src={product.image}
                alt="Product Icon"
                className="w-20 h-20 rounded-full md:w-16 md:h-16"
              />
              <div className="flex flex-col">
                <p className="text-xl md:text-base font-bold text-gray-800">
                  {product.name}
                </p>
                <p className='md:text-sm'>{product.description}</p>
              </div>
            </div>
            <div className="space-x-0 min-[620px]:space-x-1 space-y-1 ml-7 sm:space-x-3 md:space-x-0">
              <button
                onClick={handleProductBuy}
                className="bg-black text-white px-4 py-2 rounded-md font-semibold"
              >
                Invest
              </button>

              {btnWD && (
                <button
                  onClick={openModalTermsWD}
                  className="bg-black text-white px-4 py-2 rounded-md font-semibold"
                >
                  Withdraw
                </button>
              )}
            </div>
          </div>
          <hr className="border-[1px] border-black my-4" />
          <div className="space-y-2 md:text-sm">
            <div className="flex justify-between">
              <span className="font-bold">Status</span>
              <span>{product.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Eligibility</span>
              <span>{product.eligibility}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Minimum Purchase</span>
              <span>{product.minimumPurchase}</span>
            </div>
          </div>
        </div>
      ))}
        </div>

        <ModalWallet isOpen={isModal} onClose={closeModal} openWalletConnected={openModalWalletConnected} setSelectedWallet={setSelectedWallet}/>
        <ModalWalletConnected isOpen={isModalWalletConnectedOpen} onClose={closeModalWalletConnected} openKYC={() => setIsModalKYC(true)} wallet={selectedWallet} />
        <ModalKYC isOpen={isModalKYC} onClose={closeModalKYC} openModalTerms={setIsModalTerms} />
        <ModalTerms isOpen={isModalTerms} onClose={closeModalTerms} setBtnWD={setBtnWD} />
        <ModalTermsWD isOpen={isModalTermsWD} onClose={closeModalTermsWD} />
        
    </div>
  );
}

export default PageProduct;

