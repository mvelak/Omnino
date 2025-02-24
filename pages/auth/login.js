import React from "react"
import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <PromptBox>
                <Header>Log In</Header>
                <Button href="/auth/signup">Sign Up</Button>

            </PromptBox>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const PromptBox = styled.div`
    width: 42.5%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    border: 2px solid black;
`

const Header = styled.h1`
    text-align: center;
    
`;
const Button = styled.button`
    text-align: center;
    
`

export default Login;