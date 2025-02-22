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
import arrowIcon from '../../assets/arrow-right-circle.svg'
export function BlogCard() {
  interface Blog {
    titlu: string;
    descriere: string;
    blog_id: string;
    picture: string;
    nume: string;
    prenume: string;
    avatar: string;
  }
  const [blogs, setBlogs] = useState<Blog[]>([]);

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
    const apiBlogs = "https://invingem-impreuna-backend-production.up.railway.app/blog-details";
    axios
      .get(apiBlogs, config)
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
    const deleteBlog = `https://invingem-impreuna-backend-production.up.railway.app/deleteBlog`;
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
  
  if (blogs.length === 0) {
    return null;
  }
  return (
    <div className="card-container">
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
                      src={`data:image/jpeg;base6z4,${blog.picture}`}
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
                      color="#fff"
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        right: "10px",
                      }}
                      styles={{
                        label: { color: "#43824f" } 
                      }}
                      onClick={() => handleSinglePageBlog(blog.blog_id)}
                    >
                    <Group>
                      Read more
                      <Image src={arrowIcon}/>
                    </Group>
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