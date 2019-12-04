let exampleData;
if (localStorage.getItem('localArrayKey')) {
    console.log('local storage exist and has been loaded');
    exampleData = JSON.parse(localStorage.getItem('localArrayKey'))
} else {
    exampleData = [];
}

//let exampleData = ['Lincoln', 'Daniel', 'JT'];

let setLocalBtn = document.getElementById('setLocalBtn');
let consolelogLocalBtn = document.getElementById('consolelogLocalBtn');
let inputArea = document.getElementById('inputArea');
let sumitBtn = document.getElementById('sumitBtn');
let dropdownMenuButton = document.getElementById('dropdownMenuButton');
let elementArea = document.getElementById('elementAre');

consolelogLocalBtn.addEventListener('click', function (e) {

    let testArray = JSON.parse(localStorage.getItem('localArrayKey'));
    console.log(testArray);
});
sumitBtn.addEventListener('click',function(e){

let obj = {
title: inputArea.value,
listItems: []
} 
exampleData.push(obj);
saveData();
inputArea.value="";
});
function saveData(){
    localStorage.setItem('localArrayKey',JSON.stringify(exampleData));
}

function anakin(chamber){

}
