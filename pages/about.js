import React from "react";
import styled from "styled-components";
import Navbar from "@/components/navbar";
import MiniHero from "@/components/minihero";
import LeftBlock from "@/components/leftblock";
import Footer from "@/components/footer";
import RightBlock from "@/components/rightblock";

export default function About() {
    return (
        <>
            <Navbar />
            <MiniHero heading={"What we stand for"} subheading={"Our goal is to streamline social media account management"} />
            <LeftBlock heading={"How we started"} body={""}/>
            <RightBlock heading={"Future Growth"} body={"Keep an eye out for more social media platform integration. Meta and X integrations are in the works."}/>
            <Footer />
        </>

    )
}

const Container = styled.section`
    
`;