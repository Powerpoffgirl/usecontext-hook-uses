import { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";

function App() {
  const [user, setUser] = useState("Ram");
  return (
    <div className="App">
      <p>{`Hello ${user}!`}</p>
      <Component1 user={user} />
    </div>
  );
}

export default App;
