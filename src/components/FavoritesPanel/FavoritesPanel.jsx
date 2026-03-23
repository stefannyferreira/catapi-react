import { useState } from "react";
import styled from "styled-components";
import FavoriteModal from "../FavoritesModal";

const Panel = styled.div`
  margin-top: 16px;
  background: #ffffff;
  border: 1px solid #d6dbde;
  border-radius: 24px;
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #002233;
  margin: 0 0 16px;
`;

const EmptyState = styled.p`
  margin: 0;
  color: #405466;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

const FavoriteCard = styled.button`
  border: 1px solid #d6dbde;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  padding: 0;
  text-align: left;
  cursor: pointer;
`;

const FavoriteImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

const FavoriteContent = styled.div`
  padding: 12px;
`;

const FavoriteName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #002233;
  margin: 0 0 8px;
`;

const FavoriteInfo = styled.p`
  font-size: 14px;
  color: #405466;
  margin: 0 0 12px;
`;

const RemoveButton = styled.button`
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 12px;
  background: #f9c3d5;
  color: #cc0d4d;
  font-weight: 700;
  cursor: pointer;
`;

function FavoritesPanel({ favorites, onRemoveFavorite }) {
  const [selectedCat, setSelectedCat] = useState(null);

  return (
    <>
      <Panel>
        <Title>Favoritos</Title>

        {favorites.length === 0 ? (
          <EmptyState>Nenhum gato favoritado ainda.</EmptyState>
        ) : (
          <Grid>
            {favorites.map((cat) => {
              const breed = cat.breeds?.[0];

              return (
                <FavoriteCard
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat)}
                >
                  <FavoriteImage
                    src={cat.url}
                    alt={breed?.name || "Gato favorito"}
                  />

                  <FavoriteContent>
                    <FavoriteName>
                      {breed?.name || "Gato sem raça definida"}
                    </FavoriteName>

                    <FavoriteInfo>
                      Origem {breed?.origin || "não informada"}
                    </FavoriteInfo>

                    <RemoveButton
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onRemoveFavorite(cat.id);

                        if (selectedCat?.id === cat.id) {
                          setSelectedCat(null);
                        }
                      }}
                    >
                      Remover dos favoritos
                    </RemoveButton>
                  </FavoriteContent>
                </FavoriteCard>
              );
            })}
          </Grid>
        )}
      </Panel>

      <FavoriteModal
        cat={selectedCat}
        onClose={() => setSelectedCat(null)}
        onRemoveFavorite={onRemoveFavorite}
      />
    </>
  );
}

export default FavoritesPanel;
