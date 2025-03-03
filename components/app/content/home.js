import React from "react";
import styled from "styled-components";
import { useStateContext } from "@/context/StateContext";
import Loading from "@/components/app/loading";

const Home = () => {
    // TODO: fix errors with userInfo being null on initial dashboard load
    const { user, userInfo } = useStateContext();

    if (user === undefined || userInfo === undefined) {
        return <Loading />;
    }

    return (
        <Container>Welcome {userInfo.name}!</Container> // Assuming userInfo has the name field
    );
}

const Container = styled.div`
    height: 100%;
    font-size: 32px;
    align-items: center;
    justify-content: center;
`
export default Home;