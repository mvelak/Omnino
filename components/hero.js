import React from 'react';
import styled from 'styled-components';

const Hero = () => {
    return (
        <Section>
            <Overlay>
                <Container>
                    <HeroTextColumn>
                        <Header>
                            The <i>only</i> social media marketing software you will ever need
                            <Highlight>Start Here</Highlight>
                        </Header>
                        <SubheaderAndStarsColumn>
                            <SubHeader>Insert creative subheader here</SubHeader>
                            <GetStartedButton>Start for Free</GetStartedButton>
                            <DemoButton>Learn More</DemoButton>
                        </SubheaderAndStarsColumn>
                    </HeroTextColumn>
                </Container>
            </Overlay>
        </Section>
    );
};

const Section = styled.section`
`;

const Overlay = styled.div`
`;

const Container = styled.div`
`;

const HeroTextColumn = styled.div`
`;

const Header = styled.h1`
`;

const Highlight = styled.span`
`;

const SubHeader = styled.h2`

`;

const SubheaderAndStarsColumn = styled.div`

`;

const GetStartedButton = styled.button`

`;

const DemoButton = styled.button``

export default Hero;