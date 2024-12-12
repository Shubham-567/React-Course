function Button() {
  const styles = {
    backgroundColor: "hsl(0, 50%, 50%)",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div>
      <button style={styles}>Click Me</button>
    </div>
  );
}

export default Button;
