import React from "react";
import styled from "styled-components";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MiniHero from "@/components/minihero";

export default function Pricing() {
    return (
        <>
            <Navbar />
            <Container>
                <MiniHero heading={"Pay as you grow"} subheading={"With our no hassle pricing plans"} />
                <PricingContainer>
                    <PricingBox>
                        <PricingHeader>Basic</PricingHeader>
                        <PricingLabel>Free</PricingLabel>
                        - Free Tier
                    </PricingBox>
                    <PricingBox>
                        <PricingHeader>Influencer</PricingHeader>
                        <PricingLabel>13.99 / month</PricingLabel>
                        - Up to 2 users
                    </PricingBox>
                    <PricingBox>
                        <PricingHeader>Professional</PricingHeader>
                        <PricingLabel>25.99 / month</PricingLabel>
                        - Up to 4 users

                    </PricingBox>
                </PricingContainer>
            </Container>
            <Footer />
        </>

    )
}

const Container = styled.section`
    
`;

const PricingContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(185px, 1fr));
`;

const PricingBox = styled.div`
    display: grid;
    border-radius: 10px;
    border: 2px solid black;
    margin: 40px 20px;
`;

const PricingHeader = styled.div`
    background: darkgray;
    border-radius: 8px;
    border: 1px solid black;
    text-align: center;
    font-size: x-large;
    font-weight: bold;
`;

const PricingLabel = styled.div`
    font-size: 32px;
    font-weight: bold;

`