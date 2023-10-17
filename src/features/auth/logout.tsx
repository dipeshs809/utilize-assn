import { useAppDispatch } from "app/hooks";
import { logout } from "app/slice/auth";
import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

const Logout = () => {
  const dispatch = useAppDispatch();
  const handleSuccess = () => {
    dispatch(logout());
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId as string}
        buttonText="Logout"
        onLogoutSuccess={handleSuccess}
      />
    </div>
  );
};

export default Logout;
