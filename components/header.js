import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavBar = () => {


    return (
        <Nav>
            <Logo onClick={() => logOut(setUser)} href="/">Omnino</Logo>
            <NavLinks>
                <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
                <ButtonLink href="/auth/login">Login</ButtonLink>
            </NavLinks>
        </Nav>
    );
};

const Nav = styled.nav``

const Logo = styled(Link)``

const NavLinks = styled.div``

const ButtonLink = styled(Link)``

export default NavBar;