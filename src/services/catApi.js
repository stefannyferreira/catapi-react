import { catClient } from "../api/catClint";

export async function getRandomCat() {
  const data = await catClient("images/search");
  return data[0];
}

export async function getBreeds() {
  return catClient("breeds");
}
