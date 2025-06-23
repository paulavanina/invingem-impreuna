import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text, Input, Button } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
  { label: 'Despre noi', link: '/despre-noi' },
  { label: 'Povestea mea', link: '/povestea-mea' },
  { label: 'Comunitate', link: '/comunitate' },
];

export function FooterCentered() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xl" fw={700}>
            împreună învingem
          </Text>
          <Text size="sm" c="dimmed" className={classes.description}>
            O comunitate dedicată sprijinirii și conectării persoanelor care trec prin provocări similare. Alătură-te nouă și descoperă puterea comunității!
          </Text>
        </div>

        {/* Link-uri */}
        <div className={classes.links}>
          {links.map((link, index) => (
            <Text<'a'>
              key={index}
              className={classes.link}
              component="a"
              href={link.link}
              onClick={(event) => event.preventDefault()}
            >
              {link.label}
            </Text>
          ))}
        </div>

        {/* Newsletter */}
        <div className={classes.newsletter}>
          <Text size="sm" fw={500} mb={10}>
            Fii parte din comunitate
          </Text>
          <Group>
            <Button className={classes.subscribeButton} color='#d4a480' radius={30}>Sign Up</Button>

          </Group>
        </div>
      </Container>

      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 Invingem Impreuna. Toate drepturile sunt rezervate
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}