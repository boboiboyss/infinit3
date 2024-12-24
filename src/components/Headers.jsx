import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import iconNotif from '../assets/icon-notif.png'
import profile from '../assets/profile.png'
export default function Headers() {
    return (
      <header className="bg-white mb-6">
        <div className="flex items-center justify-between">
          <div className='flex items-center justify-center gap-x-10'>
            <Link to={'/'}>
                <img src={logo} alt="Logo" className="h-16" />
            </Link>
{/* 
            <nav className="flex space-x-10"> 
                <a href="#" className="hover:text-blue-500">Invest</a>
                <a href="#" className="hover:text-blue-500">Insights</a>
                <a href="#" className="hover:text-blue-500">Ecosystem</a>
                <a href="#" className="hover:text-blue-500">About</a>
            </nav> */}
          </div>

          <div className="flex items-center space-x-5"> 
            <img src={iconNotif} className="w-6 h-6 rounded-full" alt="icon-notif" />
            <img src={profile} className='w-14 h-14 rounded-full object-cover' alt='profile' />
          </div>
        </div>
      </header> 
    )
}