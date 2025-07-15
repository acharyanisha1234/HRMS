import { useNavigate } from "react-router-dom";
export default function LogoutButton() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/")

    };
    return (
        <button
          type="Logout"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-green-700 hover:text-black transition hover:cursor-pointer text-xl"
        >
          Logout
        </button>
    )
}