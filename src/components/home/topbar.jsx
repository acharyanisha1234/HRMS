import { FaUsersGear } from "react-icons/fa6";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
export default function Topbar() {
    const basecss = "cursor-pointer text-2xl";
    return (
        <div className="flex justify-between">
            <div className=" flex items-center px-2 gap-2.5">
                <FaUsersGear className="cursor-pointer text-4x1"/>
                <h1 className="text-3xl text-black font-bold">HRMS PORTAL</h1>
            </div>
          <div className="flex items-center justify-between text-5xl gap-6 mr-4">
        <FaSearch className={`${basecss}`} />
        <FaBell className={`${basecss}`} />
        <FaUser className={`${basecss}`} />
         </div>
        </div>

    )
}