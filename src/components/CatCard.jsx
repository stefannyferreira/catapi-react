import styled from "styled-components";
import { useFavorites } from "../hooks/useFavorites";

const Container = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 10px 16px;
  border-radius: 12px;
  border: none;
  background: #0077b2;
  color: white;
  cursor: pointer;
`;

function CatCard({ cat, loading, error, onNext }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!cat) return null;

  const favorite = isFavorite(cat.id);

  return (
    <Container>
      <Image src={cat.url} alt="cat" />

      <div>
        <Button onClick={onNext}>Novo gato</Button>

        <Button
          onClick={() => (favorite ? removeFavorite(cat.id) : addFavorite(cat))}
        >
          {favorite ? "Remover ❤️" : "Favoritar 🤍"}
        </Button>
      </div>
    </Container>
  );
}

export default CatCard;
