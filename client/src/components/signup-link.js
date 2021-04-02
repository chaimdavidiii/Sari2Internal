import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupLink = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </div>
  );
};

export default SignupLink;
