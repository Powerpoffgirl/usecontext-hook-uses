import React, { useContext, useState } from "react";
import { CountryContext } from "../App";

const Component5 = ({ user }) => {
  const country = useContext(CountryContext);
  console.log(CountryContext);
  const [newUser, setNewUser] = useState(user);
  const changeUser = () => {
    if (newUser === "Ram") setNewUser("Krishna");
    else setNewUser("Ram");
  };
  return (
    <div>
      Component5
      <p>{`Hello I am component 5 ${newUser}. I am from ${country}`}</p>
      <button onClick={() => changeUser()}>Change User</button>
    </div>
  );
};

export default Component5;
