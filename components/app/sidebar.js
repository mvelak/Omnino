import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = ({ setSelectedContent }) => {

    const items = [{name: "Home"}, {name: "Create"}, {name: "Interact"}, {name: "Analytics"}]

    return (
        <MenuContainer>
            {items.map(
                (item) => (
                    <MenuItem>
                        <Button onClick={() => setSelectedContent(item.name)}>{item.name}</Button>
                    </MenuItem>
                )
            )}
        </MenuContainer>
    );
}

const MenuContainer = styled.div`
`;

const MenuItem = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    padding: 10px 0 10px 10px;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    background-color: transparent;
    color: black;
    border: none;
    font-size: 16px;
    font-weight: 600;  // Bold for emphasis
    text-align: left;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
    
    &:hover {
        color: gray;
        transform: translateX(2px);
    }
`;

export default Sidebar;
