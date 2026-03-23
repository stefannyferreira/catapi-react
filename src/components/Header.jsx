import styled from "styled-components";
import logo from "../assets/logo.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0;
`;

const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 80px;
  background: #ffffff;
  border: 1px solid #d6dbde;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: #eceeef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 140px;
  height: 130px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ActionButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid #d6dbde;
  background: ${({ $active }) => ($active ? "#eceeef" : "#ffffff")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;

  &:hover {
    background: #eceeef;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export function Header({ activePanel, onOpenSearch, onOpenFavorites }) {
  return (
    <Wrapper>
      <Container>
        <Brand>
          <Logo src={logo} alt="RD Cat" />
        </Brand>

        <Actions>
          <ActionButton
            title="Buscar"
            onClick={onOpenSearch}
            $active={activePanel === "search"}
          >
            🔍
          </ActionButton>

          <ActionButton
            title="Favoritos"
            onClick={onOpenFavorites}
            $active={activePanel === "favorites"}
          >
            ❤️
          </ActionButton>
        </Actions>
      </Container>
    </Wrapper>
  );
}
