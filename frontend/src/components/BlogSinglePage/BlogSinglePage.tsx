import axios from "axios";
import {
  Title,
  Text,
  Container,
  Avatar,
  Group,
  Center,
  Image,
  Button,
} from "@mantine/core";
import classes from "./SinglePageText.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import back from "../../assets/back.png";
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
    const apiSinglePageBlog = `http://localhost:8081/blog-page-details/${blog_id}`;
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

  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/povestea-mea");
  };

  const formatDate = (dateString:any) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ro-RO');
  };

  return (
    <div>
      <Container className={classes.wrapper} size={1400} mt={20}>
        <Group justify="space-between">
          <Center p={10}>
            <Avatar
              src={`data:image/jpeg;base64,${blog.avatar}`}
              size={50}
              radius="xl"
              mr="xs"
            />
            <Text fz={17} inline>
              {blog.nume} {blog.prenume}
              
            </Text>
          </Center>
        </Group>
        <Title className={classes.title}>{blog.titlu}</Title>
        <Image
          className="img"
          src={`data:image/jpeg;base64,${blog.picture}`}
          height={400}
          p={10}
          radius={15}
        />
        <Container p={30} size={800}>
          <Text fz={17} c="dimmed" className={classes.description}>
            {blog.descriere}
          </Text>
        </Container>
        <div style={{ display: "grid", justifyContent: "end" }}>
          <Button
            color="#FFF"
            radius="xl"
            mb={10}
            style={{ width: 40, height: 40, padding: 0 }}
            onClick={handleBackButton}
          >
            <Image src={back} width={40} height={40} />
          </Button>
        </div>
      </Container>
    </div>
    
    
  );
}
export default BlogSinglePage;