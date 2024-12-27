import logoBCA from '../assets/bank-bca.png'
import logoBNI from '../assets/bank-bni.png'
import logoBRI from '../assets/bank-bri.png'
import logoMANDIRI from '../assets/bank-mandiri.png'
import { useNavigate } from 'react-router-dom' 


export default function PageBankDetails() {
  const navigate = useNavigate();

  const handleAddBankAccount = () => {
    navigate('/add-bank-account');
  };

  const bankDetails = [
  {
    id: 1,
    name: "BCA",
    logo: logoBCA,
    accountHolder: "Audi's Wallet",
    accountNumber: "1346802957",
  },
  {
    id: 2,
    name: "BNI",
    logo: logoBNI,
    accountHolder: "Audi's Wallet",
    accountNumber: "9083472615",
  },
  {
    id: 3,
    name: "BRI",
    logo: logoBRI,
    accountHolder: "Audi's Wallet",
    accountNumber: "47281659304",
  },
  {
    id: 4,
    name: "MANDIRI",
    logo: logoMANDIRI,
    accountHolder: "Audi's Wallet",
    accountNumber: "3561920478",
  },
];

  return (
    <div className="min-h-full">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold mb-3">Bank Details</h1>
        <div className="flex justify-center items-center mt-auto">
          <button
            onClick={handleAddBankAccount}
            className="bg-black text-white py-3 px-5 text-center rounded-xl font-semibold"
          >
            Add Bank Account
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bankDetails.map((bank) => (
          <div key={bank.id} className="rounded-xl p-4 border-[1px] border-black">
            <div className="flex mb-4">
              <div className="flex items-center space-x-4 w-full flex-start">
                <img
                  src={bank.logo}
                  alt={`${bank.name} Logo`}
                  className="w-20 h-20 rounded-full object-cover sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <div className="h-full border-l-2 border-black"></div>
                <div className="flex flex-col justify-between w-full">
                  <p className="text-xl font-bold text-gray-800 mb-3 sm:text-base lg:text-xl">{bank.name}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between font-semibold">
                      <span className='sm:text-sm lg:text-base'>Account Holder's Name</span>
                      <span className='sm:text-sm sm:text-end lg:text-base'>{bank.accountHolder}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span className='text-sm lg:text-base'>Account Number</span>
                      <span className='text-sm sm:text-end lg:text-base'>{bank.accountNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
