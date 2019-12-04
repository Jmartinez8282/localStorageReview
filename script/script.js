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
let dropdownMenu = document.getElementById('dropdownMenu');
let elementArea = document.getElementById('elementAre');
let clearBtn = document.getElementById('clearBtn');

consolelogLocalBtn.addEventListener('click', function (e) {

    let testArray = JSON.parse(localStorage.getItem('localArrayKey'));
    console.log(testArray);
});

clearBtn.addEventListener('click', function (e) {
    localStorage.removeItem('localArrayKey');
    console.log(localStorage.getItem('localArrayKey'));
});




sumitBtn.addEventListener('click', function (e) {
    newList();
});
function newList() {
    let obj = {
        title: inputArea.value,
        listItems: []
    }
    exampleData.push(obj);
    saveData();
    populateDropDownMenu();
    inputArea.value = "";
}

function saveData() {
    localStorage.setItem('localArrayKey', JSON.stringify(exampleData));
}
function populateDropDownMenu() {
    anakin(dropdownMenu);
    exampleData.forEach(element => {
        let a = document.createElement('a');
        a.setAttribute('class', 'dropdown-item');
        a.setAttribute('href', '#');
        a.innerText = element.title;
        dropdownMenu.appendChild(a);
        //element.title
    });

}
function populateListItems() {

}
function anakin(chamber) {
    while (chamber.firstChild) {
        chamber.removeChild(chamber.firstChild);
    }
}
