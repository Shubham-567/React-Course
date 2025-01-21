import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name='Shubham' age={21} isStudent={true} />
      <Student name='Prathamesh' age={20} isStudent={true} />
      <Student name='Bob' age={36} isStudent={false} />
      <Student name='Yash' age={20} isStudent={true} />
      <Student name='Ron' />
    </>
  );
}

export default App;
