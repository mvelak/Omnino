import React from "react";
import styled from "styled-components";

const MiniHero = ({ heading, subheading }) => {
    return (
        <Container>
            <HeroContainer>
                <Heading>{heading}</Heading>
                <Subheading>{subheading}</Subheading>
            </HeroContainer>
        </Container>
    )
}

const Container = styled.section`
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.div`
    text-align: center;
    font-size: 64px;
    font-weight: bold;
`;

const Subheading = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`;


export default MiniHero;