import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import { getAuth, signOut } from "firebase/auth";
import Logo from "@/components/logo";


const NavBar = () => {
    const context = useStateContext();
    const { user } = context;
    const auth = getAuth();

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("Logged out");
        } catch (error) {
            console.log(`Error logging out: ${error}`);
        }
    }


    // Login/Signup or Logout/Dashboard depending on whether the user is signed in
    return (
        <Container>
            <NavContainer>
                <LeftCol>
                    <Logo />
                </LeftCol>
                <RightCol>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/pricing">Pricing</NavLink>
                    {user === null ? <NavLink href="/auth/login">Login</NavLink> : <NavLink  href="/" onClick={logout}>Log Out</NavLink>}
                    {user === null ? <NavLink href="/auth/signup">Signup</NavLink> : <NavLink href="/app/dashboard">Dashboard</NavLink>}
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