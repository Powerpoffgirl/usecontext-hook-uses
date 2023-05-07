import React, { useState } from "react";

const Component5 = ({ user }) => {
  console.log(user);
  const [newUser, setNewUser] = useState(user);
  const changeUser = () => {
    if (newUser == "Ram") setNewUser("Krishna");
    else setNewUser("Ram");
  };
  return (
    <div>
      Component5
      <p>{`Hello I am component 5 ${newUser}`}</p>
      <button onClick={() => changeUser()}>Change User</button>
    </div>
  );
};

export default Component5;
