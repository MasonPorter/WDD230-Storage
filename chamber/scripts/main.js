const currentDate = new Date();
let year = currentDate.getFullYear();
let day = currentDate.toLocaleDateString('en-us', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'});
let bannerDay = currentDate.getDay();
//let bannerDay = 1;

if (bannerDay == 1) {
    document.querySelector('#meetbanner').style.display = "block";
} else if (bannerDay == 2) {
    document.querySelector('#meetbanner').style.display = "block";
} else {
    document.querySelector('#meetbanner').style.display = "none";
}

document.querySelector('#copyright').textContent = year;
document.querySelector('#lastMod').textContent = document.lastModified;
document.querySelector('#currentDate').textContent = day;
document.querySelector('#currentDatedesktopview').textContent = day;

function toggleMenu() {
    document.querySelector('#mainNav').classList.toggle('open');
    document.querySelector('#navButton').classList.toggle('open');
}

const x = document.querySelector('#navButton')
x.onclick = toggleMenu;