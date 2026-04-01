import { useEffect, useRef, useState } from "react";
import { getRandomCat } from "../services/catApi";

export function useCats() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasLoadedInitially = useRef(false);
  const requestIdRef = useRef(0);

  async function loadCat(breedId = "") {
    const requestId = ++requestIdRef.current;

    try {
      setLoading(true);
      setError("");

      const data = await getRandomCat(breedId);

      if (requestId !== requestIdRef.current) return;

      setCat(data);
    } catch {
      if (requestId !== requestIdRef.current) return;

      setError("Não foi possível carregar o gato.");
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    if (hasLoadedInitially.current) return;

    hasLoadedInitially.current = true;
    loadCat();
  }, []);

  return {
    cat,
    loading,
    error,
    loadCat,
  };
}
