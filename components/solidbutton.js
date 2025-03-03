import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const SolidButton = ({ text, link }) => {
    const router = useRouter();
    const buttonClicked = () => router.push(link);

    return (
        <Button onClick={buttonClicked}>{text}</Button>
    )
}

const Button = styled.button`
    background: black; 
    color: white;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;

    transition: all 0.3s ease;
    &:hover {
        background: white;
        color: black;
    }
`;

export default SolidButton;