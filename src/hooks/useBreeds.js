import { useEffect, useState } from "react";
import { getBreeds } from "../services/catApi";

export function useBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function loadBreeds() {
      const data = await getBreeds();
      setBreeds(data);
    }

    loadBreeds();
  }, []);

  return { breeds };
}
