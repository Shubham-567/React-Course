import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter-container'>
      <p className='count'>{count}</p>
      <div className='button-container'>
        <button className='decrement' onClick={decrement}>
          Decrement
        </button>
        <button className='reset' onClick={reset}>
          Reset
        </button>
        <button className='increment' onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
