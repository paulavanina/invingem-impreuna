import { CommCard } from "../../components/CommCard/CommCard";
import ComunityContent from "../../components/ComunityContent/ComunityContent";
import { FooterLinks } from "../../components/Footer/FooterLinks";
import { FooterCentered } from "../../components/footerCentered/Footer";
import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu";

const Comunitate = () => {
  return (
    <div className="comunity">
      <HeaderMegaMenu />
      <ComunityContent />
      <CommCard />
      <FooterCentered />
    </div>
  );
};

export default Comunitate;
