import React from "react";
import styled from "styled-components";
import Navbar from "@/components/navbar";
import MiniHero from "@/components/minihero";
import Block from "@/components/block";
import Footer from "@/components/footer";

export default function About() {
    return (
        <>
            <Navbar />
            <MiniHero heading={"About"} />
            <Block text={"About"} />
            <Footer />
        </>

    )
}

const Container = styled.section`
    
`;