import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-full p-6">
      <Headers />
      <div className="flex flex-1">
        <Sidebar className="w-66 bg-gray-200" /> 
        <main className="flex-1 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
