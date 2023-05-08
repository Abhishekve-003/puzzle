import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="login">
        <h1>Welcome to Puzzle Game</h1>
        

        <div className="btn-0">
          <button className="btn" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </div>
        
      </div>
      <div className="loginpara">
      <p>For correct answer  score = +1</p>
      <p>For incorrect answer  score = -1</p>
      </div>
      
    </>
  );
}

export default Login;
