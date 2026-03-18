import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const Select = styled.select`
  flex: 1;
  height: 44px;
  border-radius: 16px;
  border: 1px solid #b2bcc1;
  padding: 0 12px;
`;

const ButtonPrimary = styled.button`
  background: #00dbff;
  border: none;
  padding: 0 20px;
  border-radius: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const ButtonSecondary = styled.button`
  background: #ffffff;
  border: 1px solid #d6dbde;
  padding: 0 20px;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
`;

function ControlsBar({ onSearch }) {
  return (
    <>
      <p style={{ fontWeight: 600, marginBottom: 8 }}>Filtrar por raça</p>

      <Wrapper>
        <Select>
          <option>Selecione uma raça</option>
        </Select>

        <ButtonPrimary onClick={onSearch}>Buscar gato</ButtonPrimary>

        <ButtonSecondary>Limpar filtro</ButtonSecondary>
      </Wrapper>
    </>
  );
}
export default ControlsBar;
