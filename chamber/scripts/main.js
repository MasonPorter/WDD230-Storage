const currentDate = new Date();
let year = currentDate.getFullYear();
let day = currentDate.toDateString();

document.querySelector('#copyright').textContent = year;
document.querySelector('#lastMod').textContent = document.lastModified;
document.querySelector('#currentDate').textContent = day;