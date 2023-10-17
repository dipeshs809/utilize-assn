import "./App.css";

import AppLayout from "components/appLayout";
import CardList from "features/cardList";
import CreateOrder from "features/createOrder";
import React from "react";

function App() {
  return (
    <div className="App">
      <AppLayout />
      <CreateOrder />
      <CardList />
    </div>
  );
}

export default App;
