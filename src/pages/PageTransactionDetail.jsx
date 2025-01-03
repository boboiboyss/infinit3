import { useParams } from "react-router-dom"
import iconCopy from '../assets/icon-copy.png'
import iconCheck from '../assets/icon-check.png'
import { useState } from "react";

export default  function PageTransactionDetail() {
    const {id} = useParams();
    const transactions = [
        {
            id:1,
            time: "2024-12-17 18:00",
            type: "Deposit",
            wallet: "Spot Wallet",
            asset: "BTC",
            amount: "0,00114612",
            destination: "1D3pb...je83g",
            transactionHash: "0xd1ade25ccd3d550a7eb532ac759cac7be09c271",
            status: "Completed",
            statusColor: "text-green-500",
        },
        {
            id:2,
            time: "2024-12-17 18:00",
            type: "Deposit",
            wallet: "Spot Wallet",
            asset: "ETH",
            amount: "0,00114612",
            destination: "1D3pb...je83g",
            transactionHash: "0xd1ade25ccd3d550a7eb532ac759cac7be09c271",
            status: "Pending",
            statusColor: "text-yellow-500",
        },
        {   
            id:3,
            time: "2024-12-17 18:00",
            type: "Deposit",
            wallet: "Spot Wallet",
            asset: "XRP",
            amount: "0,00114612",
            destination: "1D3pb...je83g",
            txid: "7592aa5...2999au",
            status: "Failed",
            statusColor: "text-red-500",
        },
        {
            id:4,
            time: "2024-12-17 18:00",
            type: "Deposit",
            wallet: "Spot Wallet",
            asset: "USDT",
            amount: "0,00114612",
            destination: "1D3pb...je83g",
            transactionHash: "0xd1ade25ccd3d550a7eb532ac759cac7be09c271",
            status: "Cancelled",
            statusColor: "text-red-500",
        },
    ];

    const transDetail = transactions.find(trx => trx.id === +id);

    const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transDetail?.transactionHash);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
  };


    return (
        <div className="min-h-full">
            <h1 className="text-2xl font-bold mb-6">Transaction History Detail</h1>
             <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <p className="font-semibold">Transaction Number</p>
                    <p>{'#0102030405'}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-semibold">Transaction Hash</p>
                    <div className="flex items-center space-x-2">
                         <p className=" text-right">{transDetail?.transactionHash}</p>
                         {copied ? (
                            <img src={iconCheck} alt="icon-check" className="w-4 h-4 hover:cursor-pointer"/>
                         ): <img src={iconCopy} alt="icon-copy" className="w-4 h-4 hover:cursor-pointer" onClick={handleCopy} />}
                    </div>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-semibold">Status</p>
                    <p className={`${transDetail?.status == 'Completed' ? 'text-green-500' : transDetail?.status === 'Pending' ?  'text-yellow-500' : 'text-red-500'}`}>{transDetail?.status}</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-semibold">Transaction Date</p>
                    <p>{transDetail?.time}</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-semibold">Type</p>
                    <p>{transDetail?.type}</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-semibold">Asset</p>
                    <p>{transDetail?.asset}</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-semibold">Amount</p>
                    <p>{transDetail?.amount}</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-semibold">Destination</p>
                    <p>{transDetail?.destination}</p>
                </div>
               
             </div>
        </div>
    )
}