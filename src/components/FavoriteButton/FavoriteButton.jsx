import styled from "styled-components";

const Button = styled.button`
  height: 44px;
  padding: 0 16px;
  border: none;
  border-radius: 12px;
  background: ${({ $isFavorite }) => ($isFavorite ? "#ffe3a5" : "#eceeef")};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

export function FavoriteButton({ isFavorite, onClick }) {
  return (
    <Button type="button" onClick={onClick} $isFavorite={isFavorite}>
      {isFavorite ? "💛 Favoritado" : "🤍 Favoritar"}
    </Button>
  );
}
