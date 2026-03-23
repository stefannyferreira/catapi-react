import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("ControlsBar");

  function handleChange(event) {
    const value = event.target.value;
    onSelectBreed(value);
    onSearch(value);
  }

  return (
    <Container>
      <Select value={selectedBreed} onChange={handleChange}>
        <option value="">{t("allBreeds")}</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </Select>

      <Button type="button" onClick={() => onSearch(selectedBreed)}>
        {t("search")}
      </Button>
    </Container>
  );
}

export default ControlsBar;
