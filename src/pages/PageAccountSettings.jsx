export default function PageAccountSettings(){
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
            <h1 className="text-xl font-bold mb-3">User Preference</h1>
            <div className="flex items-center justify-between">
                <span>Email</span>
                <span>audi.hagi2002@gmail.com</span>
            </div>
            <div className="flex items-center justify-between">
                <span>Birthdate</span>
                <span>1 September 2002</span>
            </div>
            <h1 className="text-xl font-bold my-3">Investor Details</h1>
            <div className="flex items-center justify-between">
                <span>Investor Type</span>
                <span>-</span>
            </div>
            <div className="flex items-center justify-between">
                <span>Legal Name</span>
                <span>-</span>
            </div> 
             <div className="flex items-center justify-between">
                <span>Country of Residence</span>
                <span>-</span>
            </div>                
        </div>  
    )
}