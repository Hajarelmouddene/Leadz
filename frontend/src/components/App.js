import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";
import Dashboard from "./Leads/Dashboard";
import { Provider } from "react-redux";
import store from "../reducers/store";

const App = () => {
  const [fetchedData, setFecthedData] = useState(null);

  useEffect(() => {
    fetch("api/lead")
      .then((res) => {
        if (res.status > 400) {
          console.log("there are no leads in our database");
        }
        return res.json();
      })
      .then((result) => setFecthedData(result));
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <Dashboard />
      {fetchedData && (
        <ul>
          {fetchedData.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name} - {contact.email}
              </li>
            );
          })}
        </ul>
      )}
    </Provider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
