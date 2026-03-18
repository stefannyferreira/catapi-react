import styled from "styled-components";
import InfoCard from "./InfoCard";

const Card = styled.div`
  border-radius: 24px;
  border: 1px solid #d6dbde;
  overflow: hidden;
  background: #ffffff;
`;

const ImageArea = styled.div`
  height: 300px;
  background: #eceeef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const Content = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const BreedTag = styled.span`
  background: #dbb2fc;
  color: #8800f7;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  height: fit-content;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 16px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Primary = styled.button`
  background: #00dbff;
  border: none;
  border-radius: 16px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function CatCard({ cat, loading, error, onNext }) {
  return (
    <Card>
      <ImageArea>
        {loading && <p>Carregando gato...</p>}

        {error && !loading && <p>{error}</p>}

        {!loading && !error && cat && (
          <CatImage src={cat.url} alt="Gato aleatório" />
        )}

        {!loading && !error && !cat && (
          <>
            <div style={{ fontSize: 40 }}>🐱</div>
            <p>Área da imagem do gato</p>
          </>
        )}
      </ImageArea>

      <Content>
        <Header>
          <div>
            <h2>Gato aleatório</h2>
            <p>Imagem carregada pela TheCatAPI.</p>
          </div>

          <BreedTag>Random</BreedTag>
        </Header>

        <Grid>
          <InfoCard title="ID" value={cat?.id || "--"} />
          <InfoCard title="Largura" value={cat?.width || "--"} />
          <InfoCard title="Altura" value={cat?.height || "--"} />
          <InfoCard
            title="Status"
            value={loading ? "Loading" : cat ? "Disponível" : "--"}
          />
        </Grid>

        <Buttons>
          <Primary onClick={onNext}>Ver próximo gato</Primary>
        </Buttons>
      </Content>
    </Card>
  );
}

export default CatCard;
