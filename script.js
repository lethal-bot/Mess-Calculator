'use strict'
const originalDiv = document.getElementById('row-');
const container = document.getElementById('main_content');
const nameArr = ["Aniket","Sayak","Kunal","Avik","Papai","Sagar","Tonmoy","Sumon","Debottam"];
nameArr.sort();

for(let i = 0; i<nameArr.length; i++){
    const clonedDiv = originalDiv.cloneNode(true);
    clonedDiv.id += `${(i+1)}`;
    const data = clonedDiv.querySelector('p');
    data.textContent = nameArr[i];    
    container.appendChild(clonedDiv);
    console.log(i);
}