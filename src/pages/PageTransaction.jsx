import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PageTransaction() {
    const navigate = useNavigate();
    // const { id } = useParams();

    const transactions = [
        {
            id:1,
            time: "2024-12-17 18:00",
            type: "Deposit",
            wallet: "Spot Wallet",
            asset: "BTC",
            amount: "0,00114612",
            destination: "1D3pb...je83g",
            txid: "7592aa5...2999au",
            status: "Completed",
            statusColor: "text-green-500",
        },
        {
            id:2,
            time: "2024-12-17 18:00",
            type: "Buy",
            wallet: "Spot Wallet",
            asset: "ETH",
            amount: "0,00114612",
            destination: "1D3pb...je83g",
            txid: "7592aa5...2999au",
            status: "Pending",
            statusColor: "text-yellow-500",
        },
        {   
            id:3,
            time: "2024-12-17 18:00",
            type: "Sell",
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
            type: "Withdraw",
            wallet: "Spot Wallet",
            asset: "USDT",
            amount: "0,00114612",
            destination: "1D3pb...je83g",
            txid: "7592aa5...2999au",
            status: "Cancelled",
            statusColor: "text-red-500",
        },
    ];

    const handleTransactionDetail = (id) => {
        navigate(`/transaction/${id}`);
    };

    return (
        <div className="min-h-full">
            <h1 className="text-2xl font-bold lg:mb-6">Transaction History</h1>

            <div className="">
                <table className="w-full table-auto  overflow-x-auto text-center mt-8 mb-4 border-collapse border border-gray-300">
                    <thead className="border-y border-black bg-gray-100">
                        <tr className="text-sm lg:text-base">
                            <th className="py-2">Time</th>
                            <th className=" py-2">Type</th>
                            <th className=" py-2">Deposit Wallet</th>
                            <th className="py-2">Asset</th>
                            <th className=" py-2">Amount</th>
                            <th className=" py-2">Destination</th>
                            <th className=" py-2">TxID</th>
                            <th className=" py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr
                                key={index}
                                onClick={() => handleTransactionDetail(transaction.id)}
                                className={`cursor-pointer text-sm lg:text-base ${
                                    index % 2 === 0 ? "bg-gray-200" : "bg-white"
                                } font-semibold`}
                            >
                                <td className="px-4 py-2">{transaction.time}</td>
                                <td className="px-4 py-2">{transaction.type}</td>
                                <td className="px-4 py-2">{transaction.wallet}</td>
                                <td className="px-4 py-2">{transaction.asset}</td>
                                <td className="px-4 py-2">{transaction.amount}</td>
                                <td className="px-4 py-2">{transaction.destination}</td>
                                <td className="px-4 py-2">{transaction.txid}</td>
                                <td className={`px-4 py-2 ${transaction.statusColor}`}>
                                    {transaction.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
