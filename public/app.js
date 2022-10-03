console.log('stable code');


const structure = new XMLHttpRequest();

structure.open('GET', 'structure.json');
structure.send();


const cars = new XMLHttpRequest();

cars.open('GET', 'cars.json');
cars.send();


structure.onload = () => {

    var divTitle = document.getElementById('title');

    var headerInfo = JSON.parse(structure.responseText);

    for (var key in headerInfo) {

        var header = document.createElement(key);

        header.innerHTML = headerInfo[key];

        divTitle.appendChild(header);
    }

}