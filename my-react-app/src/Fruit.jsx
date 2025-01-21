function Fruit() {
  const fruit1 = "Mango";
  const fruit2 = "Orange";
  const fruit3 = "Apple";
  const fruit4 = "Banana";

  return (
    <div>
      <h2>My Favorite Fruits</h2>
      <ul>
        <li>{fruit1.toUpperCase()}</li>
        <li>{fruit2.toUpperCase()}</li>
        <li>{fruit3.toUpperCase()}</li>
        <li>{fruit4.toUpperCase()}</li>
      </ul>
    </div>
  );
}

export default Fruit;
