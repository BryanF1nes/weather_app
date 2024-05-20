export default async function fetchData() {
  try {
    return "peanut butter";
  } catch (err) {
    throw Error(err);
  }
}
