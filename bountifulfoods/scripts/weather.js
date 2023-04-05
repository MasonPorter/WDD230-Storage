const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad%20california?unitGroup=us&key=4Q8UKYJEHX7HAYHK3ULAKHY3Q&contentType=json";

async function getWeather() {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    numberCrunch(data);
};
  
getWeather();

const numberCrunch = (data) => {
  const apiTemp = data.currentConditions.temp;
  document.querySelector("#t").textContent = Math.round(apiTemp);

  let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;

  document.querySelector("#condition").textContent = data.currentConditions.conditions;
  document.querySelector("#weather_icon").src = image;
  document.querySelector("#weather_icon").alt = data.currentConditions.conditions + " icon";
};