import {
  Group,
  Button,
  Box,
  Burger,
  Drawer,
  Image,
  Center,
} from "@mantine/core";
import Logo from "../../assets/logo-final.png";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/icons8-user-48.png";
export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/logIn");
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img src={Logo} style={{ width: "90px", height: "auto" }} />
          <Group h="100%" gap={1} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              Despre noi
            </Link>
            <Link to="/povestea-mea" className={classes.link}>
              Povestea mea
            </Link>
            <a href="/comunitate" className={classes.link}>
              Comunitate
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Link to="/contulMeu" className={classes.link}>
              <Image src={profile} width="30" height="30"></Image>
            </Link>
            <Button variant="default" onClick={handleLogin} radius="xl">
              Log in
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              onClick={handleSignUp}
              radius="xl"
            >
              Sign up
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigare"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <a href="/" className={classes.link}>
          Despre Noi
        </a>
        <a href="povestea-mea" className={classes.link}>
          Povestea Mea
        </a>
        <a href="/comunitate" className={classes.link}>
          Comunitate
        </a>
        <Group>
          <Center>
            <Button
              variant="default"
              onClick={handleLogin}
              radius="xl"
              mr={10}
              mt={10}
            >
              Log in
            </Button>
            <Button
              mt={10}
              onClick={handleSignUp}
              radius="xl"
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
            >
              Sign up
            </Button>
          </Center>
        </Group>
      </Drawer>
    </Box>
  );
}
