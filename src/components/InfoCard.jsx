import styled from "styled-components";

const Card = styled.div`
  background: #eceeef;
  border: 1px solid #d6dbde;
  border-radius: 12px;
  padding: 10px;
`;

const Label = styled.p`
  font-size: 12px;
  color: #596b7a;
`;

function InfoCard({ title, value }) {
  return (
    <Card>
      <Label>{title}</Label>
      <strong>{value}</strong>
    </Card>
  );
}

export default InfoCard;
