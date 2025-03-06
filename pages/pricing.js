import React from "react";
import styled from "styled-components";
import { useStateContext } from "@/context/StateContext"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MiniHero from "@/components/minihero";
import SolidButton from "@/components/solidbutton";
import HollowButton from "@/components/hollowButton";

export default function Pricing() {
    const { userInfo } = useStateContext();

    const plans = [
        {
            name: "Basic",
            price: "Free",
            features: [
                { text: "Up to one account", included: true },
                { text: "Photo & Video posts", included: true },
                { text: "20 posts a month", included: true },
                { text: "Follower and comment interaction", included: true },
                { text: "Scheduled posting", included: false },
                { text: "Detailed analytics", included: false },
                { text: "Content library", included: false }
            ],
            link: "/pricing"
        },
        {
            name: "Influencer",
            price: "13.99 / month",
            features: [
                { text: "Up to two accounts", included: true },
                { text: "Photo, Video & Story posts", included: true },
                { text: "40 posts a month", included: true },
                { text: "Follower and comment interaction", included: true },
                { text: "Scheduled posting", included: true },
                { text: "Detailed analytics", included: true },
                { text: "Content library", included: false }
            ],
            link: "/pricing"
        },
        {
            name: "Professional",
            price: "25.99 / month",
            features: [
                { text: "Up to six accounts", included: true },
                { text: "Photo, Video & Story posts", included: true },
                { text: "100 posts a month", included: true },
                { text: "Follower and comment interaction", included: true },
                { text: "Scheduled posting", included: true },
                { text: "Detailed analytics", included: true },
                { text: "Content library", included: true }
            ],
            link: "/pricing"
        },
    ];

    // Just mapping the object keys to reduce clutter here since we're repeating the same process for each pricing plan
    return (
        <>
            <Navbar />
            <MiniHero heading="Pay as you grow" subheading="With our no hassle pricing plans" />
            <PricingContainer>
                {plans.map((plan) => (
                    <PricingBox key={plan.name}>
                        <PricingHeader>{plan.name}</PricingHeader>
                        <PricingLabel>{plan.price}</PricingLabel>
                        <FeatureList>
                            {plan.features.map((feature, index) => (
                                <li key={index}> {feature.included ? "✓" : "✗"} {feature.text} </li>
                            ))}
                        </FeatureList>
                        <ButtonContainer>
                            {userInfo?.plan === plan.name
                                ? <SolidButton text={"Your Plan"} link={"/pricing"}/>
                                : <HollowButton text={"Select Plan"} link={plan.link}/>
                            }
                        </ButtonContainer>
                    </PricingBox>
                ))}
            </PricingContainer>
            <Footer />
        </>
    );
}

const PricingContainer = styled.div`
    background-color: whitesmoke;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(3, minmax(185px, 1fr));
`;

const ButtonContainer = styled.div`
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const PricingBox = styled.div`
    align-items: center;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 2px solid black;
    margin: 40px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);

    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
`;

const FeatureList = styled.ul`
    list-style: none;
`;

const PricingHeader = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    border-bottom: 2px solid black;
    font-size: 32px;
    font-weight: bold;
`;

const PricingLabel = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
`;
