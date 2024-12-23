import React, {useEffect} from 'react';
import logo from '../assets/logo.png';
import { useNavigate, Link, Navigate} from 'react-router-dom';

function PageLogin() {
const navigate = useNavigate();

    const handleContinue = (event) => {
        // event.preventDefault();
        
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/check-email');
    }

    const handleContinueWithGoogle = (event) => {
        // event.preventDefault();

        localStorage.setItem('isLoggedIn', 'true')
        navigate('/product');
    }

  return (
    <div className="flex flex-col min-h-screen">
      <header className='p-8'>
        <div className="">
         <Link to={'/'}>
          <img src={logo} alt="Logo" className="h-16" />
          </Link>
        </div>
      </header>

      <main className="flex items-center justify-center mt-14">
        <div className="w-full max-w-md bg-[#C5D2F7] rounded-2xl shadow-md p-10">
          <div className="mb-6">
            <h1 className="font-semibold text-2xl text-gray-800 mb-2">Sign up or Sign in</h1>
            <p className="text-sm">
              Enter your email to sign in to your account. If you don't have an account yet, one will
              be created for you.
            </p>
          </div>

          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                onClick={handleContinue}
                className="w-full bg-black text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline font-semibold"
              >
                Continue
              </button>
            </div>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-black"></div>
              <span className="mx-4 text-sm">Or</span>
              <div className="flex-grow h-px bg-black"></div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleContinueWithGoogle}
                className="w-full bg-black text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center font-semibold"
              >
                <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                >
                <path
                    fill="#EA4335"
                    d="M24 9.5c3.14 0 5.98 1.16 8.22 3.05l6.14-6.14C34.25 3.37 29.36 1.5 24 1.5 14.85 1.5 7.06 7.58 4.22 16.07l7.41 5.74C13.33 13.86 18.3 9.5 24 9.5z"
                />
                <path
                    fill="#34A853"
                    d="M24 46.5c5.45 0 10.33-2.09 14.02-5.52l-7.36-5.79c-1.89 1.26-4.32 2.01-6.66 2.01-5.58 0-10.32-3.76-12.02-8.82l-7.48 5.76c2.9 7.23 10.05 12.36 18.5 12.36z"
                />
                <path
                    fill="#FBBC05"
                    d="M43.92 24.47c0-1.47-.15-2.89-.43-4.25H24v8.02h11.16c-.48 2.43-1.92 4.5-3.92 5.9l7.36 5.79c4.29-3.96 6.32-9.82 6.32-15.46z"
                />
                <path
                    fill="#4285F4"
                    d="M11.84 25.56a13.15 13.15 0 010-3.12l-7.42-5.74A22.45 22.45 0 003 24c0 3.6.85 7.01 2.42 10.04l7.42-5.74z"
                />
                </svg>

                Continue With Google
              </button>
              <p className="my-5 text-sm">
                By continuing, you aggree to Infinit3's{' '}
                <span className="underline">Privacy Policy</span> and{' '}
                <span className="underline">Terms of Service</span>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PageLogin;