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

ShowcaseList = () => {

    var ulList = document.getElementById('carList');
    ulList.innerHTML = '';

    var carInfo = JSON.parse(cars.responseText);

    carInfo.cars.forEach(cars => {
        var newList = document.createElement('li');
        newList.innerHTML = (`${cars.brand} ${cars.model} ${cars.year}`);
        ulList.appendChild(newList);
    });

}
