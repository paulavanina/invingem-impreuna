import { Text, Container} from '@mantine/core';
import classes from './FooterLinks.module.css';
import Logo from '../../assets/Împreună__5_-removebg-preview.png'
const data = [
  {
   title:'Link-uri utile :', 
    links: [
      { label: 'Despre noi', link: '/despre-noi' },
      { label: 'Povestea mea', link: 'povestea-mea' },
      { label: 'Comunitate', link: 'comunitate' },
    ],
  },

];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link} >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <img src={Logo} style={{width:'200px', height: 'auto'}} />
          <Text size="sm"  className={classes.description}>
          O comunitate online pentru toate varstele care se confrunta cu cancerul.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} >
        <Text fz={19}>
          © 2024 Impreuna Invingem. 
        </Text></Container>
    </footer>
  );
}