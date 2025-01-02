import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-full">
      <Headers />
      <div className=" flex flex-1 overflow-auto px-6 pb-6 h-full">
        <Sidebar/> 
        <main className="flex-1 bg-white block h-full ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
