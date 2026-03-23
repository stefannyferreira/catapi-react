import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 34, 51, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 860px;
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
  if (!cat) return null;

  const breed = cat.breeds?.[0];

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <CloseButton type="button" onClick={onClose}>
            ×
          </CloseButton>
        </ModalHeader>

        <ModalImage src={cat.url} alt={breed?.name || "Gato favorito"} />

        <ModalTitle>{breed?.name || "Gato sem raça definida"}</ModalTitle>

        <ModalInfo>
          <strong>Origem:</strong> {breed?.origin || "Não informada"}
        </ModalInfo>

        <ModalInfo>
          <strong>Temperamento:</strong> {breed?.temperament || "Não informado"}
        </ModalInfo>

        <ModalInfo>
          <strong>Expectativa de vida:</strong>{" "}
          {breed?.life_span || "Não informada"}
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
            Remover dos favoritos
          </RemoveButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
}

export default FavoriteModal;
