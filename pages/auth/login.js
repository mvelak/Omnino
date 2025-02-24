import React from "react"
import styled from "styled-components";
import Form from "next/form";

const Login = () => {
    return (
        <Container>
            <LoginContainer>
                <Header>Log In</Header>
                <p>Email</p>
                <Input username={"email"} placeholder="Email" />
                <p>Password</p>
                <Input type={"password"} placeholder="Password" />
                <SignupContainer>
                    Don't have an account?
                    <a> Register Now</a>
                </SignupContainer>
            </LoginContainer>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: whitesmoke;
`;

const LoginContainer = styled.div`
    width: 42.5%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: rgba(255, 255, 255, 0.1);
`

const SignupContainer = styled.div`

`;

const Header = styled.h1`
    text-align: center;
    
`;

const Input = styled.input`
`

export default Login;