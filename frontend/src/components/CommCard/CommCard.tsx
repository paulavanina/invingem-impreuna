import {
  Badge,
  Avatar,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Center,
} from "@mantine/core";
import avatar1 from "../../assets/p1.avif";
import avatar2 from "../../assets/p3.avif";
import avatar3 from "../../assets/p2.avif";
import classes from "./CommCard.module.css";
import avatar4 from '../../assets/av5.avif'
import avatar5 from "../../assets/avatar4.avif"
import avatar6 from "../../assets/av6.jpg"

const mockdata = [
  {
    id: 1,
    avatar: avatar1,
    name: "Evelin P.",
    status: "Pacient oncologic",
    content:
      "Webinariile oferite au fost extrem de utile, oferindu-mi cunoștințele și sprijinul necesar pentru a înțelege mai bine situația mea",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Andrei M.",
    status: "Susținător",
    content:
      "Deși nu mă confrunt cu boala, resursele de pe acest site mi-au oferit o perspectivă nouă și m-au ajutat să înțeleg mai bine prin ce trec ceilalți.",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Alisa B.",
    status: "Pacient oncologic",
    content:
      "Fiecare zi a fost o luptă, dar fiecare zi a fost și o oportunitate de a învăța, de a crește și de a găsi bucuria în lucrurile simple.",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "Mihai T.",
    status: "Pacient oncologic",
    content: "Mi-a oferit un spațiu sigur unde pot să îmi împărtășesc gândurile și să găsesc încurajare din partea celorlalți membri ai comunității."
  },
  {
    id: 5,
    avatar: avatar5,
    name: "Ioana R.",
    status: "Susținător",
    content: "Resursele oferite m-au ajutat să îmi gestionez mai bine anxietatea și să găsesc metode practice de a face față provocărilor zilnice. Îmi place că este ușor de accesat."
  },
  {
    id: 6,
    avatar: avatar6,
    name: "Cristian V.",
    status: "Pacient oncologic",
    content: "Comunitatea din aplicație a fost un sprijin enorm pentru mine. Am găsit oameni care trec prin experiențe similare și care m-au înțeles cu adevărat."
  }
];

export function CommCard() {

  const features = mockdata.map((feature) => (
    <Center>
      <Card
        key={feature.name}
        shadow="md"
        radius="md"
        className={classes.card}
        padding="sm"
      >
        <Group>
          <Avatar src={feature.avatar} alt={feature.name} radius="xl" />
          <Text fz="lg" className={classes.cardTitle} mt="md">
            {" "}
            {feature.name}{" "}
            <Text fz="sm" color="#d4a480">
              {feature.status}
            </Text>
          </Text>
        </Group>
        <Text fz="sm" c="dimmed" p={1}>
          {feature.content}
        </Text>
      </Card>
    </Center>
  ));

  return (
    <div style={{ backgroundColor: "#eaf3e2" }}>
      <Container className={classes["container-background"]}>
        <Group justify="center" >
          <Badge color="#43824f" size="lg" mt={50}>
            RECENZII SI TESTIMONIALE
          </Badge>
        </Group>

        <Title order={2} className={classes.title} ta="center" mt={20}>
          Ce Spun Utilizatorii Noștri?
        </Title>
        <Center>
          <Text c="dimmed" className={classes.description} ta="center">
            Citește mai jos câteva dintre experiențele împărtășite de utilizatorii
            noștri. Cuvintele comunității noastre reflectă sprijinul și inspirația
            pe care le găsim împreună.
          </Text>
        </Center>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50} mb={60}>
          {features}
        </SimpleGrid>
      </Container>
    </div>
  );
}