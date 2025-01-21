import PropsType from "prop-types";

// Props:   Read=-only properties that are shared between components.
//          A parent component can send data to a child component.
//          <Component key="value" />

function Student(props) {
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// Props Type:  A mechanism to ensure that the passed value is of the correct data type.
//              age: PropsType.number

Student.propsType = {
  name: PropsType.string,
  age: PropsType.number,
  isStudent: PropsType.bool,
};

// Default Props:   Default values for props in case they are not passed from the parent component
//                  name: "Guest"

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
