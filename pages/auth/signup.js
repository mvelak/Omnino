import React from "react";
import styled from "styled-components";

const SignUp = () => {
    return (
        <Container>
            <PromptBox>
                <Header>Sign Up</Header>

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
    border-radius: 25px;
    
    border: 2px solid black;
`

const Header = styled.h1`
    text-align: center;
    
`;

export default SignUp;