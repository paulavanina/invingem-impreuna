import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu";
import { CardPage } from "../../components/Card/CardPage";
import { FooterCentered } from "../../components/footerCentered/Footer";
import Chatbot from "../../components/ChatBot/Chatbot";


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
