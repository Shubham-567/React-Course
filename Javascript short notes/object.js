const person = {
  name: "Shubham",
  age: 20,
  isMarried: false,
};

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;

// instead of using above code we can use this

const { name, age, isMarried } = person;

// to create a copy of object you can do this:
const person2 = { person };

// to change one or two values and copy rest you can do this:
const person3 = { ...person, name: "Darshan", age: 22 };
// ...person this will make copy but, name: "Darshan" will change the name

// this can also be use for array
const names = ["Shubham", "Darshan", "Yash"];

const naems2 = [...names, "Prathamesh"];
// This will create a copy of names array like this: names + "Prathamesh"


