import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Form from "next/form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "next/router";


const Signup = () => {
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
            const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
            setMessage("Created account successfully!"); // Success message
            router.push("/app/dashboard");
        } catch (error) {
            setMessage(`${error.message}`); // Error message
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <Link href={"/"}>
                <img src="/colored-logo-32.png" alt="Homepage" />
                Omnino
            </Link>
            <SignupContainer>
                <Header>Sign Up</Header>
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
                        {isLoading ? "Loading..." : "Sign Up"}
                    </SubmitButton>
                </Form>

                <Message>{message}</Message>

                <LoginContainer>
                    <span>Already have an account? </span>
                    <a href="/auth/login">Log In</a>
                </LoginContainer>
            </SignupContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(140deg, rgba(228,228,228,1) 10%, rgba(188,255,205,1) 81%, rgba(164,252,205,1) 100%);
    background-size: 120% 120%;
`;

const SignupContainer = styled.div`
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

const LoginContainer = styled.div`
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

export default Signup;
