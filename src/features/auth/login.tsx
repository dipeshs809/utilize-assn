import { useAppDispatch } from "app/hooks";
import { login } from "app/slice/auth";
import React from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";

import secrets from "../../env/googleAuth.json";

const Login = () => {
  const dispatch = useAppDispatch();
  const handleSuccess = (response: GoogleLoginResponse) => {
    const payload = {
      name: response.getBasicProfile().getGivenName(),
      image: response.getBasicProfile().getImageUrl(),
    };
    dispatch(login(payload));
    console.log(response);
  };
  const handleFailure = (error: any) => {
    alert("Login failed");
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={secrets.web.client_id}
        buttonText="Login"
        onSuccess={(response) => handleSuccess(response as GoogleLoginResponse)}
        onFailure={handleFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
