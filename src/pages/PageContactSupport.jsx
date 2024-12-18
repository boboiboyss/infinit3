export default function PageContactSupport(){
    return (
       <div className="min-h-full">
         <h1 className="text-2xl font-bold mb-3">Contact Support</h1>
         <div className="mb-2 space-y-2 w-1/3 flex flex-col">
            <label>Email Address</label>
            <input type="email" className="p-2 rounded-lg border border-black" />
         </div>
          <div className="mb-2 space-y-2 w-1/3 flex flex-col">
            <label>Subject</label>
            <input type="text" className="p-2 rounded-lg border border-black" />
         </div> 
         <div className="mb-2 space-y-2 w-1/3 flex flex-col h-full">
            <label>Message</label>
            <textarea className="h-32 rounded-lg border border-black resize-none"></textarea>
            
         </div>
             <div className='mt-4'>
            <button className="bg-black text-white py-3 px-12 text-center rounded-xl text-sm">Send</button>
            </div>
       </div>
    )
}