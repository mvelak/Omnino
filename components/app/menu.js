import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Menu = () => {
    const items = [
        {
            name: "Dashboard",
            url: "/app/dashboard"
        },
        {
            name: "Create",
            url: "/app/create",
        },
        {
            name: "Interact",
            url: "/app/interact"
        }
    ]

    const [isExpanded, setExpanded] = useState(false);
    const onClick = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <MenuContainer>
            {items.map(
                (item) => (
                    <MenuItem>
                        <a href={item.url}>{item.name}</a>
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


export default Menu;
