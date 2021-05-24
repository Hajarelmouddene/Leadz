import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";
import Dashboard from "./Leads/Dashboard";
import { Provider } from "react-redux";
import store from "../reducers/store";

const App = () => {
  const [fetchedData, setFecthedData] = useState(null);

  return (
    <Provider store={store}>
      <Header />
      <Dashboard />
    </Provider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
