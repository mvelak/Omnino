import React, { useState } from "react";
import styled from "styled-components";
import Form from "next/form";
import { logIn } from "@/backend/firebase";
import {useRouter} from "next/router";
import Logo from "@/components/logo";
import {error} from "next/dist/build/output/log";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            await logIn(email, password);
            setMessage("Logged in successfully!");
            router.push("/app/dashboard");
        } catch (error) {
            setMessage("An error occurred during login");
        }
        setIsLoading(false);
    };


    return (
        <Container>
            <Logo />
            <LoginContainer>
                <Header>Log In</Header>
                <Form onSubmit={handleSubmit}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Label>Password</Label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <SubmitButton type="submit" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Log In"}
                    </SubmitButton>
                </Form>

                <Message>{message}</Message>

                <SignupContainer>
                    <span>Don't have an account? </span>
                    <a href={"/auth/signup"}>Register Now</a>
                </SignupContainer>
            </LoginContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(140deg, rgba(228,228,228,1) 10%, rgba(188,202,255,1) 81%, rgba(164,182,255,1) 100%);
    background-size: 120% 120%;
`;

const LoginContainer = styled.div`
    width: 42.5%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 4px solid gray;
    background: whitesmoke;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
`;

const Header = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const Label = styled.p`
    margin-bottom: 8px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid whitesmoke;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: forestgreen;
    }
    
    &:disabled {
        background-color: grey;
        cursor: not-allowed;
    }
`;

const Message = styled.p`
    text-align: center;
    margin-top: 15px;
    color: black;
`;

const SignupContainer = styled.div`
    margin-top: 15px;
    text-align: center;

    span {
        margin-right: 5px;
    }

    a {
        color: green;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default Login;
