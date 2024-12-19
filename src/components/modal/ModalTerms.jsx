import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import globe from '../../assets/globe.png'
import customer from '../../assets/customer.png';
import iconGlobe from '../../assets/globe.png';

const ModalTerms = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
   const [action, setAction] = useState('modalTerms1')
   const [cek, setCek] = useState(false)

   const nextModalTerms2 = () => setAction('modalTerms2');
   const nextModalTerms3 = () => setAction('modalTerms3');
   const nextModalTerms4 = () => setAction('modalTerms4');
   const nextModalTerms5 = () => setAction('modalTerms5');
   const nextModalTerms6 = () => setAction('modalTerms6');
   const closeModal = () => onClose();

   const handleCheckboxChange = (event) => {
    setCek(event.target.checked);
   };



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative rounded-xl shadow-lg w-1/2 bg-[#C5D2F7]">
        <div className="flex">
          <div className="px-4 py-6 border-r border-black w-1/3">
            <img src={logo} alt="logo" className="h-16" />
            <h1 className="text-xl font-bold mb-4">Terms & Conditions</h1>

            <p className="mb-4">
            {action === "modalTerms2"
                ? "Ownership and Asset Rights"
                : action === "modalTerms3"
                ? "Transparency and Public Information"
                : action === "modalTerms4"
                ? "Technology and Blockchain Security"
                : action === "modalTerms5"
                ? "Risks and Disclaimers"
                : action == "modalTerms6"
                ? "Agreement Confirmation"
                : "Legality and Regulatory Compliance"}
            </p>


          </div>

          <div className="w-2/3 h-[460px]">
            <div className='content p-8 h-full flex flex-col'>
                {
                    action == "modalTerms1" && (
                        <div className='flex flex-col h-full'>
                            <p className='mb-4 text-justify'>Asset tokenization must comply with the laws and regulations applicable in the relevant jurisdiction. Asset owners must adhere to legal frameworks governing securities, digital assets, and investor protection</p>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>The owner must ensure that the asset being tokenized has a clear legal status and is free from disputes, cush as liens, third-party claims, or ownership issues.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>If the tokenized asset is regulated by a spesific authority (e.g., Securities and Exchange Commission), the tokenization process must receive proper approval or licenses.</span>
                            </div>
                            <div className='flex justify-center items-center mt-auto'>
                             <button onClick={nextModalTerms2} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm">Continue</button>
                             </div>
                        </div>
                    )
                }
                {
                    action == "modalTerms2" && (
                        <div className='flex flex-col h-full'>
                            <p className='mb-4'>The party conducting tokenization must prove lawful ownership of the asset or process the legal authority to tokenize it.</p>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>Ownership documents, such as property deeds, stock certificates, or vehicle registration, must be verified by competent authorities.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>Asset owners must recognize that tokenization does not absolve them of responsibilities such as taxes, maintenance, or other liablilities associated with the asset.</span>
                            </div>
                            <div className='flex justify-center items-center mt-auto'>
                             <button onClick={nextModalTerms3} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm">Continue</button>
                             </div>
                        </div>
                    )
                }
                {
                    action == "modalTerms3" && (
                        <div className='flex flex-col h-full'>
                            <p className='mb-4 text-justify'>The tokenization process must be carried out with full transparency so that potential token holders receive complete and accurate information about the asset and token mechanism.</p>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>A comprehensive description of the assets, including its market value, type, physical condition (if applicable), and location, must be disclosed.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>A whitepaper or disclosure statement must outline the tokenization process, the technology used, and how the token correlates with the asset's value.</span>
                            </div>
                            <div className='flex justify-center items-center mt-auto'>
                             <button onClick={nextModalTerms4} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm">Continue</button>
                             </div>
                        </div>
                    )
                }
                 {
                    action == "modalTerms4" && (
                        <div className='flex flex-col h-full'>
                            <p className='mb-4 text-justify'>The blockhain infrastructure used for tokenization must be secure, reliable, and capable of ensuring the integrity of the digital assets created.</p>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>The chosen blockchain (e.g., Ethereum, Binance Smart Chain, Solana) must have robust security measures to protect againts cyber threats and technical vulnerabilities.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>Smart contracts used for token distribution must be independently audited to identify and eliminate potential security flaws.</span>
                            </div>
                            <div className='flex justify-center items-center mt-auto'>
                             <button onClick={nextModalTerms5} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm">Continue</button>
                             </div>
                        </div>
                    )
                }
                {
                    action == "modalTerms5" && (
                        <div className='flex flex-col h-full'>
                            <p className='mb-4 text-justify'>The risks associated with tokenization must be clearly commicated, and liability limitations must be specified.</p>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>Risks include potential loss of asset value, market volatility, technological vulnerabilities, and regulatory changes.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconGlobe} alt='icon-globe' className='w-9 h-9' />
                                <span>Asset owners or tokenization organizers are not liable for losses caused by external factors such as market fluctuations or unforeseen legal challenges.</span>
                            </div>
                            <div className='flex justify-center items-center mt-auto'>
                             <button onClick={nextModalTerms6} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm">Continue</button>
                             </div>
                        </div>
                    )
                }
                   {
                    action == "modalTerms6" && (
                        <div className='flex flex-col h-full'>
                            <p className='mb-7 text-justify'>By proceeding, you confirm that you have cafefully read, uderstood, and agree to the Terms & Conditions. If you have any questions or need clarification, please reach out to our support team before continuing.</p>
                            <div className='flex items-center mb-3 space-x-4'>
                                <input
                                    type="checkbox"
                                    id="last-name"
                                    class="peer w-8 h-8 border border-gray-300 rounded-md px-4 pt-4 pb-2 text-sm focus:outline-none"
                                    onChange={handleCheckboxChange}
                                />
                                <span>I confirm that I have read, understood, and agree to the Terms & Conditions outlined by the platform.</span>
                            </div>
                            <div className='flex justify-center items-center mt-auto'>
                            
                            {
                                cek ? (
                                    <button onClick={closeModal} className="bg-black text-white py-4 px-12 text-center rounded-xl text-sm">Continue</button>
                                ) : (
                                    <button disabled onClick={closeModal} className="bg-black opacity-45 text-white py-4 px-12 text-center rounded-xl text-sm">Continue</button>
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

export default ModalTerms;
