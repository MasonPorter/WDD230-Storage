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

const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
