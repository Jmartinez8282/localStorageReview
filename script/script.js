let exampleData;
let setLocalBtn = document.getElementById('setLocalBtn');
let consolelogLocalBtn = document.getElementById('consolelogLocalBtn');
let inputArea = document.getElementById('inputArea');
let sumitBtn = document.getElementById('sumitBtn');
let dropdownMenu = document.getElementById('dropdownMenu');
let elementArea1 = document.getElementById('elementArea1');
let elementArea2 = document.getElementById('elementArea2');
let clearBtn = document.getElementById('clearBtn');
let counter = 0;


if (localStorage.getItem('localArrayKey')) {
    console.log('local storage exist and has been loaded');
    exampleData = JSON.parse(localStorage.getItem('localArrayKey'))
    populateDropDownMenu();
} else {
    exampleData = [];
}

//let exampleData = ['Lincoln', 'Daniel', 'JT'];



consolelogLocalBtn.addEventListener('click', function (e) {

    let testArray = JSON.parse(localStorage.getItem('localArrayKey'));
    console.log(testArray);
});

clearBtn.addEventListener('click', function (e) {
    anakin(dropdownMenu);
    localStorage.removeItem('localArrayKey');
    exampleData = [];
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
        a.addEventListener('click', function (e) {
            checkListTitle(e.toElement.innerText)
        });
        dropdownMenu.appendChild(a);
        //element.title
    });

}
function checkListTitle(string) {
    for (let i = 0; i < exampleData.length; i++) {
        if (exampleData[i].title === string) {
            counter = i;
            loadList();
        }
    }
}


function loadList() {
    elementArea1.innerText = exampleData[counter].title;

    populateListItems(exampleData[counter].listItems);
    
    let listInputArea = document.getElementById('listInputArea');
    listInputArea.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            exampleData[counter].listItems.push(e.target.value);
            saveData();
            populateListItems(exampleData[counter].listItems);
            listInputArea.value = '';
        }
    });
}

function populateListItems(arr){
    anakin(elementArea2);
    arr.forEach(element => {
        let p = document.createElement('p');
        p.innerText = element;
        p.addEventListener('click', function (e) {
            this.remove();
        });
        elementArea2.appendChild(p);
    });
}

function anakin(chamber) {
    while (chamber.firstChild) {
        chamber.removeChild(chamber.firstChild);
    }
}
