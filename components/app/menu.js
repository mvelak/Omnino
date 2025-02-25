import React from "react";
import styled from "styled-components";

export default function Menu() {
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

    return (
        <MenuContainer>
            {items.map(
                (item) => (
                    <h1>{item.name}</h1>
                )
            )}
        </MenuContainer>
    );
}

const MenuContainer = styled.div`
`
