import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

const Select = styled.select`
  flex: 1;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #d6dbde;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 12px;
  border: none;
  background: #0077b2;
  color: white;
  cursor: pointer;
`;

function ControlsBar({ breeds, selectedBreed, onSelectBreed, onSearch }) {
  return (
    <Container>
      <Select
        value={selectedBreed}
        onChange={(e) => onSelectBreed(e.target.value)}
      >
        <option value="">Todas as raças</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </Select>

      <Button onClick={onSearch}>Buscar</Button>
    </Container>
  );
}

export default ControlsBar;
