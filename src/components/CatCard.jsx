import styled from "styled-components";
import CatImage from "./CatImage";

const Container = styled.div`
  text-align: left;
`;

const Content = styled.div`
  margin-top: 16px;
`;

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 700;
  color: #002233;
`;

const Info = styled.p`
  margin: 0 0 8px;
  font-size: 16px;
  color: #405466;
`;

const Description = styled.p`
  margin: 12px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #405466;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid #d6dbde;
  background: #ffffff;
  color: #002233;
  cursor: pointer;
  font-weight: 600;
`;

const PrimaryButton = styled(Button)`
  background: #0077b2;
  border-color: #0077b2;
  color: #ffffff;
`;

function CatCard({
  cat,
  loading,
  error,
  onNext,
  onToggleFavorite,
  isFavorite,
  selectedBreedData,
}) {
  if (error) return <p>{error}</p>;
  if (!cat && !loading) return null;

  const apiBreed = cat?.breeds?.[0];
  const breed = apiBreed || selectedBreedData;

  return (
    <Container>
      <CatImage
        key={cat?.url || "loading"}
        src={cat?.url}
        alt={breed?.name || "Gato"}
      />

      <Content>
        <Title>{breed?.name || "Gato aleatório"}</Title>

        <Info>
          <strong>Origem:</strong> {breed?.origin || "Não informada"}
        </Info>

        <Info>
          <strong>Temperamento:</strong> {breed?.temperament || "Não informado"}
        </Info>

        <Info>
          <strong>Expectativa de vida:</strong>{" "}
          {breed?.life_span || "Não informada"}
        </Info>

        {breed?.description && <Description>{breed.description}</Description>}

        <Actions>
          <PrimaryButton onClick={onNext}>Novo gato</PrimaryButton>
          <Button onClick={() => onToggleFavorite(cat)}>
            {isFavorite ? "Remover ❤️" : "Favoritar 🤍"}
          </Button>
        </Actions>
      </Content>
    </Container>
  );
}

export default CatCard;
