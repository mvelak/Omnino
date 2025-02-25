import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavBar = () => {
    return (
        <Container>
            <NavContainer>
                <LeftCol>
                    <img src={"/colored-logo-32.png"} alt="logo" />
                    <NavLink href="/">Omnino</NavLink>
                </LeftCol>
                <RightCol>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/pricing">Pricing</NavLink>
                    <NavLink href="/auth/login">Login</NavLink>
                    <NavLink href="/auth/signup">Signup</NavLink>
                </RightCol>
            </NavContainer>
        </Container>
    );
};

const Container = styled.div`
    background: linear-gradient(0deg, rgba(47,47,50,1) 0%, rgba(0,0,0,1) 41%);
    padding: 25px 30px;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftCol = styled.div`
    display: flex;
    align-items: center;

`;

const RightCol = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const NavLink = styled(Link)`
    color: white;
`;

export default NavBar;