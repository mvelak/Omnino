import styled from "styled-components";
import React from "react";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} passHref>
            <Container>
                <img src={"/colored-logo-32.png"} alt="logo" />
                Omnino
            </Container>
        </Link>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    text-decoration: none;
`;

export default Logo;