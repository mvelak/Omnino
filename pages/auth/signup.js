import React from "react"
import styled from "styled-components";
import Link from "next/link";
import Form from "next/form";

const Login = () => {
    return (
        <Container>
            <Link href={"/"}>
                <img src="/colored-logo-32.png" alt="Homepage" />
                Omnino
            </Link>
            <SignupContainer>
                <Header>Sign Up</Header>

                <p>Email</p>
                <Input username={"email"} placeholder="e.g. johndoe@gmail.com" />
                <p>Password</p>
                <Input type={"password"} placeholder="e.g. 12345" />
            </SignupContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: whitesmoke;
`;

const SignupContainer = styled.div`
    width: 42.5%;
    height: 70%;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
`;

const Header = styled.h1`
    text-align: center;
`;

const Input = styled.input`
`;

export default Login;