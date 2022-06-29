import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//Styles & Images
import "./Navbar.css";
import Temple from "../assets/temple.svg";

export function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="Dojo Logo" />
          <span>The Dojo</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </>
        )}

        <li>
          {user && (
            <div>
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
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
