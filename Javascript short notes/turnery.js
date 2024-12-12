let age = 16;
let name = age < 12 ? "Yash" : "Shubham";
// let name = if age less then 12 then name is "Yash" Otherwise name is "Shubham";

let name2 = age < 12 && "Yash";
// let name2 = age less then 12 than name is "Yash";

let name3 = age < 12 || "Yash";
// let name3 = age greater then 12 than name is "Yash";
// || This will do opposite of the given condition

// we use turnery operator to minimize the line of code in if else block

// instead of writing like this:

// if (age < 12) {
//     name = "Yash";
// } else {
//     name = "Shubham";
// }

// we will use this:

// name = age < 12 ? "Yash" : "Shubham";
