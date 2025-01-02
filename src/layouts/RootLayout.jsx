import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-full">
      <Headers />
      <div className="flex-1 overflow-auto px-6 pb-6 h-full sticky top-0">
        <Sidebar/> 
        <main className="flex-1 bg-white block h-full sticky ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
