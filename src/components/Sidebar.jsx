import { Link, useLocation } from "react-router-dom";
import { RiHandCoinLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { FcSupport } from "react-icons/fc";
import productSidebar from '../assets/product-sidebar.png'
import addressSidebar from '../assets/address-sidebar.png'
import bankSidebar from '../assets/bank-sidebar.png'
import documentSidebar from '../assets/document-sidebar.png'
import accountSidebar from '../assets/account-sidebar.png'
import contactSidebar from '../assets/contact-sidebar.png'
import portoSidebar from '../assets/porto-sidebar.png'
import transactionSidebar from '../assets/transaction-sidebar.png'


export default function Sidebar() {
  const location = useLocation();
  console.log("Current Path:", location.pathname);


  return (
    <div className="flex flex-col px-4 w-[260px]">
      <div className="flex-1">
        <nav className="grid items-start text-md font-medium  border-r bg-muted/40 border-gray-900">
          <Link
            to="/home"
            className={`flex items-center gap-3 rounded-xl py-3 ${
              location.pathname === "/home"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3" :  location.pathname === "/"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3" 
                : "text-muted-foreground"
            } transition-all hover:text-primary`}
          >
            <img src={productSidebar} alt="product-sidebar" className="h-8"  />
            Product
          </Link>
          <Link
            to="/address-book"
            className={`flex items-center gap-3 rounded-xl py-3 ${
              location.pathname === "/address-book"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3"
                : "text-muted-foreground"
            } transition-all hover:text-primary`}
          >
            <img src={addressSidebar} alt="address-sidebar" className="h-8" />
            Address Book
          </Link>
          <Link
            to="/bank-details"
            className={`flex items-center gap-3 rounded-xl py-3 ${
              location.pathname == "/bank-details"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3"
                : "text-muted-foreground"
            } transition-all hover:text-primary`}
          >
            <img src={bankSidebar} alt="bank-sidebar" className="h-8" />
             Bank Details
          </Link>
          <Link
            to="/documents"
            className={`flex items-center gap-3 rounded-xl py-3 ${
              location.pathname == "/documents"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3"
                : "text-muted-foreground"
            } transition-all hover:text-primary`}
          >
            <img src={documentSidebar} alt="document-sidebar" className="h-8" />
             Documents
          </Link>
          <Link
            to="/account-settings"
            className={`flex items-center gap-3 rounded-xl py-3 ${
              location.pathname == "/account-settings"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3"
                : "text-muted-foreground"
            } transition-all hover:text-primary`}
          >
            <img src={accountSidebar} alt="account-sidebar" className="h-8" />
             Account Settings
          </Link>
          <Link
            to="/contact-support"
            className={`flex items-center gap-3 rounded-xl py-3 ${
              location.pathname == "/contact-support"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3"
                : "text-muted-foreground"
            } transition-all hover:text-primary`}
          >
            <img src={contactSidebar} alt="contact-sidebar" className="h-8" />
             Contact Support
          </Link>
          <Link
            to="/portofolio"
            className={`flex items-center gap-3 rounded-xl py-3 ${
              location.pathname == "/portofolio"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3"
                : "text-muted-foreground"
            } transition-all hover:text-primary`}
          >
            <img src={portoSidebar} alt="contact-sidebar" className="h-8" />
             Portofolio
          </Link>

          <Link
            to="/transaction"
            className={`flex items-center gap-3 rounded-xl py-3 ${
              location.pathname == "/transaction"
                ? "bg-[#C5D2F7] text-primary pl-6 mr-3"
                : "text-muted-foreground"
            } transition-all hover:text-primary`}
          >
            <img src={transactionSidebar} alt="contact-sidebar" className="h-8" />
             Transaction
          </Link>
        </nav>
      </div>
    </div>
  );
}