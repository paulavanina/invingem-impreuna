import { TextInput, FileInput, Button, Stack, Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useEffect } from "react";
import "./DetaliiCont.css";

interface EditProfileProps {
    userData: {
        nume: string;
        prenume: string;
        email: string;
        avatar: string;
    };
    onUpdateSuccess?: () => void;
}
const EditProfile = ({ userData, onUpdateSuccess }: EditProfileProps) => {
    const form = useForm({
        initialValues: {
            nume: "",
            prenume: "",
            email: "",
            avatar: null as File | null,
        },
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        axios
            .get("https://invingem-impreuna-backend-production.up.railway.app/user-profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const data = response.data;
                form.setValues({
                    nume: data.nume,
                    prenume: data.prenume,
                    email: data.email,
                    avatar: null,
                });
            })
            .catch((error) => {
                console.error("Eroare la preluarea datelor utilizatorului", error);
            });
    }, [userData]);

    const handleUpdate = async (values: typeof form.values) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        if (!token) return;

        const formData = new FormData();
        formData.append("nume", values.nume);
        formData.append("prenume", values.prenume);
        formData.append("email", values.email);
        formData.append("userUUID", user_id || "");
        if (values.avatar) {
            formData.append("avatar", values.avatar);
        }

        try {
            const response = await axios.put(
                "https://invingem-impreuna-backend-production.up.railway.app/updateProfile",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Profil actualizat cu succes", response.data);
        } catch (error) {
            console.error("Eroare la actualizarea profilului", error);
        }
    };

    return (
        <form onSubmit={form.onSubmit(handleUpdate)}>
            <Stack p="md">
                <TextInput label="Nume" {...form.getInputProps("nume")} />
                <TextInput label="Prenume" {...form.getInputProps("prenume")} />
                <TextInput label="Email" type="email" {...form.getInputProps("email")} />
                <FileInput
                    label="Actualizează avatarul"
                    accept="image/png,image/jpeg"
                    onChange={(file) => form.setFieldValue("avatar", file)}
                />
                <Button type="submit" style={{ backgroundColor: "#d4a480" }}>
                    Salvează modificările
                </Button>
            </Stack>
        </form>
    );
};

export default EditProfile;
