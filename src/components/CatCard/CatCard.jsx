import styled from "styled-components";
import { useTranslation } from "react-i18next";
import CatImage from "../CatImage/CatImage";
import ErrorSnackbar from "../ErrorSnackbar/ErrorSnackbar";

const Container = styled.div`
  text-align: left;
`;

const SnackbarWrapper = styled.div`
  margin-bottom: 16px;
`;

const Content = styled.div`
  margin-top: 16px;
`;

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 700;
  color: #002233;
`;

const Info = styled.p`
  margin: 0 0 8px;
  font-size: 16px;
  color: #405466;
`;

const Description = styled.p`
  margin: 12px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #405466;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid #d6dbde;
  background: #ffffff;
  color: #002233;
  cursor: pointer;
  font-weight: 600;
`;

const PrimaryButton = styled(Button)`
  background: #0077b2;
  border-color: #0077b2;
  color: #ffffff;
`;

function CatCard({
  cat,
  loading,
  error,
  onNext,
  onToggleFavorite,
  isFavorite,
  selectedBreedData,
}) {
  const { t } = useTranslation("CatCard");

  if (!cat && !loading && !error) return null;

  const apiBreed = cat?.breeds?.[0];
  const breed = apiBreed || selectedBreedData;
  const hasBreed = !!breed;

  return (
    <Container>
      {error && (
        <SnackbarWrapper>
          <ErrorSnackbar
            title={t("errorTitle")}
            message={error}
            onRetry={onNext}
          />
        </SnackbarWrapper>
      )}

      <CatImage
        key={cat?.url || "loading"}
        src={cat?.url}
        alt={breed?.name || t("defaultAlt")}
      />

      <Content>
        <Title>{hasBreed ? breed.name : t("randomTitle")}</Title>

        {hasBreed ? (
          <>
            <Info>
              <strong>{t("origin")}:</strong>{" "}
              {breed.origin || t("originFallback")}
            </Info>

            <Info>
              <strong>{t("temperament")}:</strong>{" "}
              {breed.temperament || t("temperamentFallback")}
            </Info>

            <Info>
              <strong>{t("lifeSpan")}:</strong>{" "}
              {breed.life_span || t("lifeSpanFallback")}
            </Info>

            {breed.description && (
              <Description>{breed.description}</Description>
            )}
          </>
        ) : (
          <Description>{t("randomDescription")}</Description>
        )}

        <Actions>
          <PrimaryButton type="button" onClick={onNext}>
            {t("nextCat")}
          </PrimaryButton>

          {cat && (
            <Button type="button" onClick={() => onToggleFavorite(cat)}>
              {isFavorite ? t("removeFavorite") : t("addFavorite")}
            </Button>
          )}
        </Actions>
      </Content>
    </Container>
  );
}

export default CatCard;
