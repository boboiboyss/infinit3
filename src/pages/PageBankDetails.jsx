import product from '../assets/product.jpeg'
import logoBCA from '../assets/bank-bca.png'
import logoBNI from '../assets/bank-bni.png'
import logoBRI from '../assets/bank-bri.png'
import logoMANDIRI from '../assets/bank-mandiri.png' 

export default function PageBankDetails(){
    return (
        <div className="min-h-full">
          <h1 className="text-2xl font-bold mb-3">Bank Details</h1>
           <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 border-[1px] border-black">
            <div className="flex mb-4">
            <div className="flex items-center space-x-4 w-full flex-start">
                
                <img
                src={logoBCA}
                alt="Product Icon"
                className="w-20 h-20 rounded-full"
                />
            
                <div className="h-full border-l-2 border-black"></div>

                <div className="flex flex-col justify-between w-full">
                <p className="text-xl font-bold text-gray-800 mb-3">BCA</p>
                <div className="space-y-2">
                    <div className="flex justify-between">
                    <span className="font-semibold">Account Holder's Name</span>
                    <span>Audi's Wallet</span>
                    </div>
                    <div className="flex justify-between">
                    <span className="font-semibold">Account Number</span>
                    <span>1346802957</span>
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
                       src={logoBNI}
                        alt="Product Icon"
                        className="w-20 h-20 rounded-full"
                        />
                    
                        <div className="h-full border-l-2 border-black"></div>

                        <div className="flex flex-col justify-between w-full">
                        <p className="text-xl font-bold text-gray-800 mb-3">BNI</p>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                            <span className="font-semibold">Account Holder's Name</span>
                            <span>Audi's Wallet</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Account Number</span>
                            <span>9083472615</span>
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
                        src={logoBRI}
                        alt="Product Icon"
                        className="w-20 h-20"
                        />
                    
                        <div className="h-full border-l-2 border-black"></div>

                        <div className="flex flex-col justify-between w-full">
                        <p className="text-xl font-bold text-gray-800 mb-3">BRI</p>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                            <span className="font-semibold">Account Holder's Name</span>
                            <span>Audi's Wallet</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Account Number</span>
                            <span>47281659304</span>
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
                        src={logoMANDIRI}
                        alt="Product Icon"
                        className="w-20 h-20 rounded-full"
                        />
                    
                        <div className="h-full border-l-2 border-black"></div>

                        <div className="flex flex-col justify-between w-full">
                        <p className="text-xl font-bold text-gray-800 mb-3">MANDIRI</p>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                            <span className="font-semibold">Account Holder's Name</span>
                            <span>Audi's Wallet</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-semibold">Account Number</span>
                            <span>3561920478</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}