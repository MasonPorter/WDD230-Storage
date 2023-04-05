const currentDate = new Date();
let year = currentDate.getFullYear();

document.querySelector('#copyright').textContent = year;
document.querySelector('#lastMod').textContent = document.lastModified;