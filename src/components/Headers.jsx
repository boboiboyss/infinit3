import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
// import { useParams } from "react-router-dom";
import iconNotif from "../assets/icon-notif.png";
import profile from "../assets/profile.png";
import React, { useState } from "react";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    Navigate("/login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Product", path: ["/product", "/", `/product/${id}`] },
    { name: "Address Book", path: "/address-book" },
    { name: "Bank Details", path: ["/bank-details", "/add-bank-account"] },
    { name: "Documents", path: "/documents" },
    { name: "Account Settings", path: "/account-settings" },
    { name: "Contact Support", path: "/contact-support" },
    { name: "Portfolio", path: "/portofolio" },
    { name: "Transaction", path: ["/transaction", `/transaction/${id}`] },
  ];

  const isActive = (path) => {
    if (Array.isArray(path)) {
      return path.some(
        (p) =>
          location.pathname === p || location.pathname.startsWith(`${p}/`)
      );
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="bg-white shadow mb-6">
      <div className="px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16" />
        </Link>
        <div className="flex items-center space-x-5">
          <img src={iconNotif} className="w-6 h-6" alt="Notification Icon" />
          <img
            src={profile}
            className="w-10 h-10 rounded-full object-cover hidden lg:block"
            alt="Profile"
          />
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="bg-gray-100 md:hidden">
          <ul className="space-y-2 px-4 py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={Array.isArray(item.path) ? item.path[0] : item.path}
                  className={`block px-4 py-2 rounded-lg font-medium ${
                    isActive(item.path)
                      ? "bg-primary font-[1000]"
                      : "text-gray-700 hover:bg-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/"
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 rounded-lg font-medium text-gray-700"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

