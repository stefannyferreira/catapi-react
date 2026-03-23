import styled from "styled-components";
import { useCats } from "../hooks/useCat";
import ControlsBar from "../components/ControlsBar";
import CatCard from "../components/CatCard";
import { Header } from "../components/Header";

const Page = styled.div`
  min-height: 100vh;
  background: #eceeef;
  padding: 32px;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #d6dbde;
  padding: 24px;
`;

function HomeView() {
  const { cat, loading, error, loadCat } = useCats();

  return (
    <Page>
      <Container>
        <Header />
        <CardContainer>
          <ControlsBar onSearch={loadCat} />
          <CatCard cat={cat} loading={loading} error={error} onNext={loadCat} />
        </CardContainer>
      </Container>
    </Page>
  );
}

export default HomeView;
