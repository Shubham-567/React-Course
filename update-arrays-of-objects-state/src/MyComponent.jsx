import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMaker, setCarMaker] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      maker: carMaker,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMaker("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handelYearChange(event) {
    setCarYear(event.target.value);
  }

  function handelMakerChange(event) {
    setCarMaker(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.maker} {car.model}
          </li>
        ))}
      </ul>
      <input type='number' value={carYear} onChange={handelYearChange} /> <br />
      <input
        type='text'
        value={carMaker}
        onChange={handelMakerChange}
        placeholder='Enter car maker'
      />
      <br />
      <input
        type='text'
        value={carModel}
        onChange={handleModelChange}
        placeholder='Enter car model'
      />
      <br />
      <button onClick={handleAddCar}>Add New Car</button>
    </div>
  );
}

export default MyComponent;
