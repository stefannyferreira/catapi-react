import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 34, 51, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
`;

const Content = styled(motion.div)`
  width: 100%;
  max-width: 760px;
  max-height: 90vh;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #d6dbde;
  padding: 24px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #d6dbde;
  background: #ffffff;
  color: #002233;
  font-size: 20px;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
`;

const ModalTitle = styled.h3`
  margin: 20px 0 8px;
  font-size: 28px;
  font-weight: 700;
  color: #002233;
`;

const ModalInfo = styled.p`
  margin: 0 0 8px;
  font-size: 16px;
  color: #405466;
`;

const ModalDescription = styled.p`
  margin: 16px 0 0;
  font-size: 15px;
  line-height: 1.6;
  color: #405466;
`;

const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const RemoveButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  background: #f9c3d5;
  color: #cc0d4d;
  font-weight: 700;
  cursor: pointer;
`;

function FavoriteModal({ cat, onClose, onRemoveFavorite }) {
  const { t } = useTranslation("FavoritesModal");
  const breed = cat?.breeds?.[0];

  return (
    <AnimatePresence>
      {cat && (
        <Overlay
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Content
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <ModalHeader>
              <CloseButton type="button" onClick={onClose}>
                ×
              </CloseButton>
            </ModalHeader>

            <ModalImage src={cat.url} alt={breed?.name || t("favoriteAlt")} />

            <ModalTitle>{breed?.name || t("undefinedBreed")}</ModalTitle>

            <ModalInfo>
              <strong>{t("origin")}:</strong>{" "}
              {breed?.origin || t("originFallback")}
            </ModalInfo>

            <ModalInfo>
              <strong>{t("temperament")}:</strong>{" "}
              {breed?.temperament || t("temperamentFallback")}
            </ModalInfo>

            <ModalInfo>
              <strong>{t("lifeSpan")}:</strong>{" "}
              {breed?.life_span || t("lifeSpanFallback")}
            </ModalInfo>

            {breed?.description && (
              <ModalDescription>{breed.description}</ModalDescription>
            )}

            <ModalActions>
              <RemoveButton
                type="button"
                onClick={() => {
                  onRemoveFavorite(cat.id);
                  onClose();
                }}
              >
                {t("removeFavorite")}
              </RemoveButton>
            </ModalActions>
          </Content>
        </Overlay>
      )}
    </AnimatePresence>
  );
}

export default FavoriteModal;
