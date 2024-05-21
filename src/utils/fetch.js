export async function fetchCurrentData(search = "London") {
  try {
    const key = process.env.API_KEY;
    const response = await fetch(
      `${process.env.BASE_URL}current.json?key=${key}&q=${search}&aqi=no`
    );
    const data = await response.json();
    console.log(data.current);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function fetchForecastData(search = "London", days = null) {
  try {
    const key = process.env.API_KEY;
    const response = await fetch(
      `${process.env.BASE_URL}forecast.json?key=${key}&q=${search}&days=${days}&aqi=no&alerts=no`
    );
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
