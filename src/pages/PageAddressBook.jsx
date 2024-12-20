import product from '../assets/product.jpeg'
import metamask from  '../assets/metamaskwallet.png';
import okx from '../assets/okxwallet.jpeg';
import coin98 from '../assets/coin98.png';
import defi from '../assets/defiwallet.png';
import wallet from '../assets/walletconnect.png';
import bitget from '../assets/bitget.png';

export default function PageAddressBook() {
  return (
    <div className="min-h-min">
      <h1 className="text-2xl font-bold mb-3">Address Book</h1>
      <h1 className="text-2xl font-bold mb-2">Allowlisted Wallets</h1>
      <p className="mb-2">
        Allowlisted wallets can invest using supported stablecoins and receive Infinit3 tokenized assets. When a new wallet is added, please allow up to 24 hours for it to be approved for use.
      </p>
        <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 border-[1px] border-black">
            <div className="flex mb-4">
            <div className="flex items-center space-x-4 w-full flex-start">
                
                <img
                src={metamask}
                alt="Product Icon"
                className="w-20 h-20 rounded-full"
                />
            
                <div className="h-full border-l-2 border-black"></div>

                <div className="flex flex-col justify-between w-full">
                <p className="text-xl font-bold text-gray-800 mb-3">Metamask</p>
                <div className="space-y-2">
                    <div className="flex justify-between">
                    <span className="font-semibold">Wallet Name</span>
                    <span>Audi's Wallet</span>
                    </div>
                    <div className="flex justify-between">
                    <span className="font-semibold">Public Address</span>
                    <span>0x12345678987654321</span>
                    </div>
                    <div className="flex justify-between">
                    <span className="font-semibold">Balance</span>
                    <span>0.045 ETH</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>

            <div className="rounded-xl p-4 border-[1px] border-black">
                <div className="flex mb-4">
                    <div className="flex items-center space-x-4 w-full flex-start">
                        
                    <img
                       src={okx}
                        alt="Product Icon"
                        className="w-20 h-20 rounded-full"
                        />
                    
                        <div className="h-full border-l-2 border-black"></div>

                        <div className="flex flex-col justify-between w-full">
                        <p className="text-xl font-bold text-gray-800 mb-3">OKX Wallet</p>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                            <span className="font-semibold">Wallet Name</span>
                            <span>Audi's Wallet</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Public Address</span>
                            <span>0x12345678987654321</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Balance</span>
                            <span>0.045 ETH</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl p-4 border-[1px] border-black">
                <div className="flex mb-4">
                    <div className="flex items-center space-x-4 w-full flex-start">
                        
                    <img
                        src={coin98}
                        alt="Product Icon"
                        className="w-20 h-20 rounded-full object-cover"
                        />
                    
                        <div className="h-full border-l-2 border-black"></div>

                        <div className="flex flex-col justify-between w-full">
                        <p className="text-xl font-bold text-gray-800 mb-3">Coin89 Wallet</p>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                            <span className="font-semibold">Wallet Name</span>
                            <span>Audi's Wallet</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Public Address</span>
                            <span>0x12345678987654321</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Balance</span>
                            <span>0.045 ETH</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl p-4 border-[1px] border-black">
                <div className="flex mb-4">
                    <div className="flex items-center space-x-4 w-full flex-start">
                        
                    <img
                        src={defi}
                        alt="Product Icon"
                        className="w-20 h-20 rounded-full"
                        />
                    
                        <div className="h-full border-l-2 border-black"></div>

                        <div className="flex flex-col justify-between w-full">
                        <p className="text-xl font-bold text-gray-800 mb-3">DeFi Wallet</p>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                            <span className="font-semibold">Wallet Name</span>
                            <span>Audi's Wallet</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Public Address</span>
                            <span>0x12345678987654321</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Balance</span>
                            <span>0.045 ETH</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
