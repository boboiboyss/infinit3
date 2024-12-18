import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
export default function Headers() {
    return (
      <header className="bg-white">
        <div className="flex items-center justify-between">
          <div className='flex items-center justify-center gap-x-10'>
            <Link to={'/login'}>
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

          <div> 
            <img src={profile} className='w-14 h-14 rounded-full object-cover' alt='profile' />
          </div>
        </div>
      </header> 
    )
}