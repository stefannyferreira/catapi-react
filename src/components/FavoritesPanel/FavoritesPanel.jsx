import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FavoriteModal from "../FavoritesModal";

const Panel = styled(motion.div)`
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

const EmptyState = styled(motion.p)`
  margin: 0;
  color: #405466;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

const FavoriteCard = styled(motion.button)`
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

function FavoritesPanel({ favorites, onRemoveFavorite }) {
  const { t } = useTranslation("FavoritesPanel");
  const [selectedCat, setSelectedCat] = useState(null);

  return (
    <>
      <Panel
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <Title>{t("title")}</Title>

        {favorites.length === 0 ? (
          <EmptyState
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {t("emptyState")}
          </EmptyState>
        ) : (
          <Grid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {favorites.map((cat) => {
              const breed = cat.breeds?.[0];

              return (
                <FavoriteCard
                  key={cat.id}
                  type="button"
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCat(cat)}
                >
                  <FavoriteImage
                    src={cat.url}
                    alt={breed?.name || t("favoriteAlt")}
                  />

                  <FavoriteContent>
                    <FavoriteName>
                      {breed?.name || t("undefinedBreed")}
                    </FavoriteName>

                    <FavoriteInfo>
                      {breed?.origin || t("unknownOrigin")}
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
                      {t("removeFavorite")}
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
