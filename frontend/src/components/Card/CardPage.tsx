import {
  Card,
  Image,
  Text,
  Group,
  Center,
  Avatar,
  Button,
  SimpleGrid,
  Title,
} from "@mantine/core";
import classes from "./CardPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";
import { useNavigate } from "react-router-dom";

export function CardPage() {
  const navigate = useNavigate();
  const handleSinglePageBlog = (blog_id: string) => {
    navigate(`/povestea-mea/${blog_id}`);
  };
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
    const apiBlogs = "https://invingem-impreuna-backend-egdhhxdaeuehcca7.westeurope-01.azurewebsites.net/blogs";
    axios
      .get(apiBlogs)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("eroare");
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="card-container">
      <Center p="sm" mt={40} className="page-title">
        <Title>
          Împărtășește,{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "pink", to: "yellow" }}
          >
            Inspiră
          </Text>{" "}
          și Susține
        </Title>
      </Center>
      <Center>
        <SimpleGrid cols={{ base: 1, md: 3 }} mt={50}>
          {blogs.map((blog) => (
            <Center key={blog.blog_id}>
              <Card withBorder radius="md" shadow="lg" className={classes.card}>
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

                <Text fw={500} component="a" lineClamp={1}>
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
                    ml={45}
                    style={{
                      position: "absolute",
                      bottom: "12px",
                    }}
                  >
                    {blog.nume} {blog.prenume}
                  </Text>
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
              </Card>
            </Center>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
}
