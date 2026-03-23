import { useState } from "react";

const STORAGE_KEY = "favorite-cats";

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  function updateFavorites(newFavorites) {
    setFavorites(newFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  }

  function addFavorite(cat) {
    if (favorites.some((item) => item.id === cat.id)) return;
    updateFavorites([...favorites, cat]);
  }

  function removeFavorite(catId) {
    updateFavorites(favorites.filter((item) => item.id !== catId));
  }

  function isFavorite(catId) {
    return favorites.some((item) => item.id === catId);
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}
