import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    maker: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakerChange(event) {
    setCar((c) => ({ ...c, maker: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.maker} {car.model}
      </p>

      <label>
        Car Year:
        <input type='number' value={car.year} onChange={handleYearChange} />
      </label>

      <br />
      <br />

      <label>
        Car Maker:
        <input type='text' value={car.maker} onChange={handleMakerChange} />
      </label>

      <br />
      <br />

      <label>
        Car Model:
        <input type='text' value={car.model} onChange={handleModelChange} />
      </label>
    </div>
  );
}

export default MyComponent;
