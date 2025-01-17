// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props to each level.

// We use useContext() hook to prevent Prop drilling
// prop drilling happens when we pass value through multiple components
// Component A wants to pass the value="Shubham" to Component D through props
// A -> B -> C -> D and then Component D accesses the value


// HOW TO USE useContext():
// The providerComponent will provide a value to all of it's children's

// ProviderComponent
// 1. import { CreateContext } from "react"'
// 2. export const MyContext = CreateContext();
// 3. <MyContext.Provider value={ value }>
//        <Child />
//    </MyContext.Provider>


// The ConsumerComponent is the child of ProviderComponent

// ConsumerComponents
// 1. import React, { useContext } from "react";
//    import MyContext from "./Component.jsx";
//
// 2. const value = useContext(MyContext);



import ComponentA from "./ComponentA.jsx";

function App() {

  return (
    <>
      <ComponentA />

    </>
  )
}

export default App
