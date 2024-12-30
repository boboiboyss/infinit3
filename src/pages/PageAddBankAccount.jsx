export default function PageAddBankAccount(){
    return (
       <div className="min-h-full">
         <h1 className="text-2xl font-bold mb-5">Add Bank Account</h1>
         <div className="mb-2 space-y-2 flex flex-col">
            <label className="font-semibold">Bank Name</label>
              <div class="relative w-full rounded-xl">
                <select
                    id="last-name"
                    class="peer w-[280px] md:[w-380px] lg:w-1/3 bg-white border border-gray-700 rounded-md px-2 pt-3 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                >
                    <option>OCBC</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
              </div>
         </div>
          <div className="mb-2 space-y-2 flex flex-col">
            <label className="font-semibold">Account Holders' Name</label>
            <input placeholder="John Doe" type="text" className="p-2 rounded-lg border border-black w-[280px] md:[w-380px] lg:w-1/3" />
         </div> 
         <div className="mb-2 space-y-2  flex flex-col h-full">
            <label className="font-semibold">Account Number</label>
            <input placeholder="010203040506" type="text" className="p-2 w-[280px] md:[w-380px] lg:w-1/3 rounded-lg border border-black" />
            
         </div>
             <div className='mt-4'>
            <button className="bg-black text-white py-3 px-12 text-center rounded-xl text-sm">Add</button>
            </div>
       </div>
    )
}