import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./HeroContent.module.css";
import { useNavigate } from "react-router-dom";

export function HeroContentLeft() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>
          Bine ați venit la Împreună Învingem !
        </Title>
        <Text
          className={classes.description}
          fz={18}
          mt="xl"
          style={{ color: "white" }}
        >
          Suntem aici pentru a aduce împreună oamenii din România care se
          confruntă cu cancerul, pentru a împărtăși experiențe și a oferi suport
          emoțional. Nu ești singur – suntem aici pentru tine, pentru a învinge
          împreună!
        </Text>

        <Button
          style={{ backgroundColor: "#004d49" }}
          radius="xl"
          size="xl"
          className={classes.control}
          onClick={handleSignUp}
        >
          înregistrează-te
        </Button>
      </Container>
    </div>
  );
}
