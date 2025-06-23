import { Avatar, Badge, Button, Center, Group, Table, Text, Image } from '@mantine/core';
import { useState, useEffect } from 'react';
import deleteIcon from "../../assets/delete.png"
import axios from 'axios';

export function Blogs() {
    const [blogs, setBlogs] = useState([
        {
            titlu: "",
            descriere: "",
            blog_id: "",
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

    const handleDelete = async (blog_id: string) => {
        const confirmare = window.confirm("Esti sigur ca doresti sa stergi acest blog?");
        if (!confirmare) return;
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`https://invingem-impreuna-backend-production.up.railway.app/blogs/${blog_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
        } catch (error) {
            console.error("Eroare la stergerea blogului", error);
        }
    }

    const rows = blogs.map((blog) => (
        <Table.Tr key={blog.blog_id}>
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={40} src={`data:image/jpeg;base64,${blog.avatar}`} radius={40} />
                    <div>
                        <Text fz="sm" fw={500}>
                            {blog.nume} {blog.prenume}
                        </Text>
                    </div>
                </Group>
            </Table.Td>

            <Table.Td>
                <Text >
                    {blog.titlu.length > 50
                        ? blog.titlu.slice(0, 50) + "..."
                        : blog.titlu}
                </Text>
            </Table.Td>
            <Table.Td>
                {blog.descriere.length > 50
                    ? blog.descriere.slice(0, 50) + "..."
                    : blog.descriere}
            </Table.Td>

            <Table.Td>
                <Button variant="subtle" onClick={() => handleDelete(blog.blog_id)} >
                    <Image src={deleteIcon} alt="Șterge" width={20} height={20} />
                </Button>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <Center> <Badge color="#43824f" size="lg" m={20}>
                Povesti postate
            </Badge>
            </Center>

            <Table.ScrollContainer minWidth={800} pl={40} pr={40}>
                <Table verticalSpacing="sm">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Nume</Table.Th>
                            <Table.Th>Titlu</Table.Th>
                            <Table.Th>Descriere</Table.Th>
                            <Table.Th>Sterge blog</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </div>
    );

}