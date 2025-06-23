import { Avatar, Button, Group, Paper, Text, TypographyStylesProvider } from '@mantine/core';
import classes from './Comment.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Comment {
    nume: string;
    prenume: string;
    avatar: string;
    comment_id: string;
    comment: string;
    blog_id: string;
    created_at: string;
    user_id: string;
}
interface CommProps {
    blog_id: string;
}

export function Comm({ blog_id }: CommProps) {
    const currentUserId = localStorage.getItem("user_id");

    const [comments, setComments] = useState<Comment[]>([]);

    const fetchComments = async () => {
        try {
            const response = await axios.get(
                `https://invingem-impreuna-backend-production.up.railway.app/comments`
                , { params: { blog_id } }
            );
            setComments(response.data);
            fetchComments();
        } catch (error) {
            console.error("Eroare în preluarea comentariilor:", error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [blog_id]);

    const deleteComment = async (comment_id: string) => {
        try {

            const token = localStorage.getItem("token");
            await axios.delete(`https://invingem-impreuna-backend-production.up.railway.app/comments/${comment_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(comment_id);
            fetchComments();
        } catch (error) {
            console.error("eroare in stergerea comentariului", error);
        }
    }

    return (
        <>
            {comments.map((comm) => {
                return (
                    <Paper withBorder radius="md" className={classes.comment} key={comm.comment_id}>
                        <Group>
                            <Avatar
                                src={`data:image/jpeg;base64,${comm.avatar}`}
                                radius="xl"
                            />
                            <div>
                                <Text fz="sm">
                                    {comm.nume} {comm.prenume}
                                </Text>
                                <Text fz="xs" c="dimmed">
                                    {new Date(comm.created_at).toLocaleString("ro-RO", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </Text>
                            </div>
                        </Group>
                        <TypographyStylesProvider className={classes.body}>
                            <Text fz={17} c="dimmed" className={classes.content}>
                                {comm.comment}
                            </Text>

                            {String(comm.user_id) === String(currentUserId) && (
                                <Button
                                    color="red"
                                    size="xs"
                                    variant="subtle"
                                    onClick={() => deleteComment(comm.comment_id)}
                                    style={{ marginTop: 8 }}
                                >
                                    Șterge
                                </Button>
                            )}

                        </TypographyStylesProvider>
                    </Paper>
                );
            })}
        </>
    );
}