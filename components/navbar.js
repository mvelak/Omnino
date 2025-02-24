import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavBar = () => {
    return (
        <Container>
            <NavContainer>
                <Column>
                    <NavLink href="/">Omnino</NavLink>
                </Column>
                <Column>
                    <NavLink href="/about">About</NavLink>
                </Column>
                <Column>
                    <NavLink href="/contact">Contact</NavLink>
                </Column>
                <Column>
                    <NavLink href="/pricing">Pricing</NavLink>
                </Column>
                <Column>
                    <NavLink href="/auth/login">Login</NavLink>
                </Column>
                <Column>
                    <NavLink href="/ ">Try Free</NavLink>
                </Column>
            </NavContainer>
        </Container>
    );
};

const Container = styled.nav`
    background: linear-gradient(0deg, rgba(47,47,50,1) 0%, rgba(0,0,0,1) 41%);
`;



const NavContainer = styled.div`
    display: flex;
    gap: 10px;
`;


const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 10px;
    margin-left: 40px;
    margin-bottom: 10px;
`;


const NavLink = styled(Link)`
    color: white;
`;



export default NavBar;