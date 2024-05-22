export async function fetchCurrentData(search = "London") {
  try {
    const key = process.env.API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${search}&aqi=no`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function fetchForecastData(search = "London") {
  try {
    const key = process.env.API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${search}&days=3&aqi=no&alerts=no`
    );
    const data = await response.json();
    return data.forecast.forecastday;
  } catch (err) {
    throw new Error(err);
  }
}
