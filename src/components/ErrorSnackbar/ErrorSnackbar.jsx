import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d6dbde;
  border-radius: 12px;
  overflow: hidden;
`;

const Accent = styled.div`
  width: 8px;
  background: #e60f57;
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
`;

const Left = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 999px;
  background: #e60f57;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  margin-top: 2px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #002233;
`;

const Message = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #405466;
`;

const RetryButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  background: #e60f57;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

function ErrorSnackbar({ title, message, onRetry }) {
  const { t } = useTranslation("ErrorSnackbar");

  return (
    <Container>
      <Accent />

      <Content>
        <Left>
          <Icon>!</Icon>

          <TextBlock>
            <Title>{title || t("title")}</Title>
            <Message>{message || t("defaultMessage")}</Message>
          </TextBlock>
        </Left>

        <RetryButton type="button" onClick={onRetry}>
          {t("retry")}
        </RetryButton>
      </Content>
    </Container>
  );
}

export default ErrorSnackbar;
