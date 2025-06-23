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
  Pagination,
} from "@mantine/core";
import arrowIcon from '../../assets/arrow-right-circle.svg'
import classes from "./CardPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CardPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

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
    const apiBlogs = "https://invingem-impreuna-backend-production.up.railway.app/blogs";
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

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const currentItems = blogs.slice((page - 1) * itemsPerPage, page * itemsPerPage);


  return (
    <div className={classes.containerBlogs}>
      <Center p="sm" mt={90} className="page-title">
        <Title>
          Împărtășește,{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "#d4a480", to: "#ab594a" }}
          >
            Inspiră
          </Text>{" "}
          și Susține
        </Title>
      </Center>
      <Center>
        <SimpleGrid cols={{ base: 1, md: 3 }} mt={50}>
          {currentItems.map((blog) => (
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

                <Text fz="sm" c="dimmed" lineClamp={4}>
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
                      <Image src={arrowIcon} />
                    </Group>
                  </Button>
                </Group>
              </Card>
            </Center>
          ))}
        </SimpleGrid>
      </Center>

      <Center mt={40}>
        <Pagination value={page} onChange={setPage} total={totalPages} color="rgb(67, 130, 79)" />
      </Center>
    </div>
  );
}
