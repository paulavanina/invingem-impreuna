import axios from "axios";
import {
  Text,
  Container,
  Avatar,
  Group,
  Center,
} from "@mantine/core";
import classes from "./SinglePageText.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddComment } from "../Comments/AddComment";
import { Comm } from "../Comments/Comment";

interface Blog {
  titlu: string;
  descriere: string;
  blog_id: string;
  picture: string;
  nume: string;
  prenume: string;
  avatar: string;
}

export function BlogSinglePage() {
  const { blog_id } = useParams();
  const [blog, setBlogs] = useState<Blog>({
    titlu: "",
    descriere: "",
    blog_id: "",
    picture: "",
    nume: "",
    prenume: "",
    avatar: "",
  });

  const fetchBlogs = async () => {
    const apiSinglePageBlog = `https://invingem-impreuna-backend-production.up.railway.app/blog-page-details/${blog_id}`;
    axios
      .get(apiSinglePageBlog)
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("eroare");
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, [blog_id]);


  const isLoggedIn = Boolean(localStorage.getItem("token"));

  return (
    <div className={classes.containerBlogs}>
      <Container className={classes.wrapper} size={1400} mt={100}>

        <Container size={900}><Group justify="space-between">
          <Center>
            <Avatar
              src={`data:image/jpeg;base64,${blog.avatar}`}
              size={50}
              radius="xl"
              mr="xs"
            />
            <Text fz={16} inline>
              {blog.nume} {blog.prenume}
            </Text>
          </Center>
        </Group>
          <Text fz={22} pt={10} className={classes.title}>{blog.titlu}</Text>
          <img
            className={classes.img}
            src={`data:image/jpeg;base64,${blog.picture}`}
          />
          <Text fz={17} c="dimmed" mb={10} className={classes.description}>
            {blog.descriere}
          </Text>
          {isLoggedIn && <AddComment />}
          <Comm blog_id={blog_id!} />
        </Container>
      </Container>

    </div>
  );
}

export default BlogSinglePage;