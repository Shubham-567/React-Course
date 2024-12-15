function Button() {
  let count = 0;

  //   const handleClick = (name) => {
  //     count++;
  //     if (count <= 3) {
  //       console.log(`${name} you clicked me ${count} time. `);
  //     } else {
  //       console.log(`${name} stop clicking me!`);
  //     }
  //   };

  const handleClick = (e) => (e.target.textContent = "Ouch 🤕");

  return (
    <>
      <button onDoubleClick={(e) => handleClick(e)}>Hello 😊</button>
    </>
  );
}

export default Button;
