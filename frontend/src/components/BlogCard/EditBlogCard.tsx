import { TextInput, FileInput, Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useEffect } from "react";
import "../DetaliiCont/DetaliiCont.css"
interface EditBlogProps {
    blog_id: string;
    titlu: string;
    descriere: string;
    onUpdateSuccess: () => void;
}

const EditBlogCard = ({ blog_id, titlu, descriere, onUpdateSuccess }: EditBlogProps) => {
    const form = useForm({
        initialValues: {
            titlu: "",
            descriere: "",
            picture: null as File | null,
        },
    });
    useEffect(() => {
        form.setValues({
            titlu: titlu || "",
            descriere: descriere || "",
            picture: null,
        });
    }, [titlu, descriere]);

    const handleUpdate = async (values: typeof form.values) => {
        const token = localStorage.getItem("token");
        if (!token) return;

        const formData = new FormData();
        formData.append("titlu", values.titlu);
        formData.append("descriere", values.descriere);
        if (values.picture) {
            formData.append("picture", values.picture);
        }
        formData.append("blog_id", blog_id);

        try {
            await axios.put(
                "https://invingem-impreuna-backend-production.up.railway.app/updateBlog",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            onUpdateSuccess();
        } catch (error) {
            console.error("Eroare la actualizarea blogului", error);
        }
    };

    return (
        <form onSubmit={form.onSubmit(handleUpdate)}>
            <TextInput
                label="Titlu"
                placeholder="Titlul postării"
                p={20}
                pb={0}
                key={form.key("titlu")}
                {...form.getInputProps("titlu")}
            />
            <div className="textarea">
                <TextInput
                    p={20}
                    label="Descriere"
                    placeholder="Descrierea postării"
                    key={form.key("descriere")}
                    {...form.getInputProps("descriere")}
                />
            </div>
            <div className="img-container">
                <FileInput
                    accept="image/png,image/jpeg"
                    label="Actualizează imaginea"
                    placeholder="Upload files"
                    onChange={(file) => form.setFieldValue("picture", file)}
                />
            </div>
            <Button
                type="submit"
                radius={20}
                m={20}
                className="button"
                style={{ backgroundColor: "#43824f" }}
            >
                Salvează modificările
            </Button>

        </form>
    );
}
export default EditBlogCard;
