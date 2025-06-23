import {
  Avatar,
  Button,
  TextInput,
  Center,
  FileInput,
  Textarea,
  Modal,
} from "@mantine/core";
import "./DetaliiCont.css";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
interface BlogInterface {
  titlu: string;
  descriere: string;
  picture: File | null;
}

export const DetaliiCont = () => {
  const blogForm = useForm<BlogInterface>({
    initialValues: {
      titlu: "",
      descriere: "",
      picture: null,
    },

    validate: {
      titlu: (value) =>
        value.trim().length < 5 ? "Titlul trebuie să aibă cel puțin 5 caractere" : null,

      descriere: (value) =>
        value.trim().length < 10 ? "Descrierea este prea scurtă" : null,
    },
  });

  const [userData, setUserData] = useState({
    nume: "",
    prenume: "",
    email: "",
    avatar: "",
    userUUID: "",
  });
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("token-ul lipsește");
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.get(
        "https://invingem-impreuna-backend-production.up.railway.app/user-profile",
        config
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Eroare la preluarea profilului");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = async (values: BlogInterface) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const formData = new FormData();
      formData.append("titlu", values.titlu);
      formData.append("descriere", values.descriere);
      if (values.picture) formData.append("picture", values.picture);

      await axios.post(
        "https://invingem-impreuna-backend-production.up.railway.app/blog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      blogForm.reset();
    } catch (error) {
      console.error("Eroare la publicarea postării");
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
            <Button
              mt={20}
              radius={20}
              style={{ backgroundColor: "#d4a480" }}
              onClick={() => setEditModalOpen(true)}
            >
              Editează contul
            </Button>
          </Center>

          <Modal
            opened={editModalOpen}
            onClose={() => setEditModalOpen(false)}
            title="Editează contul"
            centered
            size="lg"
          >
            <EditProfile
              userData={userData}
              onUpdateSuccess={() => {
                setEditModalOpen(false);
                fetchUserData();
              }}
            />
          </Modal>

          <Center>
            <Button
              mt={10}
              radius={20}
              onClickCapture={logout}
              style={{ backgroundColor: "#d4a480" }}
            >
              Log out
            </Button>
          </Center>
        </div>

        {/* Form publicare postare */}
        <form onSubmit={blogForm.onSubmit((values) => handleSubmit(values))}>
          <div className="content-container">
            <TextInput
              label="Titlu"
              placeholder="Titlul postării"
              p={20}
              pb={0}
              {...blogForm.getInputProps("titlu")}
            />
            <div className="textarea">
              <Textarea
                label="Descriere"
                placeholder="Descrie postarea ta"
                autosize
                minRows={6}
                p={20}
                pb={0}
                {...blogForm.getInputProps("descriere")}
              />
            </div>
            <div className="img-container">
              <FileInput
                accept="image/png,image/jpeg"
                label="Încarcă o imagine:"
                placeholder="Upload"
                onChange={(file) => blogForm.setFieldValue("picture", file)}
              />
            </div>
            <Button
              type="submit"
              radius={20}
              m={20}
              className="button"
              style={{ backgroundColor: "#43824f" }}
            >
              Publică postarea
            </Button>
          </div>
        </form>
      </div>
    </Center>
  );
};

export default DetaliiCont;
