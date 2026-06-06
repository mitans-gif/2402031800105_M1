let heightinput =document.querySelector(".height");
let weightinput=document.querySelector(".weight");
const calculate=document.querySelector(".calculate");
let bmiresult=document.querySelector(".bmi-result");
let category=document.querySelector(".bmi-category");
const resetbtn=document.querySelector(".reset");
let invalid1=document.querySelector(".invalid1");
let invalid2=document.querySelector(".invalid2");
let BMI=0;
resetbtn.classList.add("hide");
invalid1.classList.add("hide");
invalid2.classList.add("hide");
calculate.addEventListener("click",()=>{
    let haserror=false;
    if(heightinput.value==""){
        invalid1.classList.remove("hide");
        haserror=true;
    }else{
        invalid1.classList.add("hide");
    }   

     if(weightinput.value==""){
        invalid2.classList.remove("hide");
        haserror=true;
        return;
    }else{
        invalid2.classList.add("hide");
    }
    if(haserror){
        return;
    }
   
   
         if(heightinput.value <= 0 || weightinput.value <= 0){
    bmiresult.innerText = "Please enter valid values";
     return;
        }
    
    const height=Number(heightinput.value);
    const weight=Number(weightinput.value);
    const heightmeter=height/100;
   BMI=weight/(heightmeter*heightmeter);
    bmiresult.innerText="Your BMI Is "+BMI.toFixed(2);
    if(BMI< 18.5){
    category.innerText = "Underweight";
        }
else if(BMI < 25){
    category.innerText = "Normal Weight";
        }
else if(BMI < 30){
    category.innerText = "Overweight";
        }
else{
    category.innerText = "Obese";
        }

    resetbtn.classList.remove("hide");
})
resetbtn.addEventListener("click",()=>{
    heightinput.value = "";
    weightinput.value = "";

    bmiresult.innerText="";
    category.innerText="";

    invalid1.classList.add("hide");
    invalid2.classList.add("hide");

    resetbtn.classList.add("hide");
})