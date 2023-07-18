'use strict'
const originalDiv = document.getElementById('row-1');
const container = document.getElementById('main_content');
const nameArr = ["Aniket","Sayak","Kunal","Avik","Papai","Sagar","Aminul","Tonmoy","Sumon","Debottam","Aditya"];
nameArr.sort();

for(let i=0; i<nameArr.length;i++){
    const html = `
    <div id="row-1" class="row">
        <p class="member_name" id="member${i+1}_Name">${nameArr[i]}</p>
        <select name="meal options" class="meal_options" id="member${i+1}_meal_options" onchange="">
            <option value="guest meal">guest meal</option>
            <option value="bound meal">bound meal</option>
        </select>
        <input type="number" name="member_meal_count" class="member_meal_count" id="member${i+1}_meal_count" placeholder="total meals">
        <input type="number" name="member_extra_meal" class="member_extra_meal" id="member${i+1}_extra_meal" placeholder="extra meals">
        <div class="output_meal_cost" id="member${i+1}_meal_cost">-</div>
    </div>
    `
    container.insertAdjacentHTML('beforeend',html);
}

// for(let i = 0; i<nameArr.length; i++){
//     const clonedDiv = originalDiv.cloneNode(true);
//     clonedDiv.id = clonedDiv.id.slice(0,clonedDiv.id.length-1);
//     clonedDiv.id += `${(i+2)}`;
//     const data = clonedDiv.querySelector('p');
//     data.textContent = nameArr[i];    
//     container.appendChild(clonedDiv);
// }




// querryselectors

const totalAmount = document.querySelector("#total_amount");
const submit = document.querySelector(".Submit");
const totalDays = document.querySelector("#total_days");
const guestMealRate = document.querySelector("#guest_meal_rate");
const boundMeal = document.querySelector("#bound_meal_count_output");
const mealCharge = document.querySelector("#meal_charge_output");



//submit functionality
const process = submit.addEventListener('click',function(){
    //guest meal rates
    const totalAmountValue = totalAmount.value;
    
    //total amount spend
    const guestMealRateValue = guestMealRate.value;
    
    //bound meal//
    const totalDaysValue = totalDays.value;
    if(totalDaysValue>31)alert("Total days cannot be more than 31");
    else{
        const boundMealValue = Number((totalDays.value*(4/3)).toFixed(2));
        boundMeal.innerText = (totalDays.value*(4/3)).toFixed(2);
    }

    ////// array of objects ////////
    const objArr = [];

    for(let i=0;i<nameArr.length;i++){
        const obj = {
            memberName : document.querySelector(`#member${i+1}_Name`).textContent,
            mealOption : document.querySelector(`#member${i+1}_meal_options`).value,
            mealCount : document.querySelector(`#member${i+1}_meal_count`).value,
            extraMeal : document.querySelector(`#member${i+1}_extra_meal`).value,
            mealCost : document.querySelector(`#member${i+1}_meal_cost`)
        };
        objArr.push(obj);
    }
    ///////////////////////////////////////////

    
    
})
