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
            subitems: [
                {
                    name: "Photo",
                    url: "/app/create-photo"
                }
            ]
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
                    <MenuItem>{item.name}</MenuItem>
                )
            )}
        </MenuContainer>
    );
}

const MenuContainer = styled.div`
`

const MenuItem = styled.p`
`

export default Menu;
