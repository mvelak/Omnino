import React from "react";
import styled from "styled-components";

const Home = ({ user }) => {
    return (
            <Container>Welcome {user.email}!</Container>
    )
}

const Container = styled.div`
    height: 100%;
    font-size: 32px;
    align-items: center;
    justify-content: center;
`
export default Home;