import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-full p-6">
      <Headers />
      <div className="flex flex-1 overflow-x-auto">
        <Sidebar/> 
        <main className="flex-1 bg-white ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
