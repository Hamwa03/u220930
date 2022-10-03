const structure = new XMLHttpRequest();

structure.open('GET', 'structure.json');
structure.send();

const cars = new XMLHttpRequest();

cars.open('GET', 'cars.json');
cars.send();