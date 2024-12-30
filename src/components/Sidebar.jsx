import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
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
import iconLogout from '../assets/icon-logout.png'


export default function Sidebar() {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    Navigate("/login");
  };

  const sidebarData = [
    {
      to: "/product",
      imgSrc: productSidebar,
      label: "Product",
      pathMatch: ["/product", `/product/${id}`, "/"],
    },
    {
      to: "/address-book",
      imgSrc: addressSidebar,
      label: "Address Book",
      pathMatch: ["/address-book"],
    },
    {
      to: "/bank-details",
      imgSrc: bankSidebar,
      label: "Bank Details",
      pathMatch: ["/bank-details", "/add-bank-account"],
    },
    {
      to: "/documents",
      imgSrc: documentSidebar,
      label: "Documents",
      pathMatch: ["/documents"],
    },
    {
      to: "/account-settings",
      imgSrc: accountSidebar,
      label: "Account Settings",
      pathMatch: ["/account-settings"],
    },
    {
      to: "/contact-support",
      imgSrc: contactSidebar,
      label: "Contact Support",
      pathMatch: ["/contact-support"],
    },
    {
      to: "/portofolio",
      imgSrc: portoSidebar,
      label: "Portofolio",
      pathMatch: ["/portofolio"],
    },
    {
      to: "/transaction",
      imgSrc: transactionSidebar,
      label: "Transaction",
      pathMatch: ["/transaction", `/transaction/${id}`],
    },
  ];

  return (
    <div className="hidden lg:block px-4 w-[260px]">
      <div className="flex-1">
        <nav className="grid items-start text-md font-medium border-r bg-muted/40 border-gray-900">
          {sidebarData.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-xl py-3 ${
                item.pathMatch.includes(location.pathname)
                  ? "bg-[#C5D2F7] text-primary pl-6 mr-3"
                  : "text-muted-foreground"
              } transition-all hover:text-primary font-bold`}
            >
              <img src={item.imgSrc} alt={`${item.label}-sidebar`} className="h-8" />
              {item.label}
            </Link>
          ))}
         
          <Link
            to="/"
            onClick={handleLogout}
            className="flex items-center gap-3 rounded-xl py-3 transition-all hover:text-primary font-bold"
          >
            <img src={iconLogout} alt="icon-logout" className="h-8" />
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
}