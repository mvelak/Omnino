import React from 'react';
import styled from 'styled-components';
import SolidButton from "@/components/solidbutton";
import BorderButton from "@/components/borderbutton";

const Hero = ({ heading, subheading, solidButtonText, solidButtonLink, borderButtonText, borderButtonLink}) => {
    return (
        <Container>
            <HeroContainer>
                <Heading>{heading}</Heading>
                <Subheading>{subheading}</Subheading>
                <ButtonContainer>
                    <SolidButton text={solidButtonText} link={solidButtonLink} />
                    <BorderButton text={borderButtonText} link={borderButtonLink} />
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

export default Hero;