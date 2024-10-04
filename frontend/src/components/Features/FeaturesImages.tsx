import {
  Text,
  Container,
  Group,
  ThemeIcon,
  Title,
  Badge,
  SimpleGrid,
} from "@mantine/core";
import classes from "./FeaturesImages.module.css";
import bookIcon from "../../assets/book.png";
import heartIcon from "../../assets/heart.png";
import messageIcon from "../../assets/message.png";
import webinareIcon from "../../assets/friends.png";
const data = [
  {
    id: 1,
    image: heartIcon,
    title: "Comunitate de Suport",
    description:
      "Împărtășește-ți povestea despre cum lupți cu cancerul pentru a deveni o sursă de speranță și inspirație pentru alții.",
  },
  {
    id: 2,
    image: bookIcon,
    title: "Testimoniale",
    description:
      "Citește mărturii și povești de succes de la oameni care au învins sau care se află în lupta cu cancerul.",
  },

  {
    id: 3,
    image: messageIcon,
    title: "Împărtășește-ți povestea",
    description:
      "Împărtășește-ți povestea despre cum lupți cu cancerul pentru a deveni o sursă de speranță și inspirație pentru alții.",
  },
  {
    id: 4,
    image: webinareIcon,
    title: "Participă la Evenimente și Webinarii",
    description:
      "Participă la evenimente și webinarii pentru a obține informații actualizate și a interacționa cu alții care se confruntă cu provocări similare.",
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.id}>
      <ThemeIcon
        style={{ backgroundColor: "#e6fdf3" }}
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <img src={item.image} className={classes.iconImage} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Group justify="center" pb={20}>
        <Badge size="lg" color="#F5C300">
          SPRINJIN ȘI INFORMAȚII
        </Badge>
      </Group>

      <Title className={classes.title} order={2}>
        Explorează Împreună Învigem
      </Title>

      <Container size={660} p={1}>
        <Text c="dimmed" className={classes.description}>
          Cancerul poate fi o perioadă extrem de dificilă, dar nu trebuie să
          treci prin ea singur. Alătură-te pentru a găsi conexiuni valoroase și
          inspirație în această călătorie.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
