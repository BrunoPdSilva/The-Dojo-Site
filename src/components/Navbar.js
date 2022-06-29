import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

//Styles & Images
import "./Navbar.css";
import Temple from "../assets/temple.svg";

export function Navbar() {
  const { logout, isPending } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="Dojo Logo" />
          <span>The Dojo</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>

        <li>
          {isPending && (
            <button className="btn" disabled>
              Loading
            </button>
          )}
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
