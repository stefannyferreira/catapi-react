const API_KEY = import.meta.env.VITE_CAT_API_KEY;
const BASE_URL = "https://api.thecatapi.com/v1";

export async function catClient(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao consumir TheCatAPI");
  }

  return response.json();
}
