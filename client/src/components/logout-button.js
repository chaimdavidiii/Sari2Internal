import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const { name } = user;
  return (
    <>
      <div className='welcomeLogin'>
        <span className='welcome'>
          Welcome,
          <br /> {name}
        </span>
        <button
          className='logout'
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default LogoutButton;
