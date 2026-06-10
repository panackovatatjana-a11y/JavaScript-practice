//-----------------------------------------------------
//1.Variables (var, let, const) - different data types
//-----------------------------------------------------

var myName = "Tana";  // string
let age = 38;         //number
const isStudent = true;  //boolean

console.log("Name:", myName);
console.log("Age:", age);
console.log("Student:", isStudent);

//------------------------------------------
//2. Functions (named, anonymous, built-in)
//-----------------------------------------

//Named function
function greet () {
    console.log("Hello from a named function");

}
greet();

//Anonymous function stored in a variable
const sayBye = function() {
    console.log("Goodbye from an anonymous function!");

}
sayBye();

//Built-in function (Math random)
console.log("Random number", Math.random());

//--------------------------------------------
//3. Conditional statements (if/else+switch)
//-------------------------------------------

let temperature = 15;
if (temperature > 20) {
    console.log("It's warm outside");

}else{
    console.log("It's cold outside");

}
let day = "Monday";
 
switch(day) {
    case"Monday":

    console.log("Start of the week!"); break;

    case"Friday":
    console.log("Weekend is coming!"); break;

    default:
        console.log("Just another day");
}

//----------------------------------------------
//4. Arrays (different data types)
//----------------------------------------------

let mixedArray = ["meTana", 38, true, {hobby:"coding"}];
console.log("Mixed array:", mixedArray);

//-----------------------------------------------
//5. Loop though and array
//-----------------------------------------------

let colors = ["red", "green", "blue", "purple"];
for (let i=0; i < colors.length; i++) {
    console.log("Color", colors[i]);
}

