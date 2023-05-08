import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
// import "./home.css";
import Login from "./login";
import Logout from "./logout";

function Home() {
  // const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <div className="main">
        <div className="use">
          {isAuthenticated && (
            <div className="logout log0">
              <p>{user.name}</p>
            </div>
          )}
        </div>
        {isAuthenticated ? <Logout /> : <Login />}
      </div>
    </>
  );
}

export default Home;
