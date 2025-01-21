import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ff0000");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const copyColor = (event) => {
    console.log({ color }); // add copy functionality on clicking the color
    console.log({ event });
  };

  return (
    <div id='color-picker-container'>
      <h1>Color Picker</h1>
      <div
        className='color-container'
        style={{ backgroundColor: color }}
        onClick={copyColor}>
        <p className='color-name'>{color}</p>
      </div>
      <label>Select a color:</label>
      <input type='color' value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
