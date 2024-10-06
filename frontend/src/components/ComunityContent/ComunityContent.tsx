import { Button, Text, Overlay } from "@mantine/core";
import classes from "./ComunityContent.module.css";
import { useNavigate } from "react-router-dom";

const ComunityContent = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/povestea-mea");
  };
  return (
    <div className={classes.hero}>
   
      <div className="container">
        <div className="content">
          <Text pl={60} pt={200} fz={40}>
            Te invităm să te alături nouă
          </Text>

          <Text
            className={classes.description}
            size="xl"
            mt="xl"
            style={{ color: "black" }}
            pl={60}
          >
            Participarea la evenimente și webinarii este o oportunitate
            excelentă de a obține informații actualizate și de a interacționa cu
            alții care se confruntă cu provocări similare.
          </Text>
          <Button
            style={{ backgroundColor: "#F5C300" }}
            radius="xl"
            className={classes.control}
            ml={60}
            onClick={handleButton}
          >
            Împărtășește-ti povestea
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComunityContent;
