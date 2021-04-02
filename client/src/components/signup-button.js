import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className='signup'
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Get Started
    </button>
  );
};

export default SignupButton;
