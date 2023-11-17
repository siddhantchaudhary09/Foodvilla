import { useState } from "react";

const User = (props) => {
  const [count1, setcount] = useState(0);
  return (
    <div>
      <h1>count :{count1}</h1>
      <h1>Name : {props.name}</h1>
      <h1>Location: Dehradun</h1>
    </div>
  );
};

export default User;
