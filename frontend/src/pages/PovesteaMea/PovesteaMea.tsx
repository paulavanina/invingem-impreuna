import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu";
import { FooterLinks } from "../../components/Footer/FooterLinks";
import { Title, Text, Center } from "@mantine/core";
import { CardPage } from "../../components/Card/CardPage";
import { FooterCentered } from "../../components/footerCentered/Footer";

const PovesteaMea = () => {
  return (
    <div className="my-story">
      <HeaderMegaMenu />
      <CardPage />
      <FooterCentered />
    </div>
  );
};

export default PovesteaMea;
