import React, {useState} from "react"
import ModalIdentity from "../components/modal/ModalIdentity"
import chart from '../assets/chart.jpeg'
import iconFullscreen from '../assets/icon-fullscreen.png'
import product from '../assets/product.jpeg'
import { useNavigate } from "react-router-dom"

export default function PageProductDetail(){
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [time, setTime] = useState('24h');

    const navigate = useNavigate();
    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);
    const timeOptions = ['24h', '7D', '30D', '90D', 'ALL'];

    const handleBuyAsset = () => {
        navigate('/buy-asset')
    }

    const handleSellAsset = () => {
        navigate('/sell-asset')
    }

    const metrics = [
    { title: "APY", value: "4.65%" },
    { title: "TVL", value: "$450.00M" },
    { title: "LIQUIDITY", value: "$1.2M%" },
    { title: "MARKET CAP", value: "3,841.97%" },
    { title: "DAU", value: "500" },
    { title: "ROI", value: "2.45%" },
    ];

    return (
          <div className=" min-h-full">
            <h1 className="text-2xl font-bold mb-3">Product Detail</h1>
            <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-16">
                   <div className="flex item-center space-x-3">
                        <img src={product} alt="product" className="w-16 h-16 rounded-full"/>
                        <div className="flex flex-col space-y-1">
                            <span className="font-semibold">USDT</span>
                            <span className="text-sm">USDT</span>
                        </div>
                   </div>
                   <div className="flex flex-col">
                      <div className="py-2 px-8 bg-green-300 text-white rounded-lg">
                          <p className="font-bold text-center">$1.0717</p>
                      </div>
                          <span className="text-sm">2024 December 18 09:36:48</span>
                   </div>
                </div>
                <div className="flex items-center space-x-5">
                    <button onClick={handleBuyAsset} className="py-3 px-6 bg-green-400 text-white rounded-lg">Buy</button>
                    <button onClick={handleSellAsset} className="py-3 px-6 bg-red-400 text-white rounded-lg">Sell</button>
                </div>
            </div>
            <div className="w-full mb-4 border border-black"></div>

            <div className="flex items-center justify-between space-x-12 mb-4">
                {metrics.map((metric, index) => (
                    <div
                        key={index}
                        className="p-3 space-y-3 bg-[#D9D9D9] flex flex-col items-center justify-center rounded-lg w-full"
                    >
                        <p className="font-semibold">{metric.title}</p>
                        <div className="border border-black w-full"></div>
                        <p className=" font-extrabold">{metric.value}</p>
                    </div>
                ))}
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