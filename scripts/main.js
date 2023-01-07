const currentDate = new Date();
let year = currentDate.getFullYear();
let lastUpdate = currentDate.toLocaleString();

document.querySelector('#copyright').textContent = year;
document.querySelector('#time').textContent = lastUpdate;