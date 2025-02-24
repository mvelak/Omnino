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
    background: gray;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Heading = styled.div`
    font-size: 64px;
    font-weight: bold;
`;

const Subheading = styled.div`
    font-size: 24px;
    font-weight: bold;
`;


export default MiniHero;