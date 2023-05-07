import React from "react";
import Component2 from "./Component2";

const Component1 = ({ user }) => {
  return (
    <div>
      Component1
      <Component2 user={user}/>
    </div>
  );
};

export default Component1;
