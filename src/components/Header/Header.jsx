import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0;
`;

const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  max-height: 80px;
  background: #ffffff;
  border: 1px solid #d6dbde;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  position: relative;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 16px;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  width: 140px;
  height: 130px;
`;


const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
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

const SettingsWrapper = styled.div`
  position: relative;
`;

const LanguageMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  background: #ffffff;
  border: 1px solid #d6dbde;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 12px;
  z-index: 20;
`;

const LanguageLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #002233;
  margin-bottom: 8px;
`;

const LanguageSelect = styled.select`
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #d6dbde;
  background: #ffffff;
  color: #002233;
  font-size: 14px;
`;

export function Header({ activePanel, onOpenSearch, onOpenFavorites }) {
  const { i18n, t } = useTranslation("Header");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  function handleLanguageChange(event) {
    i18n.changeLanguage(event.target.value);
    setShowLanguageMenu(false);
  }

  return (
    <Wrapper>
      <Container>
        <Brand>
          <Logo src={logo} alt="RD Cat" />
        </Brand>

        <Actions>
          <ActionButton
            type="button"
            title={t("search")}
            onClick={onOpenSearch}
            $active={activePanel === "search"}
          >
            🔍
          </ActionButton>

          <ActionButton
            type="button"
            title={t("favorites")}
            onClick={onOpenFavorites}
            $active={activePanel === "favorites"}
          >
            ❤️
          </ActionButton>

          <SettingsWrapper>
            <ActionButton
              type="button"
              title={t("language")}
              onClick={() => setShowLanguageMenu((prev) => !prev)}
              $active={showLanguageMenu}
            >
              ⚙️
            </ActionButton>

            {showLanguageMenu && (
              <LanguageMenu>
                <LanguageLabel htmlFor="language-select">
                  {t("language")}
                </LanguageLabel>

                <LanguageSelect
                  id="language-select"
                  value={i18n.language}
                  onChange={handleLanguageChange}
                >
                  <option value="pt-BR">{t("portuguese")}</option>
                  <option value="en">{t("english")}</option>
                  <option value="es">{t("spanish")}</option>
                </LanguageSelect>
              </LanguageMenu>
            )}
          </SettingsWrapper>
        </Actions>
      </Container>
    </Wrapper>
  );
}
