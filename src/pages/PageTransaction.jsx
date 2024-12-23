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
            <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
            <table className="table-fixed w-full text-center mt-8 mb-4">
                <thead className="border-y border-black">
                    <tr>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Deposit Wallet</th>
                        <th>Asset</th>
                        <th>Amount</th>
                        <th>Destination</th>
                        <th>TxID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="space-y-2">
                    {transactions.map((transaction, index) => (
                        <tr
                            key={index}
                            onClick={() => handleTransactionDetail(transaction.id)}
                            className={`cursor-pointer ${index % 2 == 0 ? "bg-gray-200" : "bg-white"} font-semibold`}
                        >
                            <td>{transaction.time}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.wallet}</td>
                            <td>{transaction.asset}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.destination}</td>
                            <td>{transaction.txid}</td>
                            <td className={transaction.statusColor}>
                                {transaction.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
