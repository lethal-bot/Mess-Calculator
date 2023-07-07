'use strict'
const originalDiv = document.getElementById('row-1');
const container = document.getElementById('main_content');
const nameArr = ["Aniket","Sayak","Kunal","Avik","Papai","Sagar","Aminul","Tonmoy","Sumon","Debottam"];
nameArr.sort();

for(let i = 1; i<nameArr.length; i++){
    const clonedDiv = originalDiv.cloneNode(true);
    clonedDiv.id = clonedDiv.id.slice(0,clonedDiv.id.length-1);
    clonedDiv.id += `${(i+1)}`;
    const data = clonedDiv.querySelector('p');
    data.textContent = nameArr[i];    
    container.appendChild(clonedDiv);
}


// querryselectors

const totalAmount = document.querySelector("#total_amount");
const submit = document.querySelector(".Submit");
const totalDays = document.querySelector("#total_days");
const guestMealRate = document.querySelector(".guest_meal_rate");
const boundMeal = document.querySelector(".bound_meal_count_output");
const mealCharge = document.querySelector(".meal_charge_output");




const addNewMember = (name) =>{
    return  {        
        
    }
}

const generateUniqueId = () => {
    let unique = "";
    for( let i = 0; i<10; i++) {
        unique += Math.random()*10;
    }
    return unique;
}


const process = submit.addEventListener('click',function(e){
    console.log(totalAmount.value);
    getAllData();
});

const getAllData = () => {
    let id = "row-";
    for(let i = 1; i <= nameArr.length; i++){
        let tempid = id + i;
        getDivElement(tempid);
    }
}

const getDivElement = (id) => {
    const myDiv = document.getElementById(id);
    const clonedDiv = myDiv.cloneNode(true);

    const nameElement = clonedDiv.querySelector('.member_name');
    const name = nameElement.textContent;
    
    const mealCountElement = clonedDiv.querySelector('.member_meal_count');
    const member_meal_count = mealCountElement.value || 0;
    
    const extraMealElement = clonedDiv.querySelector('.member_extra_meal');
    const member_extra_meal = extraMealElement.value || 0;
    
    const mealOptionsElement = clonedDiv.querySelector('.meal_options');
    const meal_options = mealOptionsElement.value;
    
    console.log(name);
    console.log(member_meal_count);
    console.log(extraMealElement);
    console.log(meal_options);
}

function handleSelection(selectElement) {
    const selectedValue = selectElement.value;
    
  }