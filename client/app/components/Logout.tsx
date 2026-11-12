import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const API =
    import.meta.env.VITE_API || "http://localhost:3003";
  const logoutfunction = async () => {
    try {
      const response = await axios.get(`${API}/user/logout`, {
        withCredentials: true,
      });

      if (response.data.status) {
        alert("Logout successful");
        navigate("/signin");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <button
        className="w-full text-left px-4 py-2 text-sm text-red-500  hover:bg-neutral-700 "
        onClick={logoutfunction}>
        Logout
      </button>
    </>
  );
};

export default Logout;
