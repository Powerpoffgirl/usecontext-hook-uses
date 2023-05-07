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
