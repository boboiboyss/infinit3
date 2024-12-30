import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import globe from '../../assets/globe.png'
import customer from '../../assets/customer.png';
import iconGlobe from '../../assets/globe.png';
import iconHibernate from '../../assets/icon-hibernate.png';
import iconLegal from '../../assets/icon-legal.png'
import iconTax from '../../assets/icon-tax.png'
import iconVerified from '../../assets/icon-verified.png'
import iconDocument from '../../assets/icon-documents.png'
import iconToken from '../../assets/icon-token.png'
import iconShield from '../../assets/icon-shield.png'
import iconProtected from '../../assets/icon-protected.png'
import iconLaw from '../../assets/icon-laws.png'
import iconWarning from '../../assets/icon-warning.png'
import iconIdCard from '../../assets/icon-idcard.png'
import iconWallet from '../../assets/icon-wallet.png'
import { useNavigate } from 'react-router-dom';

const ModalTermsWD = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const [action, setAction] = useState('modalTerms1');
  const [cek, setCek] = useState(false);
  
  const nextModalTerms2 = () => setAction('modalTerms2');
  const nextModalTerms3 = () => setAction('modalTerms3');

  const handleCheckboxChange = (event) => {
    setCek(event.target.checked);
  };

  const navigate = useNavigate();
  const linkPageWD = () => {
    navigate('/withdraw');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative rounded-xl shadow-lg w-[90%] max-w-[500px] lg:max-w-[50%] bg-[#C5D2F7]">
        <div className="flex flex-col lg:flex-row">
          <div className="px-4 py-6 border-b lg:border-r lg:border-b-0 border-black lg:w-1/3">
            <img src={logo} alt="logo" className="h-16" />
            <h1 className="text-xl font-bold mb-4 text-center lg:text-left">Terms & Conditions</h1>
            <p className="mb-4 text-center lg:text-left">
              {action === "modalTerms2" 
                ? "Withdrawal Limits and Thresholds"
                : action === "modalTerms3" 
                ? "Agreement Confirmation"
                : action === "modalTerms4" 
                ? "Technology and Blockchain Security"
                : action === "modalTerms5" 
                ? "Risks and Disclaimers"
                : action === "modalTerms6" 
                ? "Agreement Confirmation"
                : "Identity Verification"}
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="content p-2 m:p-8 h-full flex flex-col">
              {
                action === "modalTerms1" && (
                  <div className="flex flex-col h-full text-sm md:text-base">
                    <p className="mb-4 text-justify">Verifying a user's identity is critical to ensure that withdrawals are secure, compliant with regulations, and processed without errors</p>
                    <div className="flex items-center mb-3 space-x-3">
                      <img src={iconIdCard} alt="icon-idcard" className="w-9 h-9" />
                      <span>Users are required to complete Know Your Customer (KYC) processes by submitting valid government-issued identification and proof of address (e.g., utility bill, lease agreement).</span>
                    </div>
                    <div className="flex items-center mb-3 space-x-3">
                      <img src={iconWarning} alt="icon-warning" className="w-9 h-9" />
                      <span>As part of Anti-Money Laundering (AML) protocols, all withdrawal requests are monitored and cross-checked for suspicious activity or compliance violations. If flagged, such requests may be temporarily paused or denied.</span>
                    </div>
                    <div className="flex justify-center items-center mt-auto">
                      <button onClick={nextModalTerms2} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm font-semibold">Continue</button>
                    </div>
                  </div>
                )
              }
              {
                action === "modalTerms2" && (
                  <div className="flex flex-col h-full">
                    <p className="mb-4 text-justify">Platforms enforce limits to maintain security and operational efficiency while ensuring compliance with legal and financial regulations.</p>
                    <div className="flex items-center mb-3 space-x-3">
                      <img src={iconWallet} alt="icon-wallet" className="w-9 h-9" />
                      <span>A daily, weekly, or monthly cap may be imposed on withdrawal amounts. For example, a platform might allow withdrawals up to $50,000 per month.</span>
                    </div>
                    <div className="flex items-center mb-3 space-x-3">
                      <img src={iconProtected} alt="icon-protected" className="w-9 h-9" />
                      <span>For users in higher verification tiers, limits may be increased to accommodate larger transactions, provided they meet additional requirements. These limits protect users and platforms from potential fraud.</span>
                    </div>
                    <div className="flex justify-center items-center mt-auto">
                      <button onClick={nextModalTerms3} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm font-semibold">Continue</button>
                    </div>
                  </div>
                )
              }
              {
                action === "modalTerms3" && (
                  <div className="flex flex-col h-full">
                    <p className="mb-7 text-justify">By proceeding, you confirm that you have carefully read, understood, and agree to the Terms & Conditions. If you have any questions or need clarification, please reach out to our support team before continuing.</p>
                    <div className="flex items-center mb-3 space-x-4">
                      <input
                        type="checkbox"
                        id="last-name"
                        className="peer w-8 h-8 border border-gray-300 rounded-md px-4 pt-4 pb-2 text-sm focus:outline-none"
                        onChange={handleCheckboxChange}
                      />
                      <span>I confirm that I have read, understood, and agree to the Terms & Conditions outlined by the platform.</span>
                    </div>
                    <div className="flex justify-center items-center mt-auto">
                      {
                        cek ? (
                          <button onClick={linkPageWD} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm font-semibold">Continue</button>
                        ) : (
                          <button disabled onClick={linkPageWD} className="bg-black opacity-45 text-white py-4 px-12 text-center rounded-xl text-sm font-semibold">Continue</button>
                        )
                      }
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ModalTermsWD;
