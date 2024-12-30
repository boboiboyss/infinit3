import product from '../assets/product.jpeg'
import metamask from  '../assets/metamaskwallet.png';
import React, {useState} from  'react'
import okx from '../assets/okxwallet.jpeg';
import coin98 from '../assets/coin98.png';
import defi from '../assets/defiwallet.png';
import wallet from '../assets/walletconnect.png';
import bitget from '../assets/bitget.png';
import ModalAddressBook from '../components/modal/ModalAddressBook';
import { FaUsersGear } from 'react-icons/fa6';

export default function PageAddressBook() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const walletData = [
  {
    id: 1,
    name: "Metamask",
    image: metamask,
    walletName: "Audi's Wallet",
    publicAddress: "0x12345678987654321",
    balance: "0.045 ETH",
  },
  {
    id: 2,
    name: "OKX Wallet",
    image: okx,
    walletName: "Audi's Wallet",
    publicAddress: "0x12345678987654321",
    balance: "0.045 ETH",
  },
  {
    id: 3,
    name: "Coin89 Wallet",
    image: coin98,
    walletName: "Audi's Wallet",
    publicAddress: "0x12345678987654321",
    balance: "0.045 ETH",
  },
  {
    id: 4,
    name: "DeFi Wallet",
    image: defi,
    walletName: "Audi's Wallet",
    publicAddress: "0x12345678987654321",
    balance: "0.045 ETH",
  },
];

  return (
    <div className="min-h-min">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold mb-3">Address Book</h1>
        <button
          onClick={openModal}
          className="bg-black text-white py-3 px-5 text-center rounded-xl font-semibold"
        >
          Add Wallet
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {walletData.map((wallet) => (
          <div key={wallet.id} className="rounded-xl p-4 border-[1px] border-black">
            <div className="flex mb-4">
              <div className="flex items-center space-x-4 w-full flex-start">
                <img
                  src={wallet.image}
                  alt={`${wallet.name} Icon`}
                  className="w-14 h-14 rounded-full md:w-16 md:h-16 object-cover xl:w-20 xl:h-20"
                />
                <div className="h-full border-l-2 border-black"></div>
                <div className="flex flex-col justify-between w-full">
                  <p className="text-base md:text-lg xl:text-xl font-bold text-gray-800 mb-3">{wallet.name}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm md:text-base font-semibold">Wallet Name</span>
                      <span className='text-sm md:text-base'>{wallet.walletName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-sm md:text-base">Public Address</span>
                      <span className='text-sm md:text-base'>{wallet.publicAddress}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-sm md:text-base">Balance</span>
                      <span className='text-sm md:text-base'>{wallet.balance}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModalAddressBook isOpen={isOpenModal} onClose={closeModal} />
    </div>
  );
}

