import Banner from "@/components/banner/banner";
import Reveal from "@/components/animation/reveal";
import Footer from "@/components/footer/footer";
import SecondaryBanner from "@/components/banner/secondary-banner";
import BenefitsSlider from "./benefits-slider";
import { SHeader, SHeaderLogo, SMain, SPage } from "./page.styles";

export default function Home() {
  return (
    <SPage>
      <Reveal>
        <SHeader>
          <SHeaderLogo
            src="/logo-prime-formulas.svg"
            alt="Magistral Prime Fórmulas"
            width={320}
            height={120}
          />
        </SHeader>
      </Reveal>

      <SMain>
        <Reveal afterOpening>
          <Banner
            imageSrc="/cachorro.png"
            imageAlt="Cachorro recebendo medicamento com uma seringa"
            href="https://api.whatsapp.com/send?phone=5511963167575&text=Ol%C3%A1%20gostaria%20de%20enviar%20uma%20receita%20veterin%C3%A1ria"
            title={
              <>
                Manipulação
                <br />
                de medicamentos
                <br />
                veterinários
              </>
            }
            description={
              <>
                <span className="tablet-copy">
                  Medicamentos na medida
                  <br />
                  certa para seu melhor amigo
                </span>
                <span className="desktop-copy">
                  Medicamentos na medida certa para
                  <br />
                  seu melhor amigo
                </span>
              </>
            }
            linkText="Consultar opções"
            preload
          />
        </Reveal>

        <Reveal delay={0.08}>
          <BenefitsSlider />
        </Reveal>

        <Reveal delay={0.08}>
          <SecondaryBanner
            imageSrc="/gato.png"
            imageAlt="Gato recebendo medicamento com uma seringa"
            href="https://api.whatsapp.com/send?phone=5511933954537&text=Ol%C3%A1%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20parceria%20para%20veterin%C3%A1rios."
            title="Oferecemos parcerias com veterinários e clínicas"
            description="Veterinário, seja um parceiro Prime!"
            secondaryDescription="Marque uma visita com um de nossos consultores farmacêuticos e fique por dentro das novidades em fórmulas manipuladas para uso veterinário."
            linkText="Agendar visita"
            preload
          />
        </Reveal>
      </SMain>

      <Reveal>
        <Footer />
      </Reveal>
    </SPage>
  );
}
