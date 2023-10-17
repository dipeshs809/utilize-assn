import { useAppDispatch } from "app/hooks";
import { logout } from "app/slice/auth";
import React from "react";
import { GoogleLogout } from "react-google-login";

import secrets from "../../env/googleAuth.json";

const Logout = () => {
  const dispatch = useAppDispatch();
  const handleSuccess = () => {
    dispatch(logout());
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={secrets.web.client_id}
        buttonText="Logout"
        onLogoutSuccess={handleSuccess}
      />
    </div>
  );
};

export default Logout;
