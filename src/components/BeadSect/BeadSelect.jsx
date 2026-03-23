import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  height: 44px;
  border: 1px solid #d6dbde;
  border-radius: 12px;
  padding: 0 12px;
  font-size: 16px;
  background: #fff;
`;

export function BreedSelect({ breeds, value, onChange }) {
  return (
    <Select value={value} onChange={onChange}>
      <option value="">Selecione uma raça</option>
      {breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </Select>
  );
}
