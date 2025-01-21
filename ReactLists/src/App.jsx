import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 45 },
    { id: 3, name: "Orange", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "Pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Potatoes", calories: 110 },
    { id: 7, name: "Celery", calories: 15 },
    { id: 8, name: "Carrots", calories: 25 },
    { id: 9, name: "Corn", calories: 63 },
    { id: 10, name: "Broccoli", calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category='Fruits' />}
      {vegetables.length > 0 && (
        <List items={vegetables} category='Vegetables' />
      )}
      {fruits.length > 0 && <List items={fruits} category='Fruits' />}
      {vegetables.length > 0 && (
        <List items={vegetables} category='Vegetables' />
      )}
      {fruits.length > 0 && <List items={fruits} category='Fruits' />}
      {vegetables.length > 0 && (
        <List items={vegetables} category='Vegetables' />
      )}
    </>
  );
}

export default App;

// fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical Sort
// fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical Sort
// fruits.sort((a, b) => a.calories - b.calories); // Numeric Ascending Sort
// fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric Descending Sort

// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

// const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);
