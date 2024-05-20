import fetchData from "../src/utils/fetch";

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch("error");
  }
});
