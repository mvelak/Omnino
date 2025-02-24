import React from "react";
import styled from "styled-components";

const BorderButton = ({ text, link }) => {
    return (
        <Button onclick={link}>{text}</Button>
    )
}

const Button = styled.button`
    background: whitesmoke; /* Gradient background */
    font-size: 14px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 20px; /* Rounded corners */
    cursor: pointer;
    padding: 10px 20px;

    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.05); /* Slight scaling on hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Shadow on hover */
    }
`;

export default BorderButton;