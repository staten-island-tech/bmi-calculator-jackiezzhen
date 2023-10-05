const n = (prompt("Please Provide Your Name"));
const cm =Number(prompt("Hello, " + n + " please provide your height in CENTIMETERS"));
console.log("Height of " + cm + " Centimeters");
const kg =Number(prompt("Hello, " + n + " please provide your height in KILOGRAMS"));
console.log("Weight of " + kg + " Kilgrams");

function value(){
   const height= (cm*0.01);
   const bmi = kg/(height*height);
   return bmi;
}

function declareBMI(bmi){
   
   if(bmi <= 18.5){
      console.log(n + ", with a BMI of " + bmi + ", you are underweight");}
      else if(bmi >= 18.5 && bmi < 24.9){
         console.log(n + ", with a BMI of " + bmi + ", you are averagely weighted");}     
      else if (bmi >= 25 && bmi < 30){
         console.log(n + ", with a BMI of " + bmi + ", you are overweight");}
   else{
      console.log(n + ", with a BMI of " + bmi + ", you are obese");
   }
}
const bmi=value();
declareBMI(bmi)