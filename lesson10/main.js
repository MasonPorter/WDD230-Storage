const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fairbanks%20Alaska?unitGroup=us&key=4Q8UKYJEHX7HAYHK3ULAKHY3Q&contentType=json";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  };
  
getWeather();