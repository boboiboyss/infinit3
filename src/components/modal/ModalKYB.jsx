import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import globe from '../../assets/globe.png'
import customer from '../../assets/customer.png';
import iconDropdown from '../../assets/icon-dropdown.png'
import iconUploadPhoto from '../../assets/icon-upload-photo.png'
import iconFace from '../../assets/icon-face.png'
import iconSuccess from '../../assets/icon-success.png'
import product from '../../assets/product.jpeg'
import iconTime from '../../assets/icon-time.png'
import iconDocument from '../../assets/icon-documents.png'
import iconMail from '../../assets/icon-mail.png'
import iconUser from '../../assets/icon-user.png'
import iconSearch from '../../assets/icon-search.png'
import iconUpDoc from '../../assets/icon-upload-doc.png'

const ModalKYB = ({ isOpen, onClose, openModalTerms }) => {
  if (!isOpen) return null;
   const [action, setAction] = useState('modalKYC1')

   const nextModalKYC2 = () => setAction('modalKYC2');
   const nextModalKYC3 = () => setAction('modalKYC3');
   const nextModalKYC4 = () => setAction('modalKYC4');
   const nextModalKYC5 = () => setAction('modalKYC5');
   const nextModalKYC6 = () => setAction('modalKYC6')
   const nextModalKYC6B = () => setAction('modalKYC6B')
   const nextModalKYC6C = () => setAction('modalKYC6C')
   const nextModalKYC7 = () => setAction('modalKYC7')
   const nextModalKYC8 = () => setAction('modalKYC8')
   const nextModalKYC9 = () => setAction('modalKYC9')
   const nextModalKYC10 = () => setAction('modalKYC10')
   const nextModalKYC11 = () => setAction('modalKYC11')
   const nextModalKYC12 = () => setAction('modalKYC12')
   const nextModalKYC13 = () => setAction('modalKYC13')
   const openModalTerm = () => {
    onClose();
    openModalTerms(true);
   }



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="relative rounded-xl shadow-lg w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40%] bg-[#C5D2F7]">
    <div className="flex flex-col lg:flex-row">
      <div className="px-4 py-6 border-b lg:border-b-0 lg:border-r border-black w-full lg:w-1/3">
        <img src={logo} alt="logo" className="h-16" />
        <h1 className="text-lg lg:text-xl font-bold mb-4 text-center lg:text-left">Business Verification</h1>
        <p className="mb-4 text-center lg:text-left">
            Verify Your Business
        </p>
      </div>

      <div className={`w-full lg:w-2/3 h-auto lg:${action === 'modalKYC8' ? 'h-auto' : 'h-[500px]'}`}>
        <div className="content p-4 lg:p-8 h-full flex flex-col">
          {action === "modalKYC1" && (
            <>
              <h1 className="font-bold text-lg lg:text-xl mb-6">Eligibility Criteria</h1>
              <p className="mb-6 text-justify">
                To qualify for the purchase of an Asset, you (or your organization, as applicable) must meet the following requirements:
              </p>
              <div className="space-y-4 mb-3">
                <div className="flex items-center space-x-4">
                  <img src={globe} alt="globe" className="w-8 h-8 lg:w-10 lg:h-10" />
                  <p className="text-sm lg:text-base">
                    Must not be located in, or a resident of, the United States or any other jurisdiction with restricted access.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={customer} alt="customer" className="w-8 h-8 lg:w-10 lg:h-10" />
                  <p className="text-sm lg:text-base">
                    Must not be located in, or a resident of, the United States or any other jurisdiction with restricted access.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-auto">
                <button
                  onClick={nextModalKYC2}
                  className="bg-black text-white py-3 px-8 lg:px-16 text-center rounded-xl font-semibold"
                >
                  Continue
                </button>
              </div>
            </>
          )}


        {
            action=="modalKYC2" && (
                <div className='h-full flex flex-col'>
                        <h1 className='font-bold text-lg lg:text-xl mb-6'>Certificate of Incorporation</h1>
                        <p className='mb-4'>Please upload a clear and complete copy of your Certificate of Incorporation. Ensure all details are visible and legible.</p>
                        <div className='w-full flex items-center justify-center mb-3 p-10 lg:p-20 border border-black rounded-lg'>
                            <img src={iconUpDoc} alt='icon-upload-doc' className=' w-[70px] h-[70px]' />
                        </div>
                        <div className='flex justify-center items-center mt-auto'>
                    <button onClick={nextModalKYC3} className="bg-black text-white py-4 px-10 text-center rounded-xl text-sm font-semibold">Upload Document</button>
                    </div>
                </div>
            )
        }

        {
            action=="modalKYC3" && (
                <div className='h-full flex flex-col'>
                        <h1 className='font-bold text-lg lg:text-xl mb-6'>Tax Document</h1>
                        <p className='mb-4'>Please upload a clear and complete copy of your Tax Document. Ensure all details are visible and legible.</p>
                        <div className='w-full flex items-center justify-center mb-3 p-10 lg:p-20 border border-black rounded-lg'>
                            <img src={iconUpDoc} alt='icon-upload-doc' className=' w-[70px] h-[70px]' />
                        </div>
                        <div className='flex justify-center items-center mt-auto'>
                    <button onClick={nextModalKYC4} className="bg-black text-white py-4 px-10 text-center rounded-xl text-sm font-semibold">Upload Document</button>
                    </div>
                </div>
            )
        }

        {
            action=="modalKYC4" && (
                <div className='h-full flex flex-col'>
                        <h1 className='font-bold text-lg lg:text-xl mb-6'>Corporate Organization Structure</h1>
                        <p className='mb-4'>Please upload a clear and complete copy of your Corporate Organization Structure. Ensure all details are visible and legible.</p>
                        <div className='w-full flex items-center justify-center mb-3 p-10 lg:p-20 border border-black rounded-lg'>
                            <img src={iconUpDoc} alt='icon-upload-doc' className=' w-[70px] h-[70px]' />
                        </div>
                        <div className='flex justify-center items-center mt-auto'>
                    <button onClick={nextModalKYC5} className="bg-black text-white py-4 px-10 text-center rounded-xl text-sm font-semibold">Upload Document</button>
                    </div>
                </div>
            )
        }

        {
            action=="modalKYC5" && (
                <div className='h-full flex flex-col'>
                        <h1 className='font-bold text-lg lg:text-xl mb-6'>Audited Financial Statements</h1>
                        <p className='mb-4'>Please upload a clear and complete copy of your Audited Financial Statements. Ensure all details are visible and legible.</p>
                        <div className='w-full flex items-center justify-center mb-3 p-10 lg:p-20 border border-black rounded-lg'>
                            <img src={iconUpDoc} alt='icon-upload-doc' className=' w-[70px] h-[70px]' />
                        </div>
                        <div className='flex justify-center items-center mt-auto'>
                    <button onClick={nextModalKYC6} className="bg-black text-white py-4 px-10 text-center rounded-xl text-sm font-semibold">Upload Document</button>
                    </div>
                </div>
            )
        }
            
        {
            action =="modalKYC6" && (
                <div className='flex flex-col h-full'>
                    <h1 className='font-bold text-lg lg:text-xl mb-6'>Business Information submitted</h1>
                    <p>Your business information is currently under review. You will be contacted via email if any issues arise.</p>
                    <div className='w-full flex items-center justify-center p-8 lg:p-16'>
                        <img src={iconSuccess} alt='icon-upload-photo' className='w-20 h-20 object-cover lg:w-30 lg:h-30' />
                        </div>
                        <div className='flex justify-center items-center mt-auto'>
                    <button onClick={nextModalKYC10} className="bg-black text-white py-4 px-20 text-center rounded-xl text-sm font-semibold">Next</button>
                    </div>
                </div>
            )
        }
                {
                    action == 'modalKYC10' && (
                        <div className='h-full flex flex-col'>
                            <h1 className='font-bold text-lg lg:text-xl mb-6'>Verification Materials Submitted</h1>
                            <p className='text-justify'>Thank you for completing the verification process. We will notify you via email once your submission has been reviewed. In the meantime, you may proceed with the wallet verification.</p>

                            <div className='mt-14 w-full rounded-xl p-4 bg-white text-black border-2 border-black mb-3'>
                                <div className='flex items-center justify-between'>
                                   <div className='flex items-center space-x-3'>
                                    <img src={product} alt='product' className='w-16 h-16 rounded-full' />

                                    <div className='flex flex-col justify-center space-y-2'>
                                        <p className='font-semibold'>Audi Hagi</p>
                                        <span className='text-sm'>Individual Investor</span>
                                    </div>
                                   </div>
                                <p>Under Review</p>
                                </div>
                            </div>

                               <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC11} className="bg-black text-white py-4 px-6 text-center rounded-xl text-sm font-semibold">Continue to wallet verification</button>
                         </div>
                        </div>
                    )
                }
                {
                    action == 'modalKYC11' && (
                        <div className='h-full flex flex-col'>
                            <h1 className='font-bold text-lg lg:text-xl mb-6'>Add Your Wallet</h1>
                            <p className='mb-4'>Please enter the Ethereum wallet you will use to receive or redeem USDY</p>
                                <div class="relative w-full rounded-xl mb-4">
                                    <input
                                        type="text"
                                        placeholder="Wallet Name (e.g. Audi's Ledger)"
                                        id="last-name"
                                        class="peer placeholder:font-bold w-full border border-gray-300 rounded-xl px-3 pt-4 pb-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                </div>
                                    <div class="relative w-full rounded-lg mb-4">
                                    <input
                                        type="text"
                                        placeholder='Wallet Address'
                                        id="last-name"
                                        class="peer placeholder:font-bold w-full border border-gray-300 rounded-xl px-3 pt-4 pb-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                </div>
                             <div className='flex justify-center items-center mt-auto'>
                             <button onClick={nextModalKYC13} className="bg-black text-white py-4 px-8 text-center rounded-xl text-sm font-semibold">Add your wallet</button>
                             </div>
                        </div>
                    )
                }
                {
                    action == "modalKYC12" && (
                        <div className='flex flex-col h-full'>
                             <h1 className='font-bold text-lg lg:text-xl mb-6'>Sign Documents</h1>
                            <p className='mb-4'>You're just one step away from completing your onboarding.</p>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconDocument} alt='icon-document' className='w-9 h-9' />
                                <span>You will review and sign the Dcoument Packet.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconTime} alt='icon-document' className='w-9 h-9' />
                                <span>We aim to review your onboarding application within 2-3 Business Days.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconTime} alt='icon-document' className='w-9 h-9' />
                                <span>Note that the next page contains a large document and may take up to two minutes to load.</span>
                            </div>
                            <div className='flex justify-center items-center mt-auto'>
                             <button onClick={nextModalKYC13} className="bg-black text-white py-4 px-8 text-center rounded-xl text-sm font-semibold">Review and Sign Documents</button>
                             </div>
                        </div>
                    )
                }
                   {
                    action == "modalKYC13" && (
                        <div className='flex flex-col h-full'>
                             <h1 className='font-bold text-lg lg:text-xl mb-6'>Onboarding Completed</h1>
                            <p className='mb-4'>You've successfully completed the USDY onboarding process.</p>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconSearch} alt='icon-document' className='w-9 h-9' />
                                <span>Our team is now set to review your application. We aimn to get this done within 2-3 US business days.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconMail} alt='icon-document' className='w-9 h-9' />
                                <span>Once approved, we'll send you a confirmation email.</span>
                            </div>
                            <div className='flex items-center mb-3 space-x-3'>
                                <img src={iconUser} alt='icon-document' className='w-9 h-9' />
                                <span>Once approved, you'll view the subscription packet in your account page.</span>
                            </div>
                            <div className='flex justify-center items-center mt-auto'>
                             <button onClick={openModalTerm} className="bg-black text-white py-4 px-8 text-center rounded-xl text-sm font0-semibold font-semibold">Complete</button>
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

export default ModalKYB;
