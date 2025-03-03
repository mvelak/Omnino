import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const HollowButton = ({ text, link }) => {
    const router = useRouter();
    const buttonClicked = () => router.push(link);

    return (
        <Button onClick={buttonClicked}>{text}</Button>
    )
}

const Button = styled.button`
    background: white;
    color: black;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;

    transition: all 0.3s ease;
    &:hover {
        background: black;
        color: white;
    }
`;

export default HollowButton;