import ComponentC from "./ComponentC.jsx";
import React, { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";



function ComponentB() {

    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>Component B</h1>

            <h2>{`How are you ${user}`} </h2>
            <ComponentC />
        </div>
    )

}

export default ComponentB;