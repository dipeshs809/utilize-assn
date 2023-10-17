import "./App.css";

import { useAppSelector } from "app/hooks";
import { selectLogin } from "app/slice/auth";
import { initializeState } from "app/slice/manageOrders";
import { store } from "app/store";
import AppLayout from "components/appLayout";
import CardList from "features/cardList";
import CreateOrder from "features/createOrder";
import Login from "features/login";
import React from "react";

function App() {
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
