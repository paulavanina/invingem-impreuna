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

const mockdata = [
  {
    id: 1,
    avatar: avatar1,
    name: "Evelin P.",
    status: "Cancer Fighter",
    content:
      "Webinariile oferite au fost extrem de utile, oferindu-mi cunoștințele și sprijinul necesar pentru a înțelege mai bine situația mea",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Andrei M.",
    status: "Supporter",
    content:
      "Deși nu mă confrunt cu boala, resursele de pe acest site mi-au oferit o perspectivă nouă și m-au ajutat să înțeleg mai bine prin ce trec ceilalți.",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Alisa B.",
    status: "Cancer Fighter",
    content:
      "Fiecare zi a fost o luptă, dar fiecare zi a fost și o oportunitate de a învăța, de a crește și de a găsi bucuria în lucrurile simple.",
  },
];

export function CommCard() {
  // const theme = useMantineTheme();
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
            <Text fz="sm" color="#068466">
              {feature.status}
            </Text>
          </Text>
        </Group>
        <Text fz="sm" c="dimmed" p={10} pt={0}>
          {feature.content}
        </Text>
      </Card>
    </Center>
  ));

  return (
    <Container className={classes["container-background"]}>
      <Group justify="center" pt={60}>
        <Badge color="#068466" size="lg">
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
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
