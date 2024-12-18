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

const ModalKYC = ({ isOpen, onClose, openModalTerms }) => {
  if (!isOpen) return null;
   const [action, setAction] = useState('modalKYC1')

   const nextModalKYC2 = () => setAction('modalKYC2');
   const nextModalKYC3 = () => setAction('modalKYC3');
   const nextModalKYC4 = () => setAction('modalKYC4');
   const nextModalKYC5 = () => setAction('modalKYC5');
   const nextModalKYC6A = () => setAction('modalKYC6A')
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
      <div className="relative rounded-xl shadow-lg w-1/2 bg-[#C5D2F7]">
        <div className="flex">
          <div className="px-4 py-6 border-r border-black w-1/3">
            <img src={logo} alt="logo" className="h-16" />
            <h1 className="text-xl font-bold mb-4">Indentity Verification</h1>

            <p className="mb-4">
            {action === "modalKYC11"
                ? "Add Your Wallet"
                : action === "modalKYC12"
                ? "Sign Documents"
                : action === "modalKYC13"
                ? "Completed"
                : "Verify Your Identity"}
            </p>


          </div>

          <div className={`w-2/3 ${action === 'modalKYC8' ? 'h-auto' : 'h-[480px]'}`}>
            <div className='content p-8 h-full flex flex-col'>
                {
                  action == 'modalKYC1' && (
                        <>
                            <div className='h-full flex flex-col'>
                    <h1 className='font-bold text-xl mb-6'>Eligibility Criteria</h1>
                    <p className='mb-6'>To qualitfy for the purchase of an Asset, you (or your organization, as applicable) must meet the following requirements:</p>
                    <div className='space-y-2'>
                        <div className='flex items-center space-x-2'>
                            <img src={globe} alt='globe' className='w-10 h-10' />
                            <p>Must not be located in, or a resident of, the United States or any other jurisdiction with restricted access.</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <img src={customer} alt='globe' className='w-10 h-10' />
                            <p>Must not be located in, or a resident of, the United States or any other jurisdiction with restricted access.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-auto'>
                        <button onClick={nextModalKYC2} className="bg-black text-white py-3 px-16 text-center rounded-xl">Continue</button>
                    </div>
                </div>
                {/* <button
                onClick={onClose}
                className=" text-black hover:text-gray-600 focus:outline-none absolute right-2 top-2"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button> */}
                        </>
                  )
                }

                {
                  action=="modalKYC2" && (
                     <div className='h-full flex flex-col'>
                        <h1 className='font-bold text-xl mb-4'>Verify Your Identity</h1>
                        <div class="relative w-full rounded-xl mb-2">
                        <input
                            type="text"
                            placeholder="First Name"
                            id="first-name"
                            class="peer w-full border border-gray-300 rounded-md p-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                        />
                        {/* <label
                            for="first-name"
                            class="absolute left-3 top-2.5 text-gray-500 text-sm transition-all duration-300 transform origin-[0] scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-gray-700 peer-valid:top-0 peer-valid:scale-75"
                        >
                            First Name
                        </label> */}
                        </div>

                        <div class="relative w-full rounded-xl mb-2">
                        <input
                            type="text"
                            placeholder="Last Name"
                            id="last-name"
                            class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                        />
                        {/* <label
                            for="last-name"
                            class="absolute left-3 top-2.5 text-gray-500 text-sm transition-all duration-300 transform origin-[0] scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-gray-700 peer-valid:top-0 peer-valid:scale-75"
                        >
                            Last Name
                        </label> */}
                        </div>

                        <div class="relative w-full rounded-xl mb-2">
                            <select
                                id="last-name"
                                class="peer w-full border bg-white border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                            >
                                <option>Investor Type</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                         <div class="relative w-full rounded-xl">
                            <select
                                id="last-name"
                                class="peer w-full bg-white border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                            >
                                <option>Likely Purchase Amount</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                         <span className='text-sm'>Non-binding. This information allows us to better understand and serve our clients.</span>
                         
                         <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC3} className="bg-black text-white py-4 px-14 text-center rounded-xl text-sm m-auto">Start KYC</button>
                         </div>
                        
                     </div>
                  )
                }

                {
                  action=="modalKYC3" && (
                   <div className='h-full flex flex-col'>
                      <h1 className='font-bold text-lg mb-4 text-justify'>Please select the country of your citizenship that matches the goverment-issued ID you intend to provide</h1>
                        <div class="relative w-full rounded-xl mb-6">
                            <p className=' text-justify'>In the next step, you will be required to upload a government-issue ID from your country of citizenship. Ensure that the ID matches your current nationally.</p>
                            <select
                                id="last-name"
                                class="peer rounded-lg w-full border bg-white border-gray-300 px-3 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                            >
                                <option>Indonesia</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                         <div class="relative w-full rounded-xl">
                            <p>List any other countries in which you have citizenship</p>
                            <select
                                id="last-name"
                                class="peer rounded-lg w-full border bg-white border-gray-300 px-3 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                            >
                                <option>Type country name(s)</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                         <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC4} className="bg-black text-white py-4 px-14 text-center rounded-xl text-sm">Select</button>
                         </div>

                   </div>
                    
                  )
                }
                {
                   action=="modalKYC4" && (
                    <div className='h-full flex flex-col'>
                        <h1 className='font-bold text-xl mb-4'>What is the country of your residence ?</h1>
                          <div class="relative w-full rounded-xl">
                            <p>This allows us to identify the most appropriate method to verify your identity.</p>
                            <select
                                id="last-name"
                                class="peer rounded-lg w-full border bg-white border-gray-300 px-3 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                            >
                                <option>Indonesia</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                          <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC5} className="bg-black text-white py-4 px-14 text-center rounded-xl text-sm">Continue</button>
                         </div>
                    </div>
                   )
                }
                {
                   action=="modalKYC5" && (
                    <div>
                        <h1 className='font-bold text-xl mb-6'>Upload a photo ID</h1>
                        <p className='mb-4 text-justify'>For identify verification purposes, we kindly request a photo of your government-issued ID. Please ensure that the ID provided mathces the one associated with your citizenship.</p>
                        <div className='w-full space-y-2'>
                            <p>Choose 1 of the following options</p>
                            <div onClick={nextModalKYC6C} className='flex items-center justify-between p-4 rounded-xl w-full bg-white text-black hover:cursor-pointer'>
                                <p className=''>Driver License</p>
                                <img  src={iconDropdown} alt='icon-dropdown' className='w-4 h-4 -rotate-90' />
                            </div>
                            <div onClick={nextModalKYC6B} className='flex items-center justify-between p-4 rounded-xl w-full bg-white text-black hover:cursor-pointer'>
                                <p className=''>National ID</p>
                                <img  src={iconDropdown} alt='icon-dropdown' className='w-4 h-4 -rotate-90' />
                            </div>
                            <div onClick={nextModalKYC6A} className='flex items-center justify-between p-4 rounded-xl w-full bg-white text-black hover:cursor-pointer'>
                                <p className=''>Passport</p>
                               <img  src={iconDropdown} alt='icon-dropdown' className='w-4 h-4 -rotate-90' />
                            </div>
                        </div>
                    </div>
                   )
                } 
                {
                    action=="modalKYC6A" && (
                        <div className='h-full flex flex-col'>
                              <h1 className='font-bold text-xl mb-6'>Passport</h1>
                              <p className='mb-4'>Take a clear photo of your entire passport portrait page.</p>
                              <div className='w-full flex items-center justify-center p-20 border border-black rounded-lg'>
                                    <img src={iconUploadPhoto} alt='icon-upload-photo' className=' w-[70px] h-[70px]' />
                              </div>
                               <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC7} className="bg-black text-white py-4 px-10 text-center rounded-xl text-sm">Upload a photo</button>
                         </div>
                        </div>
                    )
                }
                {
                    action=="modalKYC6B" && (
                        <div className='h-full flex flex-col'>
                              <h1 className='font-bold text-xl mb-6'>National ID</h1>
                              <p className='mb-4'>Take a clear photo of your entire passport portrait page.</p>
                              <div className='w-full flex items-center justify-center p-20 border border-black rounded-lg'>
                                    <img src={iconUploadPhoto} alt='icon-upload-photo' className=' w-[70px] h-[70px]' />
                              </div>
                               <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC7} className="bg-black text-white py-4 px-10 text-center rounded-xl text-sm">Upload a photo</button>
                         </div>
                        </div>
                    )
                }
                {
                    action=="modalKYC6C" && (
                        <div className='h-full flex flex-col'>
                              <h1 className='font-bold text-xl mb-6'>Driver License</h1>
                              <p className='mb-4'>Take a clear photo of your entire passport portrait page.</p>
                              <div className='w-full flex items-center justify-center p-20 border border-black rounded-lg'>
                                    <img src={iconUploadPhoto} alt='icon-upload-photo' className=' w-[70px] h-[70px]' />
                              </div>
                               <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC7} className="bg-black text-white py-4 px-10 text-center rounded-xl text-sm">Upload a photo</button>
                         </div>
                        </div>
                    )
                }
                {
                    action=="modalKYC7" && (
                     <div className='h-full flex flex-col'>
                              <h1 className='font-bold text-xl mb-6'>Let's make sure you're you</h1>
                              <p className='mb-4'>Position yourself in the center of the camera and then more your face left and right to show both slides</p>
                              <div className='w-full flex items-center justify-center p-20 border border-black rounded-lg'>
                                    <img src={iconFace} alt='icon-upload-photo' className=' w-[70px] h-[70px]' />
                              </div>
                               <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC8} className="bg-black text-white py-4 px-10 text-center rounded-xl text-sm">Get started</button>
                         </div>
                        </div>   
                    )
                }
                {
                    action =="modalKYC8" && (
                        <div className='h-full flex flex-col'>
                             <h1 className='font-bold text-xl mb-6'>Just the basics</h1>
                             <p className='mb-4'>Nothing fancy, just a few things to verify your identify</p>
                               <div className='flex item-center justify-between space-x-3 w-1/2'>
                                   <div class="relative w-full rounded-xl mb-2">
                                    <label>Month</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                 space-x-3   />
                                </div>
                                 <div class="relative w-full rounded-xl mb-2">
                                    <label>Day</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                </div>
                                 <div class="relative w-full rounded-xl mb-2">
                                    <label>Year</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                </div> 
                               </div>
                               <div class="relative w-full rounded-xl mb-2">
                                    <label>Tax ID / SSN</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                </div>
                                 <div class="relative w-full rounded-xl mb-2">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                 </div>
                                 <div class="relative w-full rounded-xl mb-2">
                                    <input
                                        type="text"
                                        id="last-name"
                                        class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                 </div>
                                 <div class="relative w-full rounded-xl mb-2">
                                    <input
                                        type="text"
                                        id="last-name"
                                        class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                 </div>
                                 <div class="relative w-full rounded-xl mb-2">
                                    <input
                                        type="text"
                                        id="last-name"
                                        class="peer w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                                    />
                                 </div>
                                <div className='flex justify-center items-center mt-8'>
                                <button onClick={nextModalKYC9} className="bg-black text-white py-3 px-16 text-center rounded-xl">Continue</button>
                                </div>
                                        
                        </div>
                    )
                }
                {
                    action =="modalKYC9" && (
                        <div className='flex flex-col h-full'>
                            <h1 className='font-bold text-xl mb-6'>Identity information submitted</h1>
                            <p>Your identity information is currently under review. You will be contracted via email if any issues arise.</p>
                            <div className='w-full flex items-center justify-center p-16'>
                                <img src={iconSuccess} alt='icon-upload-photo' className=' w-30 h-30' />
                              </div>
                               <div className='flex justify-center items-center mt-auto'>
                            <button onClick={nextModalKYC10} className="bg-black text-white py-4 px-20 text-center rounded-xl text-sm">Next</button>
                         </div>
                        </div>
                    )
                }
                {
                    action == 'modalKYC10' && (
                        <div className='h-full flex flex-col'>
                            <h1 className='font-bold text-xl mb-6'>Verification Materials Submitted</h1>
                            <p className='text-justify'>Thank you for completing the verification process. We will notify you via email once your submission has been reviewed. In the meantime, you may proceed with the wallet verification.</p>

                            <div className='mt-14 w-full rounded-xl p-4 bg-white text-black border-2 border-black'>
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
                            <button onClick={nextModalKYC11} className="bg-black text-white py-4 px-6 text-center rounded-xl text-sm">Continue to wallet verification</button>
                         </div>
                        </div>
                    )
                }
                {
                    action == 'modalKYC11' && (
                        <div className='h-full flex flex-col'>
                            <h1 className='font-bold text-xl mb-6'>Add Your Wallet</h1>
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
                             <button onClick={nextModalKYC12} className="bg-black text-white py-4 px-8 text-center rounded-xl text-sm">Add your wallet</button>
                             </div>
                        </div>
                    )
                }
                {
                    action == "modalKYC12" && (
                        <div className='flex flex-col h-full'>
                             <h1 className='font-bold text-xl mb-6'>Sign Documents</h1>
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
                             <button onClick={nextModalKYC13} className="bg-black text-white py-4 px-8 text-center rounded-xl text-sm">Review and Sign Documents</button>
                             </div>
                        </div>
                    )
                }
                   {
                    action == "modalKYC13" && (
                        <div className='flex flex-col h-full'>
                             <h1 className='font-bold text-xl mb-6'>Onboarding Completed</h1>
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
                             <button onClick={openModalTerm} className="bg-black text-white py-4 px-8 text-center rounded-xl text-sm">Complete</button>
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

export default ModalKYC;
