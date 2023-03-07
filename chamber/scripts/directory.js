const url = "https://raw.githubusercontent.com/MasonPorter/WDD230-Storage/main/chamber/data/directory.json";

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displayDirectory(data.businesses);
    gridDisplayDirectory(data.businesses);
  }
  
getDirectoryData();

const displayDirectory = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let url = document.createElement('h5');
      let rank = document.createElement('h3');
  
      h2.textContent = `${business.name}`;
      address.textContent = `${business.address}`;
      phone.textContent = `${business.phone}`;
      url.textContent = `${business.url}`;
      rank.textContent = `${business.membership}`;
  
      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', business.image);
      logo.setAttribute('alt', `Logo of ${business.name}`);
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(logo);
      card.appendChild(rank);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(url);
  
      cards.appendChild(card);
    } // end of forEach loop
)} // end of function expression

const gridDisplayDirectory = (businesses) => {
    const rows = document.querySelector("table.rows");

    businesses.forEach((business) => {
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_address = document.createElement('td');
        let td_phone = document.createElement('td');
        let td_rank = document.createElement('td');

        td_name.textContent = `${business.name}`;
        td_address.textContent = `${business.address}`;
        td_phone.textContent = `${business.phone}`;
        td_rank.textContent = `${business.membership}`;

        tr.appendChild(td_name);
        tr.appendChild(td_rank);
        tr.appendChild(td_address);
        tr.appendChild(td_phone);

        rows.appendChild(tr);
  });
};

// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const displaycards = document.querySelector("div.cards");
// const displayrows = document.querySelector("div.rows");

// gridbutton.addEventListener("click", () => {
// 	// example using arrow function
// 	displaycards.classList.add("grid");
// 	displayrows.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
// 	displaycards.classList.add("list");
// 	displayrows.classList.remove("grid");
// }