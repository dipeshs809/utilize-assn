import "./App.css";

import { useAppSelector } from "app/hooks";
import { selectLogin } from "app/slice/auth";
import { initializeState } from "app/slice/manageOrders";
import { store } from "app/store";
import AppLayout from "components/appLayout";
import Login from "features/auth/login";
import CardList from "features/cardList";
import CreateOrder from "features/createOrder";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";

const clientId = process.env.REACT_APP_CLIENT_ID;

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  store.dispatch(initializeState());
  const isUserLoggedIn = useAppSelector(selectLogin);
  return (
    <div className="App">
      {isUserLoggedIn ? (
        <>
          <AppLayout />
          <CreateOrder />
          <CardList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
