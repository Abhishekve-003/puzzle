import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
import Quiz1 from "./quiz1";

function Logout() {
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <div className="log0">
        <div className="quiz1">
               <Quiz1/>
        </div>
        <div className="logout">
          <button
            className="btn"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Logout;
