
let exampleData = [ 'Lincoln','Daniel','JT'];

let setLocalBtn = document.getElementById('setLocalBtn');
let consolelogLocalBtn = document.getElementById('consolelogLocalBtn');


setLocalBtn.addEventListener('click',function(e){
localStorage.setItem('localArrayKey',exampleData);
});

consolelogLocalBtn.addEventListener('click',function(e){
console.log(localStorage.getItem('localArrayKey'));
});