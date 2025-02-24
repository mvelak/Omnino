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
                        <ul>
                            <li>Up to one account</li>
                            <li>Photo & Video posts</li>
                            <li>20 posts a month</li>
                            <li>Scheduled posting</li>
                        </ul>
                        <button>Select plan</button>
                    </PricingBox>
                    <PricingBox>
                        <PricingHeader>Influencer</PricingHeader>
                        <PricingLabel>13.99 / month</PricingLabel>
                        <ul>
                            <li>Up to two accounts</li>
                            <li>Photo, Video & Story posts</li>
                            <li>40 posts a month</li>
                            <li>Scheduled posting</li>
                            <li>Follower and comment interaction</li>
                            <li>Detailed analytics</li>
                        </ul>
                        <button>Select plan</button>
                    </PricingBox>
                    <PricingBox>
                        <PricingHeader>Professional</PricingHeader>
                        <PricingLabel>25.99 / month</PricingLabel>
                        <ul>
                            <li>Up to six accounts</li>
                            <li>Photo, Video & Story posts</li>
                            <li>100 posts a month</li>
                            <li>Scheduled posting</li>
                            <li>Follower and comment interaction</li>
                            <li>Detailed analytics</li>
                            <li>Dedicated support</li>
                        </ul>
                        <button>Select plan</button>
                    </PricingBox>
                </PricingContainer>
            </Container>
            <Footer />
        </>

    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    
`;

const PricingContainer = styled.div`
    background-color: whitesmoke;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(3, minmax(185px, 1fr));
`;

const PricingBox = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 40px 20px;
`;

const PricingHeader = styled.div`
    text-align: center;
    padding: 20px;
    border-bottom: 2px solid black;
    font-size: 32px;
    font-weight: bold;
`;

const PricingLabel = styled.div`
    font-size: 32px;
    font-weight: bold;

`