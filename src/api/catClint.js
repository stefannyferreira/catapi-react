export async function catClient(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro na API");
  }

  return response.json();
}
