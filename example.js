
// declare and define function
//can pass in arguments or parameters
function test(x) {
    console.log(x)
}
// run the function
test("Anything");

//String " "
const x = "String";
//declaring a variable, defining a variable
 test(x);

 //Number/Integer
 const y = 98;
 test(y);

 //booleon trade or false
 const z= true;
 test(z);

 function add(x, y){
    console.log(x + y);
 }

 //need to convert the string into a number
 let a = Number(prompt("enter a number"));
 let b =Number(prompt("enter another number"));
 add(a, b)

 function add(x,y){
    return x+y;
 }
 const sum = add (45,34);
 
 function calc(){
    const sum = add (45,34);
    console.log(sum);
 }
 calc();

function getBMI(x,y){
   return 20;
}
function check(x,y){
   if(x === "horse"){
      console.log(true);
   }
   else{ console.log("that is false")}
}
check("horse")
function complex(x,y){
   if(x=== "horse" && y === "horse"){
      console.log("that is true")
    } else{ console.log("this is false")}
}
complex("horse", "horse")

function check(x){
   if(x<=30){ conesole.log("healthy")}
   else{console.log("this is false")}

}

function init(){
   y=weight;
   z=height;
   let x = getBMI(y, z);
   check(x);
}