import { FeaturesImages } from "../../components/Features/FeaturesImages";
import { FooterLinks } from "../../components/Footer/FooterLinks";
import { FooterCentered } from "../../components/footerCentered/Footer";
import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu";
import { HeroContentLeft } from "../../components/HeroContentLeft/HeroContent";
import { HeroBullets } from "../../components/HeroHeader/HeroHeader";

const DespreNoi = () => {
  return (
    <>
      <HeaderMegaMenu />
      <HeroContentLeft />
      <FeaturesImages />
      <HeroBullets />
      <FooterCentered />
    </>
  );
};

export default DespreNoi;
