const currentDate = new Date();
let year = currentDate.getFullYear();
//let lastUpdate = currentDate.toLocaleString();

document.querySelector('#copyright').textContent = year;
document.querySelector('#lastMod').textContent = document.lastModified;
//document.querySelector('#time').textContent = lastUpdate;