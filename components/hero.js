import React from 'react';
import styled from 'styled-components';

const Hero = ({ heading, subheading}) => {
    return (
        <Container>
            <HeroContainer>
                <Heading>{heading}</Heading>
                <Subheading>{subheading}</Subheading>
                <ButtonContainer>
                    <GetStartedButton>Get Started</GetStartedButton>
                    <AboutButton>Learn More</AboutButton>
                </ButtonContainer>
            </HeroContainer>
        </Container>
    );
};

const Container = styled.section`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Heading = styled.div`
    font-size: 64px;
    font-weight: bold;
`;

const Subheading = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const GetStartedButton = styled.button`
    margin-right: 10px;
    border-radius: 20px;
`;

const AboutButton = styled.button`
    margin-left: 10px;
    border-radius: 20px;
    
`;


export default Hero;