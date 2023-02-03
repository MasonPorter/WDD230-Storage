const currentDate = new Date();
let year = currentDate.getFullYear();
let lastUpdate = currentDate.toLocaleString();
let lastModified = currentDate(document.lastModified);

document.querySelector('#copyright').textContent = year;
document.querySelector('#time').textContent = lastUpdate;
document.querySelector('#LastMod').textContent = lastModified;