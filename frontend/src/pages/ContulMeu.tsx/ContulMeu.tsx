import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu";
import { BlogCard } from "../../components/BlogCard/BlogCard";
import DetaliiCont from "../../components/DetaliiCont/DetaliiCont";
import { FooterCentered } from "../../components/footerCentered/Footer";

const ContulMeu = () => {
  return (
    <div>
      <HeaderMegaMenu />
      <DetaliiCont />
      <BlogCard />
      <FooterCentered />
    </div>
  );
};

export default ContulMeu;
