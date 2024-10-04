import { Group, Text, Center } from "@mantine/core";
import classes from "./Footer.module.css";
const links = [
  { label: "DESPRE NOI", link: "/despre-noi" },
  { label: "POVESTEA MEA", link: "povestea-mea" },
  { label: "COMUNITATE", link: "comunitate" },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Text<"a"> className={classes.link} component="a" href={link.link} fz={13}>
      {link.label}
    </Text>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Center>
          <Group className={classes.links}>{items}</Group>
        </Center>
        <Center>
          <Text fz={15} color="#FFFF" pt={10}>
            © 2024 Impreuna Invingem.
          </Text>
        </Center>
      </div>
    </div>
  );
}
