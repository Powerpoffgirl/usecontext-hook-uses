import { useState, createContext } from "react";
import "./App.css";
import Component1 from "./components/Component1";

export const CountryContext = createContext();

function App() {
  const [user, setUser] = useState("Ram");
  const [country, setCountry] = useState("Bharat");
  return (
    <div className="App">
      <CountryContext.Provider value={country}>
        <p>{`Hello ${user}!`}</p>
        <Component1 user={user} />
      </CountryContext.Provider>
    </div>
  );
}

export default App;

/*
Context provides a way to pass data through the component tree
without having to pass props down manually at every level.
*/
