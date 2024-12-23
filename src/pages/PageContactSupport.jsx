export default function PageContactSupport(){
    return (
       <div className="min-h-full">
         <h1 className="text-2xl font-bold mb-3">Contact Support</h1>
         <div className="mb-2 space-y-2 w-1/3 flex flex-col">
            <label className="font-semibold">Email Address</label>
            <input type="email" className="p-2 rounded-lg border border-black" placeholder="JohnDoe@gmail.com" />
         </div>
          <div className="mb-2 space-y-2 w-1/3 flex flex-col">
            <label className="font-semibold">Subject</label>
            <input type="text" className="p-2 rounded-lg border border-black" placeholder="Email Subject" />
         </div> 
         <div className="mb-2 space-y-2 w-1/3 flex flex-col h-full">
            <label className="font-semibold">Message</label>
            <textarea className="h-32 p-2 rounded-lg border border-black resize-none" placeholder="Message"></textarea>
            
         </div>
             <div className='mt-4'>
            <button className="bg-black text-white py-3 px-12 text-center rounded-xl text-sm font-semibold">Send</button>
            </div>
       </div>
    )
}