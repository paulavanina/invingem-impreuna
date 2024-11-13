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
import bookIcon from "../../assets/blog-post-list-2.jpg";
import heartIcon from "../../assets/h2-blog-img-1.jpg";
import messageIcon from "../../assets/h2-blog-img-3.jpg";
import webinareIcon from "../../assets/laptop.jpg";
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
         style={{ padding: 0, backgroundColor: 'transparent' }}
        className={classes.itemIcon}
        size={200}
        radius="md"
      >
       <img src={item.image} style={{ width: '100%', height: '100%', borderRadius: 'inherit' }} />
      </ThemeIcon>

      <div>
        <Text fw={600}>{item.title}</Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={900} className={classes.wrapper}>
      <Group justify="center" pb={20}>
        <Badge size="lg" color="#43824f">
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
