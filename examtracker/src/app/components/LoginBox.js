"use client"
import Button from "./Button";
import Card from "./Card";
import Link from "next/link";
import "./Row.css"
import axios from 'axios';
import UserContext from "../backend/context/UserContext";
import { useRouter } from "next/navigation";
import {useState, useContext, useEffect} from "react";

const LoginBox = () => {
    const router = useRouter();
    const {userData, setUserData} = useContext(UserContext);
    
    useEffect(() => {
        if (userData.token) {
            router.push('/schedule');
        }
    }, [userData.token, router]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const usernameChanger = (event) => {
        setUsername(event.target.value);
    }
    const passwordChanger = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = {
            username: username,
            password: password
        }
        try {
            const response = await axios.post('http://localhost:8082/api/users/login', formData);
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            localStorage.setItem('auth-token', response.data.token);
            router.push('/schedule');
        } catch (error) {
            alert("Invalid username or password.");
        }
    };
    return (
        <div>
            <Card>
                <h1>Log In</h1>
                <form onSubmit={handleLogin}>
                    <div className="row">
                        <label>Username: </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={usernameChanger}
                            required
                        />
                    </div>

                    <div className="row">
                        <label>Password: </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={passwordChanger}
                            required
                        />
                    </div>
                    <Button type="submit">Login</Button>
                </form>
                <p>Don't have an account yet? Sign up <Link href="/signup">here</Link> </p>
            </Card>
        </div>
    );
}

export default LoginBox;