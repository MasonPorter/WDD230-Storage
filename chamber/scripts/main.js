const currentDate = new Date();
let year = currentDate.getFullYear();
let day = currentDate.toLocaleDateString('en-us', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'});

document.querySelector('#copyright').textContent = year;
document.querySelector('#lastMod').textContent = document.lastModified;
document.querySelector('#currentDate').textContent = day;

function toggleMenu() {
    document.querySelector('#mainNav').classList.toggle('open');
    document.querySelector('#navButton').classList.toggle('open');
}

const x = document.querySelector('#navButton')
x.onclick = toggleMenu;