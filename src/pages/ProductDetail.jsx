import React, {useState} from "react"
import ModalIdentity from "../components/modal/ModalIdentity"
import chart from '../assets/chart.jpeg'
import iconFullscreen from '../assets/icon-fullscreen.png'

export default function PageProductDetail(){
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [time, setTime] = useState('24h');


    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);
     const timeOptions = ['24h', '7D', '30D', '90D', 'ALL'];
    return (
          <div className=" min-h-full">
            <h1 className="text-2xl font-bold mb-3">Product Detail</h1>
            <div className="flex justify-between">

            </div>

            <div className="flex items-center justify-between space-x-4">
                <div className="p-3 space-y-3 bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg w-full">
                    <p className="font-semibold">APY</p>
                    <div className="border border-black w-full"></div>
                    <p className="font-bold">4.65%</p>
                </div>
                  <div className="p-3 space-y-3 bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg w-full">
                    <p className="font-semibold">APY</p>
                    <div className="border border-black w-full"></div>
                    <p className="font-bold">4.65%</p>
                </div>
                    <div className="p-3 space-y-3 bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg w-full">
                    <p className="font-semibold">APY</p>
                    <div className="border border-black w-full"></div>
                    <p className="font-bold">4.65%</p>
                </div>
                   <div className="p-3 space-y-3 bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg w-full">
                    <p className="font-semibold">APY</p>
                    <div className="border border-black w-full"></div>
                    <p className="font-bold">4.65%</p>
                </div>
                   <div className="p-3 space-y-3 bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg w-full">
                    <p className="font-semibold">APY</p>
                    <div className="border border-black w-full"></div>
                    <p className="font-bold">4.65%</p>
                </div>
                    <div className="p-3 space-y-3 bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg w-full">
                    <p className="font-semibold">APY</p>
                    <div className="border border-black w-full"></div>
                    <p className="font-bold">4.65%</p>
                </div>

            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <div className="p-[4px] bg-black  text-white space-x-2 rounded-lg">
                        {timeOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => setTime(option)}
                                className={`p-1 rounded-md ${
                                    time === option
                                        ? 'bg-[#E9ECEF] text-black'
                                        : 'text-white'              
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
              <div onClick={openModal} className="hover:cursor-pointer">
                    <img src={iconFullscreen} alt="icon-fullscreen" className="h-9 w-19"/>
                    </div>
                   <div className="flex items-center justify-center">
                       <img src={chart} alt="chart" className=" h-[400px] w-[600px]" /> 
                   </div>
          </div>
    )
}