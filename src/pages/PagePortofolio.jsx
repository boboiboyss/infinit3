import { useState } from "react";
import chart from '../assets/chart.jpeg'
import iconFullscreen from '../assets/icon-fullscreen.svg'
import ModalChart from "../components/modal/ModalChart";
import iconEthereum from "../assets/icon-ethereum.png";
import iconTriangleGreen from  '../assets/icon-triangle-green.png'
import iconTriangleRed from '../assets/icon-triangle-red.png'

const timeOptions = ['24h', '7D', '30D', '90D', 'ALL'];
export default function PagePortofolio() {
    const [time, setTime] = useState('24h');
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

    return (
        <div className="min-h-screen p-4 md:p-8 bg-gray-50">
            <h1 className="text-2xl font-bold mb-5">Portofolio</h1>

            <div className="space-y-6">
                <div className="md:flex items-center justify-between mb-6">
                    <div className="space-y-2 mb-3">
                        <p className="font-semibold text-gray-700">Current Balance</p>
                        <p className="text-2xl md:text-3xl font-bold">$100,000.00</p>
                        <div className="flex items-center space-x-2">
                            <p className={time === "24h" ? "text-green-500" : "text-red-500"}>
                                {time === '24h' ? "+$200.00 (20%)" : "-$200.00 (20%)"}
                            </p>
                            <p className="bg-gray-200 text-black px-2 py-1 rounded-md font-semibold">
                                {time}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-2/3">
                        {['Performance Today', 'Overall Return'].map((title, index) => (
                            <div
                                key={index}
                                className={`${
                                    time === "24h" ? "bg-green-500" : "bg-red-500"
                                } p-5 text-white rounded-lg flex items-center justify-between`}
                            >
                                <div className="space-y-2">
                                    <p className="text-2xl">
                                        {time === "24h" ? "+$1,743.96" : "-$1,743.96"}
                                    </p>
                                    <p>{title}</p>
                                </div>
                                <div className="text-2xl">
                                    {time === "24h" ? "+1.14%" : "-1.14%"}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex md:justify-end">
                        <div className="bg-black text-white rounded-lg p-1 space-x-2 ">
                            {timeOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setTime(option)}
                                    className={`px-3 py-1 rounded-md font-semibold text-sm md:text-base ${
                                        time === option
                                            ? "bg-gray-200 text-black"
                                            : "hover:bg-gray-700"
                                    }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div onClick={openModal} className="relative hover:cursor-pointer">
                        <img
                            src={iconFullscreen}
                            alt="icon-fullscreen"
                            className="absolute  right-1 h-6 w-6 p-1"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 justify-center">
                        <h2 className="text-base md:text-lg font-semibold text-start">Chart</h2>
                        <img
                            src={chart}
                            alt="chart"
                            className="w-full max-w-lg md:max-w-2xl mx-auto"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="md:text-lg font-semibold">Assets</h2>
                    <div className="overflow-x-auto w-full">
                        <table className="table-auto w-full text-left text-sm md:text-base">
                            <thead className="border-b border-black">
                                <tr>
                                    <th className="px-2 py-2 min-w-[120px]">Assets</th>
                                    <th className="px-2 py-2 min-w-[100px]">24H Price</th>
                                    <th className="px-2 py-2 min-w-[100px]">Balance</th>
                                    <th className="px-2 py-2 min-w-[120px]">Avg. Buy Price</th>
                                    <th className="px-2 py-2 min-w-[120px]">Profit/Loss</th>
                                    <th className="px-2 py-2 min-w-[100px]">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2].map((item) => (
                                    <tr
                                        key={item}
                                        className="font-semibold hover:bg-gray-100"
                                    >
                                        <td className="px-2 py-4">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={iconEthereum}
                                                    alt="icon-ethereum"
                                                    className="h-10 w-10 border rounded-full"
                                                />
                                                <div>
                                                    <p className="font-semibold">Asset Name</p>
                                                    <p>AN</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 space-y-1">
                                            <p>$14,000.00</p>
                                            <div className="flex items-center text-green-500">
                                                <img
                                                    src={iconTriangleGreen}
                                                    alt="icon-triangle-green"
                                                    className="h-3 w-3"
                                                />
                                                <p>+5.2%</p>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4">$14,000.00</td>
                                        <td className="px-2 py-4">$14,000.00</td>
                                        <td className="px-2 py-4 space-y-1">
                                            <p className="text-green-500">+$14,000.00</p>
                                            <div className="flex items-center text-green-500">
                                                <img
                                                    src={iconTriangleGreen}
                                                    alt="icon-triangle-green"
                                                    className="h-3 w-3"
                                                />
                                                <p>+5.2%</p>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4">$14,000.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <ModalChart isOpen={isOpenModal} onClose={closeModal} />
        </div>
    );
}

