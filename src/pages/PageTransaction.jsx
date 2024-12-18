export default function PageTransaction(){
    return (
        <div className=" min-h-full">
            <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
            <table class="table-auto w-full text-center">
                <thead className="border-y border-black ">
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
                <tbody>
                    <tr>
                        <td>2024-12-17 18:00</td>
                        <td>Deposit</td>
                        <td>Spot Wallet</td>
                        <td>BTC</td>
                        <td>0,00114612</td>
                        <td>1D3pb...je83g</td>
                        <td>7592aa5...2999au</td>
                        <td className="text-green-500">Completed</td>
                    </tr>
                    <tr>
                        <td>2024-12-17 18:00</td>
                        <td>Deposit</td>
                        <td>Spot Wallet</td>
                        <td>ETH</td>
                        <td>0,00114612</td>
                        <td>1D3pb...je83g</td>
                        <td>7592aa5...2999au</td>
                        <td className="text-yellow-500">Pending</td>
                    </tr>
                    <tr>
                        <td>2024-12-17 18:00</td>
                        <td>Deposit</td>
                        <td>Spot Wallet</td>
                        <td>XRP</td>
                        <td>0,00114612</td>
                        <td>1D3pb...je83g</td>
                        <td>7592aa5...2999au</td>
                        <td className="text-red-500">Failed</td>
                    </tr>
                    <tr>
                        <td>2024-12-17 18:00</td>
                        <td>Deposit</td>
                        <td>Spot Wallet</td>
                        <td>USDT</td>
                        <td>0,00114612</td>
                        <td>1D3pb...je83g</td>
                        <td>7592aa5...2999au</td>
                        <td className="text-red-500">Cancelled</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}