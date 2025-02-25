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
    background: black; /* Gradient background */
    color: whitesmoke;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 20px; /* Rounded corners */
    cursor: pointer;
    padding: 10px 20px;

    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.05); /* Slight scaling on hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Shadow on hover */
    }
`;

export default SolidButton;