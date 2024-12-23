import { useState } from "react";
import chart from '../assets/chart.jpeg'
import iconFullscreen from '../assets/icon-fullscreen.svg'
import ModalChart from "../components/modal/ModalChart";
import iconEthereum from "../assets/icon-ethereum.png";
import iconTriangleGreen from  '../assets/icon-triangle-green.png'
import iconTriangleRed from '../assets/icon-triangle-red.png'

export default function PagePortofolio() {
    const [time, setTime] = useState('24h');
    const [isOpenModal, setIsOpenModal] =  useState(false)

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

    const timeOptions = ['24h', '7D', '30D', '90D', 'ALL'];

    return (
        <div className="h-min-full">
            <h1 className="text-2xl font-bold mb-5">Portofolio</h1>

            <div className="space-y-2 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold">Current Balance</p>
                        <p className="text-3xl font-semibold">$100,000.00</p>
                        <div className="flex items-center space-x-2">
                           <p className={time === "24h" ? "text-[#79EA86]" : "text-[#e75757]"}>{time === '24h' ? "+$200.00 (20%)" : "-$200.00 (20%)"}</p>
                            <p className="bg-[#E9ECEF] text-black p-[3px] rounded-md font-semibold">{time}</p>
                        </div>
                    </div>
                    <div className="flex item-center w-2/3 space-x-14">
                        <div className={`${time === "24h" ? "bg-[#79EA86]" : "bg-[#e75757]"} p-5 text-white  rounded-lg w-full flex items-center justify-between`}>
                            <div className="flex flex-col space-y-3">
                                <p className="text-2xl text-white">{time === "24h" ? "+$1 743.96" : "-$1,743.96"}</p>
                                <p>Performance Today</p>
                            </div>
                            <div className="text-2xl">{ time === "24h" ? "+1.14%" : "-1.14%"}</div>

                        </div>

                        <div className={`${time === "24h" ? "bg-[#79EA86]" : "bg-[#e75757]"} p-5 text-white rounded-lg w-full flex items-center justify-between`}>
                            <div className="flex flex-col space-y-3">
                                <p className="text-2xl text-white">{time === "24h" ? "+$1 743.96" : "-$1,743.96"}</p>
                                <p>Overall Return</p>
                            </div>
                            <div className="text-2xl">{ time === "24h" ? "+1.14%" : "-1.14%"}</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-6 mb-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-semibold">Chart</h1>
                        <div className="p-[4px] bg-black  text-white space-x-2 rounded-lg">
                            {timeOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setTime(option)}
                                    className={`p-1 rounded-md font-semibold ${
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
                    <div onClick={openModal} className="hover:cursor-pointer">
                    <img src={iconFullscreen} alt="icon-fullscreen" className="h-9 w-19 absolute right-12 p-1"/>
                    </div>
                   <div className="flex items-center justify-center">
                       <img src={chart} alt="chart" className=" h-[400px] w-[600px]" /> 
                   </div>
                </div>
                <div className="asset">
                    <h1 className="text-lg font-semibold">Assets</h1>
                    <table class="table-auto w-full text-center">
                <thead className="border-y border-black ">
                    <tr>
                    <th>Assets</th>
                    <th>24H Price</th>
                    <th>Balance</th>
                    <th>Avg. Buy Price</th>
                    <th>Profit/Loss</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="font-semibold">
                        <td>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="border border-black rounded-full">
                                <img src={iconEthereum} alt="icon-ethereum" className="h-10 w-10" />

                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold">Asset Name</span>
                                    <span className="text-left">AN</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex flex-col items-center justify-center text-center">
                              <span>$14,000.00</span>
                              <div className="flex items-center  space-x-1">
                                    <img src={iconTriangleGreen} alt="icon-triangle-green" className="h-3 w-3" />
                                    <span className="text-[#79EA86] text-sm">5.2%</span>
                              </div>
                            </div>
                        </td>
                        <td>$14,000.00</td>
                        <td>$14,000.00</td>
                        <td>
                             <div className="flex flex-col items-center justify-center text-center">
                              <span className="text-[#79EA86]">$14,000.00</span>
                              <div className="flex items-center  space-x-1">
                                    <img src={iconTriangleGreen} alt="icon-triangle-green" className="h-3 w-3" />
                                    <span className="text-[#79EA86] text-sm">5.2%</span>
                              </div>
                            </div>
                        </td>
                        <td>$14,000.00</td>
                    </tr>
                    <tr className="font-semibold">
                        <td>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="border border-black rounded-full">
                                <img src={iconEthereum} alt="icon-ethereum" className="h-10 w-10" />

                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold">Asset Name</span>
                                    <span className="text-left">AN</span>
                                </div>
                            </div>
                        </td>
                        <td>
                              <div className="flex flex-col items-center justify-center text-center">
                              <span>$14,000.00</span>
                              <div className="flex items-center  space-x-1">
                                    <img src={iconTriangleRed} alt="icon-triangle-green" className="h-3 w-3 rotate-180" />
                                    <span className="text-[#e75757] text-sm">5.2%</span>
                              </div>
                            </div>
                        </td>
                        <td>$14,000.00</td>
                        <td>$14,000.00</td>
                        <td>
                            <div className="flex flex-col items-center justify-center text-center">
                              <span className="text-[#e75757]">$14,000.00</span>
                              <div className="flex items-center  space-x-1">
                                    <img src={iconTriangleRed} alt="icon-triangle-green" className="h-3 w-3 rotate-180" />
                                    <span className="text-[#e75757] text-sm">5.2%</span>
                              </div>
                            </div>
                        </td>
                        <td>$14,000.00</td>
                    </tr>
                </tbody>
            </table>

                </div>
            </div>
            <ModalChart isOpen={isOpenModal} onClose={closeModal} />
        </div>
    );
}
