let names = ["Shubham", "Yash", "Prathamesh", "Shubham", "Shubham"];

// This is like for each loop it will loop through and map each item in array
names.map((name) => {
  return name + "1";
});

// in react:
names.map((name) => {
  return <h1> {name} </h1>;
});

// The Filter function is similar to map function
// It will go through each item in array
// We will put conditions in return

names.filter((name) => {
    return name !== "Shubham";
         // This is Condition;
})

// output: ["Yash", "Prathamesh"]
