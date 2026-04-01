import styled from "styled-components";
import { useMemo, useState } from "react";

import { useCats } from "../hooks/useCat";
import { useBreeds } from "../hooks/useBreeds";
import { useFavorites } from "../hooks/useFavorites";

import ControlsBar from "../components/ControlsBar/ControlsBar";
import CatCard from "../components/CatCard/CatCard";
import FavoritesPanel from "../components/FavoritesPanel/FavoritesPanel";
import { Header } from "../components/Header/Header";

const Page = styled.div`
  min-height: 100vh;
  background: #eceeef;
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #d6dbde;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 16px;
  }
`;
function HomeView() {
  const { cat, loading, error, loadCat } = useCats();
  const { breeds } = useBreeds();
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [selectedBreed, setSelectedBreed] = useState("");
  const [activePanel, setActivePanel] = useState("search");

  const selectedBreedData = useMemo(() => {
    return breeds.find((breed) => breed.id === selectedBreed) || null;
  }, [breeds, selectedBreed]);

  function handleSearch(breedId = selectedBreed) {
    loadCat(breedId);
  }

  function handleToggleFavorite(catData) {
    if (isFavorite(catData.id)) {
      removeFavorite(catData.id);
      return;
    }

    const completeCat = {
      ...catData,
      breeds:
        catData.breeds && catData.breeds.length > 0
          ? catData.breeds
          : selectedBreedData
            ? [selectedBreedData]
            : [],
    };

    addFavorite(completeCat);
  }

  return (
    <Page>
      <Container>
        <Header
          activePanel={activePanel}
          onOpenSearch={() => setActivePanel("search")}
          onOpenFavorites={() => setActivePanel("favorites")}
        />

        <CardContainer>
          {activePanel === "search" && (
            <>
              <ControlsBar
                breeds={breeds}
                selectedBreed={selectedBreed}
                onSelectBreed={setSelectedBreed}
                onSearch={handleSearch}
              />

              <CatCard
                cat={cat}
                loading={loading}
                error={error}
                onNext={handleSearch}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={cat ? isFavorite(cat.id) : false}
                selectedBreedData={selectedBreedData}
                selectedBreed={selectedBreed}
              />
            </>
          )}

          {activePanel === "favorites" && (
            <FavoritesPanel
              favorites={favorites}
              onRemoveFavorite={removeFavorite}
            />
          )}
        </CardContainer>
      </Container>
    </Page>
  );
}

export default HomeView;
