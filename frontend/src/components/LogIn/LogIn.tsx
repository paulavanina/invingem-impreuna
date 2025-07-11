import { Button, Group, TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import './LogIn.css'
import { LoginValidation } from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Login() {
    type LoginValues = {
        email: string;
        parola: string;
    };
    const form = useForm(LoginValidation);

    const handleSubmit = async (values: any) => {
        try {
            const loginURL = "https://invingem-impreuna-backend-production.up.railway.app/login";
            const response = await axios.post(loginURL, values);

            const token = response.data.token;
            localStorage.setItem("token", token);

            const decoded = parseJwt(token);
            localStorage.setItem("user_id", decoded.id);
            localStorage.setItem("role", decoded.role);
            handleLogin();
        } catch (error) {
            window.alert("Email sau parolă incorecte. Vă rugăm să încercați din nou.");
            console.error("Eroare la autentificare.")
        }
    }

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/contulMeu');
    }

    //extragere ID-ul user-ului din token
    const parseJwt = (token: string) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            console.error("Token JWT invalid:", e);
            return null;
        }
    }
    return (
        <div className='background-container'>
            <div className='su-form-container'>
                <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                    <TextInput className='su-form-component'
                        withAsterisk
                        label="Email"
                        placeholder="invingemimpreuna@yahoo.com"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput className='su-form-component'
                        label="Parola"
                        placeholder="parola"
                        key={form.key('parola')}
                        {...form.getInputProps('parola')}
                    />

                    <Group justify="center" pr={10} pt={10} >
                        <Button type="submit" className='su-form-component' style={{ backgroundColor: "#43824f" }}>Submit</Button>
                    </Group>
                </form>
            </div>
        </div>
    );
}
