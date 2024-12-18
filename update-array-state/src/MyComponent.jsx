import React, { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>List of Foods</h1>
      <ul>
        {foods.map((food, index) => {
          return (
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food}
            </li>
          );``
        })}
      </ul>

      <input id='foodInput' type='text' placeholder='Enter food name' />
      <br />
      <button onClick={handleAddFood}>Add Food</button>
      <br />
    </div>
  );
}

export default MyComponent;
