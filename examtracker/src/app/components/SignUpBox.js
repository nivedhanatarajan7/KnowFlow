'use client'
import "./Row.css"
import Button from "./Button";
import Card from "./Card";
import Link from "next/link";
import {useState, useContext} from 'react';
import axios from "axios";
import { useRouter } from "next/navigation";
import UserContext from "../backend/context/UserContext";

const SignUpBox = () => {
    const srouter = useRouter();
    
    const {setUserData} = useContext(UserContext);
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const firstNameChanger = (event) => {
        setFirstName(event.target.value);
    }
    const lastNameChanger = (event) => {
        setLastName(event.target.value);
    }
    const usernameChanger = (event) => {
        setUsername(event.target.value);
    }
    const passwordChanger = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        }

        try {
            await axios.post('http://localhost:8082/api/users/signup', formData);

            const loginRes = await axios.post('http://localhost:8082/api/users/login', {
                username: formData.username,
                password: formData.password
            });

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });

            localStorage.setItem('auth-token', loginRes.data.token);

            srouter.push('/schedule');
        } catch (error) {
            console.error('Signup failed:', error);
        } //catch
    };

    return (
        
        <div>
            <Card>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <label>First Name: </label>
                        <input 
                        required type="text"
                        id="firstname"
                        onChange={firstNameChanger}
                        />
                    </div>

                    <div className="row">
                        <label>Last Name: </label>
                        <input 
                        required type="text" 
                        id="lastname"
                        onChange={lastNameChanger}
                        />
                    </div>

                    <div className="row">
                        <label>Username: </label>
                        <input 
                        required type="text"
                        id="username"
                        onChange={usernameChanger}
                        />
                    </div>

                    <div className="row">
                        <label>Password: </label>
                        <input 
                        required type="password"
                        id="password"
                        onChange={passwordChanger}
                        />
                    </div>

                    <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
                </form>
            <p id="option">Already have an account? Log in <Link href="/login">here</Link> </p>
            
            </Card>
        </div>
       
    );
}

export default SignUpBox;