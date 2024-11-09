import {
  Button,
  Group,
  TextInput,
  FileInput,
  PasswordInput,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import "./SignUp.css";
import { SignUpValidation } from "./SignUpValidation";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import welcome from "../../assets/flat-design-colorful-characters-welcoming.png";
import { useNavigate } from "react-router-dom";
import xIcon from "../../assets/icons8-x.gif";
import { Isignup } from "./SignUpValidation";
export function SignUp() {
  const form = useForm<Isignup>(SignUpValidation);

  const handleSubmit = async (values: Isignup) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.append("nume", values.nume);
      formData.append("prenume", values.prenume);
      formData.append("email", values.email);
      formData.append("parola", values.parola);
      formData.append("avatar", (values as any).avatar);
      //https://backend-invingem-impreuna-ctd6c8fwetdxamc4.westeurope-01.azurewebsites.net/
      const signupURL = "http://localhost:8081/signup";
      const response = await axios.post(signupURL, formData, config);
      if (response.status === 200) {
        open();
      }
    } catch (error: any) {
      console.error("Eroare la inregisrare", error);
      if (error.response && error.response.status === 400) {
        console.log("email-ul exista deja.");
        openError();
      }
    }
  };
  //pop-up
  const [opened, { open, close }] = useDisclosure(false);
  const [openedError, { open: openError, close: closeError }] =
    useDisclosure(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            className="form-component"
            withAsterisk
            label="Nume"
            placeholder="Numele tau"
            key={form.key("nume")}
            {...form.getInputProps("nume")}
          />
          <TextInput
            className="form-component"
            withAsterisk
            label="Prenume"
            placeholder="Prenumele tau"
            key={form.key("prenume")}
            {...form.getInputProps("prenume")}
          />
          <FileInput
            m={10}
            accept="image/png,image/jpeg"
            label="Incarca o imagine:"
            placeholder="imagine"
            onChange={(file: any) => form.setFieldValue("avatar", file)}
          />
          <TextInput
            className="form-component"
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            className="form-component"
            withAsterisk
            label="Parola"
            placeholder="parola"
            key={form.key("parola")}
            {...form.getInputProps("parola")}
          />

          <Modal opened={opened} onClose={close}>
            <div className="modal-container">
              <div className="modal-top">
                <img src={welcome} width={400} />
              </div>
              <div className="modal-center">
                Contul tau a fost creat cu succes!
              </div>
              <div className="modal-bottom">
                <Button type="submit" onClick={handleLogin}>
                  Login
                </Button>
              </div>
            </div>
          </Modal>

          <Modal opened={openedError} onClose={closeError}>
            <div className="error-modal-container">
              <div className="error-modal-top">
                <Center>
                  <img src={xIcon} width={60} />
                </Center>
              </div>
              <div className="error-modal-center">
                Acest email a fost utilizat! Te rugam reincearca creearea
                contului.
              </div>
            </div>
          </Modal>

          <Group justify="center" pr={10} pt={8}>
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </div>
    </div>
  );
}
