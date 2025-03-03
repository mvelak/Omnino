import React from "react";
import styled from "styled-components";
import {useStateContext} from "@/context/StateContext";

const Interact = () => {
    const { user, userInfo } = useStateContext();

    return (
        <>
            <Header>Interact with Audience</Header>

        </>
    )
}

const Header = styled.h1`
    text-align: center;
    top: 0;
`;


export default Interact;

