import Chatbot from "../../components/ChatBot/Chatbot";
import { CommCard } from "../../components/CommCard/CommCard";
import { FooterCentered } from "../../components/footerCentered/Footer";
import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu";
import { FaqWithImage } from "../../components/Questions/Questions";

const Comunitate = () => {
  return (
    <div className="comunity">
      <HeaderMegaMenu />
      <CommCard />
      <FaqWithImage />
      <Chatbot />
      <FooterCentered />
    </div>
  );
};

export default Comunitate;
