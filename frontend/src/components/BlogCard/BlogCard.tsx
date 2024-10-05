import {
  Card,
  Image,
  Text,
  Group,
  Center,
  Avatar,
  Button,
  SimpleGrid,
  Badge,
} from "@mantine/core";
import classes from "./BlogCard.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { response } from "express";
import deleteIcon from "../../assets/icons8-delete-24.png";

export function BlogCard() {
  const [blogs, setBlogs] = useState([
    {
      titlu: "",
      descriere: "",
      blog_id: "",
      picture: "",
      nume: "",
      prenume: "",
      avatar: "",
    },
  ]);

  const fetchBlogs = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("token-ul lipseste");
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const apiBlogs = "http://localhost:8081/blog-details";
    axios
      .get(apiBlogs, config)
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);
        fetchBlogs();
      })
      .catch((error) => {
        console.error("eroare");
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDeleteButton = async (blog_id: any) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("token-ul lipseste");
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { blog_id },
    };
    const deleteBlog = `http://localhost:8081/deleteBlog`;
    try {
      const response = await axios.post(deleteBlog, { blog_id }, config);
      console.log(response.data);
      fetchBlogs();
    } catch (error) {
      console.error("eroare in stergerea blogului", error);
    }
  };

  const navigate = useNavigate();
  const handleSinglePageBlog = (blog_id: string) => {
    navigate(`/povestea-mea/${blog_id}`);
  };

  return (
    <div className="card-container">
      <Badge variant="filled" size="lg" color="#9a5576" mt={40} p={15} ml={150}>
        POSTARILE TALE
      </Badge>

      <Center>
        <SimpleGrid cols={{ base: 1, md: 3 }} mt={50}>
          {blogs.map((blog) => (
            <Center key={blog.blog_id}>
              <Card
                withBorder
                radius="md"
                m={5}
                shadow="lg"
                className={classes.card}
              >
                <Card.Section>
                  <a>
                    <Image
                      src={`data:image/jpeg;base64,${blog.picture}`}
                      height={200}
                      p={10}
                      radius={15}
                    />
                  </a>
                </Card.Section>

                <Text fw={500} component="a">
                  {blog.titlu}
                </Text>

                <Text fz="sm" c="dimmed" lineClamp={7}>
                  {blog.descriere}
                </Text>

                <Group justify="space-between" className={classes.footer}>
                  <Avatar
                    src={`data:image/jpeg;base64,${blog.avatar}`}
                    size={35}
                    radius="xl"
                    mb={10}
                    style={{
                      position: "absolute",
                      bottom: "12px",
                    }}
                  />
                  <Text
                    fz={14}
                    inline
                    mb={20}
                    ml={40}
                    style={{
                      position: "absolute",
                      bottom: "12px",
                    }}
                  >
                    {blog.nume} {blog.prenume}
                  </Text>
                  <Group>
                    <Button
                      color="#FFF"
                      mt="xs"
                      mb={8}
                      mr="xs"
                      ml={190}
                      pr={10}
                      style={{
                        position: "absolute",
                        bottom: "12px",
                      }}
                      onClick={() => handleDeleteButton(blog.blog_id)}
                    >
                      <Image src={deleteIcon} width={20} height={20}></Image>
                    </Button>
                    <Button
                      mt="xs"
                      mr="xs"
                      mb={8}
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        right: "10px",
                      }}
                      onClick={() => handleSinglePageBlog(blog.blog_id)}
                    >
                      Read more
                    </Button>
                  </Group>
                </Group>
              </Card>
            </Center>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
}
