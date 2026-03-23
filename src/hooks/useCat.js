import { useEffect, useState } from "react";
import { getRandomCat } from "../services/catApi";

export function useCats() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadCat(breedId = "") {
    try {
      setError("");
      const data = await getRandomCat(breedId);
      setCat(data);
    } catch {
      setError("Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCat();
  }, []);

  return {
    cat,
    loading,
    error,
    loadCat,
  };
}
