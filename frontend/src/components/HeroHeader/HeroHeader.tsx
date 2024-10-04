import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./HeroHeader.module.css";
import friends from "../../assets/smile.avif";
import { useNavigate } from "react-router-dom";
export function HeroBullets() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/comunitate");
  };
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Aici vei găsi conexiuni <span className="text">autentice</span>...
          </Title>
          <Text c="dimmed" mt="md">
            Fiecare poveste este unică și valoroasă. Împărtășindu-ți povestea,
            vei descoperi sprijin real și relații bazate pe înțelegere și
            empatie profundă.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color="#068466">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Povestea ta </b>poate inspira și ajuta pe alții în aceeași
              situație.
            </List.Item>

            <List.Item>
              <b>Creează conexiuni autentice: </b>Poți construi prietenii și
              relații bazate pe înțelegere și suport reciproc.
            </List.Item>

            <List.Item>
              <b>Oferă sprijin emoțional: </b>Uneori, cele mai puternice cuvinte
              sunt cele care vin din inimă.
            </List.Item>

            <List.Item>
              <b>Împărtășește-ți victoriile: </b>Oricât de mici sau mari ar fi,
              fiecare victorie merită să fie sărbătorită.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              className={classes.control}
              onClick={handleButton}
            >
              Descopera comunitatea
            </Button>
          </Group>
        </div>
        <Image src={friends} className={classes.image} radius={20} />
      </div>
    </Container>
  );
}
