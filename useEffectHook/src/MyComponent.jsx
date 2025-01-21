// useEffect() =  React Hook that tells React to DO THIS CODE WHEN(pick one):
//                This Component re - renders
//                This Component mounts
//                The state of a value Changes

// syntax:
//      useEffect(function, [dependencies]);
//
//      useEffect(() => {});            // Runs after every re-render
//      useEffect(() => {}, []);        // Runs only on mount
//      useEffect(() => {}, [value])    // Runs on mount + when value change

// USES:
// #1 Event Listeners
// #2 Dom Manipulation
// #3 Subscriptions(real - time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  function incrementCount() {
    setCount((c) => c + 1);
  }

  function decrementCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  // Examples:

  //   useEffect(() => {
  //     document.title = `Count: ${count}`;   ---- It Will run this code every time component rerenders. ----
  //   });

  //   useEffect(() => {
  //     document.title = `My Counter`;
  //   }, []); --- Because of empty array this code will run only when it's mounted on app component ---

  //   useEffect(() => {
  //     document.title = `Count: ${count}`;
  //   }, [count]); --- This code will run every time the value of count updates ---

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count]);

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={decrementCount}>Decrement Count</button>
      <button onClick={incrementCount}>Increment Count</button> <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent;
