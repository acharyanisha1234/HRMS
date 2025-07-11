import { Outlet } from "react-router-dom";
import Sidebar from "../components/home/sidebar";
import Topbar from "../components/home/topbar";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
          <Topbar />
            <div className="flex flex-1 overflow-hidden">
                <div>
                 <Sidebar />
                    </div>
                    <div className="flex flex-1 overflow-y-auto px-5">
                <Outlet/>
                </div>
            </div>
        </div>
    );
};