import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

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
    <>
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
    </>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
