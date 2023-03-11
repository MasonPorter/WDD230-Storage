const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Meridian%20Idaho?unitGroup=us&key=4Q8UKYJEHX7HAYHK3ULAKHY3Q&contentType=json";

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
  const windspeed = data.currentConditions.windspeed;

  let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;

  let chill = Math.round(
    35.74 + 0.6215 * apiTemp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * apiTemp * Math.pow(windspeed, 0.16)
  );

  document.querySelector("#wc").textContent = chill;
  document.querySelector("#ws").textContent = data.currentConditions.windspeed;
  document.querySelector("#condition").textContent =
    data.currentConditions.conditions;
  document.querySelector("#weather_icon").src = image;
  document.querySelector("#weather_icon").alt =
    data.currentConditions.conditions + " icon";
};