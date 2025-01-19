// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-render when it's value changes.
//
//            Use this when you want a component to "remember" some information,
//            but you don't want that information to trigger new re-render.

//           It's helpful for:
//           1. Accessing/Interacting with DOM element
//           2. Handling Focus, Animation, and Transitions
//           3. Managing Timers and Intervals

// useRef() = returns a ref object with a single 'current' property,
//            initially set to the initial value you provided.
//
//            That 'current' property can store:
//            1. value              3. object
//            2. array              4. html element

//            To store html element in current property use the ref attribute: <input ref={inputRef1}/>



import React, { useState, useEffect, useRef } from "react";

function MyComponent() {

    // const [count, setCount] = useState(1);

    // const countRef = useRef(0);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleClick1() {
        // setCount((c) => c + 1);
        // console.log(`Button was clicked ${count} times.`);

        // countRef.current++;
        // console.log(`Button was clicked ${countRef.current} times.`);

        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }


    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }


    return (
        <div>
            <div className="box">
                <button onClick={handleClick1}>
                    Click Me!
                </button>

                <input ref={inputRef1} type="text" placeholder="Enter Your Name" />
            </div>

            <div className="box">
                <button onClick={handleClick2}>
                    Click Me!
                </button>

                <input ref={inputRef2} type="text" placeholder="Enter Your Name" />
            </div>

            <div className="box">
                <button onClick={handleClick3}>
                    Click Me!
                </button>

                <input ref={inputRef3} type="text" placeholder="Enter Your Name" />
            </div>
        </div>
    )
}

export default MyComponent;