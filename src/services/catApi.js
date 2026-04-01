import { catClient } from "../api/catClient";

const BASE_URL = "https://api.thecatapi.com/v1";

export async function getRandomCat(breedId = "") {
  const url = breedId
    ? `${BASE_URL}/images/search?breed_ids=${breedId}`
    : `${BASE_URL}/images/search?has_breeds=1&limit=1`;

  const data = await catClient(url);
  return data[0];
}

export async function getBreeds() {
  return catClient(`${BASE_URL}/breeds`);
}
