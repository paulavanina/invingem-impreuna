import {  Button, Group, TextInput, PasswordInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import './LogIn.css'
import { LoginValidation } from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login(){
    const form=useForm(LoginValidation);

    const handleSubmit=async(values:any)=>{
        try{
            const loginURL = "http://localhost:8081/login";
            const response=await axios.post(loginURL, values);
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
            handleLogin();
        }catch(error){
            console.error("Eroare la autentificare.")
        }
    }

    const navigate=useNavigate();
    const handleLogin=()=>{
        navigate('/contulMeu');
    }

    return(
    <div className='background-container'>
         <div className='su-form-container'>
            <form onSubmit={form.onSubmit((values)=>handleSubmit(values))}>
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
