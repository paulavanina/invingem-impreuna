import {
  Avatar,
  Button,
  TextInput,
  Center,
  FileInput,
  Textarea,
} from "@mantine/core";
import "./DetaliiCont.css";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useEffect, useState } from "react";
import { response } from "express";
import { useNavigate } from "react-router-dom";

interface BlogInterface {
  titlu: string;
  descriere: string;
}
export const DetaliiCont = () => {
  const Blog = {
    initialValues: {
      mode: "uncontrolled",
      titlu: "",
      descriere: "",
      picture: "",
    },
  };
  const form = useForm<BlogInterface>(Blog);

  const [userData, setUserData] = useState({
    nume: "",
    prenume: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
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
    const userProfileURL = "https://invingem-impreuna-backend-production.up.railway.app/user-profile";

    axios
      .get(userProfileURL, config)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("eroare");
      });
  }, []);

  const handleSubmit = async (values: BlogInterface) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("token-ul lipseste");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.append("titlu", values.titlu);
      formData.append("descriere", values.descriere);
      formData.append("picture", (values as any).picture);
      const blogURL = "https://invingem-impreuna-backend-production.up.railway.app/blog";
      const response = await axios.post(blogURL, formData, config);
      console.log(response.data);
    } catch (error) {
      console.error("Eroare in inserarea datelor in bd.");
    }
  };
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setisLoggedIn(false);
    navigate("/login");
  };
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <Center>
      <div className="contul-meu">
        <div className="profile-container">
          <Avatar
            className="avatar"
            src={`data:image/jpeg;base64,${userData.avatar}`}
            size={130}
            radius={80}
            mx="auto"
            mt={70}
          />
          <div className="nume">Nume: {userData.nume}</div>
          <div className="prenume">Prenume: {userData.prenume} </div>
          <div className="email">Email: {userData.email}</div>
          <Center>
            {" "}
            <Button mt={60} onClickCapture={logout} radius={20} style={{ backgroundColor: "#d4a480" }} >
    
              Log out
            </Button>
          </Center>
        </div>

        {/* Blog: */}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <div className="content-container">
            <TextInput
              label="Titlu"
              placeholder="Titlul postarii"
              p={20}
              pb={0}
              key={form.key("titlu")}
              {...form.getInputProps("titlu")}
            ></TextInput>
            <div className="textarea">
              <Textarea
                label="Descriere"
                placeholder="Descrie postarea ta"
                autosize
                minRows={6}
                p={20}
                pb={0}
                key={form.key("descriere")}
                {...form.getInputProps("descriere")}
              />
            </div>
            <div className="img-container">
              <FileInput
                accept="image/png,image/jpeg"
                label="Incarca o imagine:"
                placeholder="Upload files"
                onChange={(file) => form.setFieldValue("picture", file)}
              />
            </div>

            <Button type="submit"  radius={20} m={20} className="button"  style={{ backgroundColor: "#43824f" }} >
              Publica postarea
            </Button>
          </div>
        </form>
      </div>
    </Center>
  );
};

export default DetaliiCont;
