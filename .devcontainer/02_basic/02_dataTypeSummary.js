/*
Primitive Data Types:

Number -> Example: 42
String -> Example: "Hello, World"
Boolean -> Example: true or false
null -> Example: null
undefined -> Example: undefined
Symbol -> Example: Symbol("unique")

Non-Primitive Data Types:

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) {
 return x + y; }
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Types of memory

Stack (Primitive Datatypes) - It givex a copy of the data type and not the original value
Heap (Reference/Non primitive Datatypes) - It gives the original reference to value */

//let nameOfSchool = "khalsa college"

//let nameOfAnotherSchool = "LPU"

//nameOfSchool = "jagat jyoti school"
//console.log(nameOfSchool);

let userOne  = {
    name:"jassi",
    age:"36",
    city:"amritsar"
}

let userTwo =  userOne

userTwo.age = "35"
console.table([userOne]);
console.table([userTwo]);
