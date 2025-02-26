import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Form from "next/form";
import { getAuth } from "firebase/auth";


const Login = () => {
    return (
        <Container>
            <Link href={"/"}>
                <img src="/colored-logo-32.png" alt="Homepage" />
                Omnino
            </Link>
            <LoginContainer>
                <Header>Log In</Header>
                <Form>
                    <Label>Email</Label>
                    <Input type={"email"} placeholder="e.g. johndoe@gmail.com" />

                    <Label>Password</Label>
                    <Input type={"password"} placeholder="e.g. 12345" />

                    <SubmitButton type="submit">Enter</SubmitButton>
                </Form>
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
