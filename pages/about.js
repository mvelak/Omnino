import React from "react";
import styled from "styled-components";
import Navbar from "@/components/navbar";
import Block from "@/components/block";
import Footer from "@/components/footer";

export default function About() {
    return (
        <>
            <Navbar />
            <Block text={"About"} />
            <Footer />
        </>

    )
}

const Container = styled.section`
    
`;