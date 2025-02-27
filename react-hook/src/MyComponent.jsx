import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");

  const [age, setAge] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Shubham");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>{`Name: ${name}`}</p>
      <button onClick={updateName}>Update name</button>

      <p>{`Age: ${age}`}</p>
      <button onClick={incrementAge}>Update name</button>

      <p>{`Is Employed: ${isEmployed ? "Yes" : "No"}`}</p>
      <button onClick={toggleEmployedStatus}>Toggle Employed Status</button>
    </div>
  );
}

export default MyComponent;
