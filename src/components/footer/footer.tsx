import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import {
  SFooter,
  SFooterBrand,
  SFooterContent,
  SFooterDivider,
  SFooterLegal,
  SFooterLegalSection,
  SFooterLegalText,
  SFooterLegalTitle,
  SFooterLogo,
  SFooterSocialLink,
  SFooterSocials,
  SFooterTagline,
} from "./footer.styles";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/primeformulasoficial",
    icon: <FaLinkedinIn aria-hidden="true" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCB9PQaJFm5mYHvgMyCDhIag",
    icon: <FaYoutube aria-hidden="true" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/primeformulasoficial",
    icon: <FaFacebookF aria-hidden="true" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/primeformulasoficial/",
    icon: <FaInstagram aria-hidden="true" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@primeformulasoficial?_t=8VEoRd4Ob0H&_r=1",
    icon: <FaTiktok aria-hidden="true" />,
  },
];

export default function Footer() {
  return (
    <SFooter>
      <SFooterContent>
        <SFooterLogo
          src="/logo-prime-formulas.svg"
          alt="Magistral Prime Fórmulas"
          width={245}
          height={92}
        />
        <SFooterBrand>Prime Fórmulas</SFooterBrand>
        <SFooterTagline>Cuidado com a vida, respeito por você.</SFooterTagline>

        <SFooterSocials aria-label="Redes sociais da Prime Fórmulas">
          {socialLinks.map(({ label, href, icon }) => (
            <SFooterSocialLink
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </SFooterSocialLink>
          ))}
        </SFooterSocials>

        <SFooterDivider />

        <SFooterLegal>
          <SFooterLegalSection>
            <SFooterLegalTitle>ORIGINAL PHARMA MANIPULACAO LTDA</SFooterLegalTitle>
            <SFooterLegalText>CNPJ: 05.394.443/0001-28</SFooterLegalText>
          </SFooterLegalSection>

          <SFooterLegalSection>
            <SFooterLegalTitle>FARMACÊUTICA RESPONSÁVEL</SFooterLegalTitle>
            <SFooterLegalText>Talita Gisele Andrade - SP 39.205</SFooterLegalText>
          </SFooterLegalSection>

          <SFooterLegalSection>
            <SFooterLegalTitle>LICENÇAS</SFooterLegalTitle>
            <SFooterLegalText>CMVS: 355030801-477-0090309-1-0 (08-01-2022)</SFooterLegalText>
            <SFooterLegalText>AFE: 506794 (27-10-2014)</SFooterLegalText>
            <SFooterLegalText>AE: 1375229 (05-03-2014)</SFooterLegalText>
          </SFooterLegalSection>
        </SFooterLegal>
      </SFooterContent>
    </SFooter>
  );
}
