import Image from "next/image";
import styled from "styled-components";
import theme from "@/styles/theme";

export const SFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  background-color: ${theme.colors.background};
  color: ${theme.colors.colorMain};
  text-align: center;

  @media (min-width: 600px) {
    padding: 30px 10px 20px;
  }

  @media (min-width: 900px) {
    padding: 24px 0 18px;
  }
`;

export const SFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 920px);
  gap: ${theme.spacing.md};

  @media (min-width: 600px) {
    width: 100%;
    max-width: none;
    gap: 10px;
  }
`;

export const SFooterLogo = styled(Image)`
  display: block;
  width: min(245px, 70vw);
  height: auto;

  @media (min-width: 600px) {
    width: clamp(150px, 24vw, 180px);
  }

  @media (min-width: 900px) {
    width: clamp(125px, 13vw, 170px);
  }
`;

export const SFooterBrand = styled.h2`
  margin: 0;
  color: ${theme.colors.texts};
  font-size: 1.4rem;
  font-weight: 500;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const SFooterTagline = styled.p`
  margin: 0;
  color: ${theme.colors.texts};
  font-size: clamp(1rem, 4vw, 1.45rem);

  @media (min-width: 600px) {
    font-size: clamp(1rem, 2.2vw, 1.25rem);
  }

  @media (min-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const SFooterSocials = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 6vw, 38px);
  margin: ${theme.spacing.xs} 0 ${theme.spacing.lg};

  @media (min-width: 600px) {
    gap: clamp(30px, 5vw, 40px);
    margin: 8px 0 20px;
  }

  @media (min-width: 900px) {
    gap: 30px;
    margin-bottom: 18px;
  }
`;

export const SFooterSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.texts};
  font-size: 1.8rem;
  transition: color 160ms ease, transform 160ms ease;

  @media (min-width: 600px) {
    font-size: 1.55rem;
  }

  @media (min-width: 900px) {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${theme.colors.secondaryColor};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.colorMain};
    outline-offset: 4px;
  }
`;

export const SFooterDivider = styled.hr`
  width: 100%;
  margin: 0 0 ${theme.spacing.lg};
  border: 0;
  border-top: 1px solid #b7cbd4;
`;

export const SFooterLegal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: start;
    width: 100%;
    gap: 10px;

    > section:nth-child(2) {
      grid-column: 3;
      grid-row: 1;
    }

    > section:nth-child(3) {
      grid-column: 2;
      grid-row: 1;
    }
  }

  @media (min-width: 900px) {
    padding: 0 3%;
    gap: 20px;
  }
`;

export const SFooterLegalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  @media (min-width: 600px) {
    padding: 0 4px;
  }
`;

export const SFooterLegalTitle = styled.h3`
  margin: 0;
  color: #29394d;
  font-size: clamp(1rem, 4vw, 1.25rem);
  font-weight: 600;

  @media (min-width: 600px) {
    font-size: clamp(0.75rem, 2.15vw, 1rem);
    line-height: 1.25;
  }

  @media (min-width: 900px) {
    font-size: clamp(0.75rem, 1vw, 0.9rem);
  }
`;

export const SFooterLegalText = styled.p`
  margin: 0;
  color: #29394d;
  font-size: clamp(0.9rem, 3.5vw, 1rem);

  @media (min-width: 600px) {
    font-size: clamp(0.7rem, 1.8vw, 0.9rem);
    line-height: 1.3;
  }

  @media (min-width: 900px) {
    font-size: clamp(0.68rem, 0.85vw, 0.78rem);
  }
`;
