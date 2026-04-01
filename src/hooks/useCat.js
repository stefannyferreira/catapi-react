import { useEffect, useState } from "react";
import { getRandomCat } from "../services/catApi";

export function useCats() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadCat() {
    try {
      setLoading(true);
      setError("");

      const data = await getRandomCat();
      setCat(data);
    } catch {
      setError("Não foi possível carregar o gato.");
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
