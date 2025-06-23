import { Button, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface CommentInterface {
    comment: string;
}

export const AddComment = () => {
    const { blog_id } = useParams();
    const [loading, setLoading] = useState(false);

    const form = useForm<CommentInterface>({
        initialValues: {
            comment: "",
        },
        validate: {
            comment: (value) =>
                value.trim().length === 0 ? "Comentariul nu poate fi gol" : null,
        },
    });

    const handleSubmit = async (values: CommentInterface) => {
        if (!blog_id) {
            console.error("blog_id lipseste din URL");
            return;
        }
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("token-ul lipseste");
                return;
            }
            setLoading(true);

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            };

            const comm = {
                comment: values.comment,
                blog_id: blog_id,
            };

            const commentURL =
                "https://invingem-impreuna-backend-production.up.railway.app/comment";

            const response = await axios.post(commentURL, comm, config);
            console.log("raspuns server :", response.data);
            form.reset();
        } catch (error) {
            console.error("Eroare in inserarea datelor in baza de date:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <div className="commentInput">
                    <div className="textarea">
                        <Textarea
                            radius="md"
                            placeholder="Adaugă un comentariu"
                            autosize
                            mb={10}
                            minRows={4}
                            {...form.getInputProps("comment")}
                        />
                    </div>
                    <Button
                        type="submit"
                        radius={8}
                        style={{ backgroundColor: "#43824f" }}
                        loading={loading}
                    >
                        Adaugă
                    </Button>
                </div>
            </form>
        </div>
    );
};
