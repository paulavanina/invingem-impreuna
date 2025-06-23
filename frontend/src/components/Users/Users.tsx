import { Avatar, Badge, Button, Center, Group, Image, Table, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import deleteIcon from "../../assets/delete.png"
import editIcon from "../../assets/edit.png"

export function Users() {
    const [users, setUsers] = useState([
        {
            userUUID: "",
            nume: "",
            prenume: "",
            email: "",
            avatar: "",
            role: ""
        },
    ]);
    const fetchUsers = async () => {
        const apiUsers = "https://invingem-impreuna-backend-production.up.railway.app/test";
        axios
            .get(apiUsers)
            .then((response) => {
                setUsers(response.data.response);

            })
            .catch((error) => {
                console.error("eroare");
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (userUUID: string) => {
        const confirmare = window.confirm("Esti sigur ca doresti sa stergi acest utilizator?");
        if (!confirmare) return;
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`https://invingem-impreuna-backend-production.up.railway.app/users/${userUUID}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
            fetchUsers();
        } catch (error) {
            console.log(userUUID);
            console.error("Eroare la stergerea utilizatorului", error);
        }
    }

    const [editUserId, setEditUserId] = useState("");
    const [newRole, setNewRole] = useState<{ [key: string]: string }>({}); //stocheaza rolul selectat pt fiecare user
    const editRole = async (userUUID: string) => {
        const selectedRole = newRole[userUUID]; //ia rolul selectat pentru acel user
        try {
            const token = localStorage.getItem("token");
            await axios.put(`https://invingem-impreuna-backend-production.up.railway.app/role/${userUUID}`, { role: selectedRole }, { headers: { Authorization: `Bearer ${token}` } });
            console.log("Trimitem spre update:", userUUID, selectedRole);
            fetchUsers();
        } catch (error) {
            console.error("Eroare in actualizarea rolului", error);
        }
    }

    const rows = users.map((user) => (
        <Table.Tr key={user.userUUID}>
            <Table.Td>
                <Text fz="sm" fw={500}>
                    {user.nume} {user.prenume}
                </Text>
            </Table.Td>

            <Table.Td>
                <Text >
                    {user.email}
                </Text>
            </Table.Td>

            <Table.Td>
                <Text >
                    {user.role}
                </Text>
            </Table.Td>

            <Table.Td>
                {/* daca adminul e in stare de editare de afiseaza select si butonul de salvare */}
                {editUserId === user.userUUID ? (
                    <>
                        <select
                            value={newRole[user.userUUID]}
                            onChange={(e) =>
                                setNewRole((prev) => ({
                                    ...prev,
                                    [user.userUUID]: e.target.value,
                                }))
                            }
                        >
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                        <Button size="xs" onClick={() => editRole(user.userUUID)}>Salvează</Button>
                    </>
                ) : (
                    <Button
                        variant="subtle"
                        onClick={() => {
                            setEditUserId(user.userUUID);
                            setNewRole((prev) => ({
                                ...prev,
                                [user.userUUID]: user.role,
                            }));
                        }}
                    >
                        <Image src={editIcon} alt="Editează" width={20} height={20} />
                    </Button>
                )}
            </Table.Td>

            <Table.Td>
                <Button variant="subtle" onClick={() => handleDelete(user.userUUID)}>
                    <Image src={deleteIcon} alt="Șterge" width={20} height={20} />
                </Button>
            </Table.Td>

        </Table.Tr>
    ));

    return (
        <div>
            <Center> <Badge color="#43824f" size="lg" m={20}>
                Utilizatori
            </Badge>
            </Center>
            <Table.ScrollContainer minWidth={800} pl={40} pr={40}>
                <Table verticalSpacing="sm">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Nume</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Rol</Table.Th>
                            <Table.Th>Editeaza</Table.Th>
                            <Table.Th>Sterge cont</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </div>
    );
}