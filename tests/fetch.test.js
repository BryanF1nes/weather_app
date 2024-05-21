import { fetchCurrentData, fetchForecastData } from "../src/utils/fetch";

test("Does fetch exist", () => {
  expect(fetchCurrentData);
});

test("Does fetch retrieve data", async () => {
  const data = await fetchCurrentData("current.json");
  expect(data).toBe(data);
});

test("Does search paramater work", async () => {
  const data = await fetchCurrentData("Virginia");
  expect(data.location.name).toMatch("Virginia Beach");
});

test("Does fetch forecast exist", () => {
  expect(fetchForecastData);
});

test("Does fetch forecast retrieve forecast data", async () => {
  const data = await fetchForecastData("Virginia", 3);
  expect(data.forecast.forecastday[0].date).toMatch("2024-05-21");
});
