// useEffect() =  React Hook that tells React to DO THIS CODE WHEN (pick one):
//                This component re-renders
//                This component mounts
//                The state of a value

// syntax:
//      useEffect(function, [dependencies]);
//
//      useEffect(() => {});                // Runs after every re-render
//      useEffect(() => {}, []);            // Runs only on mount
//      useEffect(() => {}, [value])        // Runs on mount + when value change

// USES:
// #1 Event Listeners
// #2 Dom Manipulation
// #3 Subscriptions(real - time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import { useState, useEffect } from "react";

function MyComponent2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // This will run thousands of times without useEffect
  // window.addEventListener("resize", handleResize);

  // This will run only when component is mounted
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added.");

    // for Clean up when a component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);

      console.log("Event Listener Removed.");
    };
  }, []);

  // You can have multiple useEffects in single component

  useEffect(() => {
    document.title = `${width} X ${height}`;
  }, [width, height]);

  return (
    <>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </>
  );
}

export default MyComponent2;
