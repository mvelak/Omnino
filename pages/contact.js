import React from "react";
import styled from "styled-components";
import Navbar from "@/components/navbar";
import Block from "@/components/block";
import Footer from "@/components/footer";
import Minihero from "@/components/minihero";
import MiniHero from "@/components/minihero";

export default function Contact() {
    return (
        <>
            <Navbar />
            <MiniHero heading={"Contact"} />
            <Block text={"Contact"} />
            <Footer />
        </>

    )
}