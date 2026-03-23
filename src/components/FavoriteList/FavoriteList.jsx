import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 24px;
`;

const Card = styled.div`
  border: 1px solid #d6dbde;
  border-radius: 16px;
  padding: 12px;
  background: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
`;

const RemoveButton = styled.button`
  width: 100%;
  margin-top: 8px;
  height: 36px;
  border: none;
  border-radius: 10px;
  background: #f9c3d5;
  cursor: pointer;
`;

export function FavoritesList({ favorites, onRemove }) {
  if (favorites.length === 0) {
    return <p>Nenhum favorito ainda.</p>;
  }

  return (
    <List>
      {favorites.map((cat) => (
        <Card key={cat.id}>
          <Image src={cat.url} alt="Gato favorito" />
          <RemoveButton onClick={() => onRemove(cat.id)}>Remover</RemoveButton>
        </Card>
      ))}
    </List>
  );
}
