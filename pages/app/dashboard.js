import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Menu from "@/components/app/menu";

export default function Dashboard() {
    const [isExpanded, setExpanded] = useState(false);

    const toggleDrawer = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <Container>
            <HeadingContainer>
                <IconContainer onClick={toggleDrawer}>
                    <Icon src={isExpanded ? "/down.png" : "/menu.png"} alt="Sidebar Icon" />
                </IconContainer>
                <Heading><a href={"/app/dashboard"}>Omnino</a></Heading>
            </HeadingContainer>
            <InnerContainer>
                <SidebarContent isExpanded={isExpanded}>
                    <Menu />
                </SidebarContent>
                <Content>Testing</Content>
            </InnerContainer>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const InnerContainer = styled.div`
    display: flex;
    flex: 1;
`

const HeadingContainer = styled.div`
    display: flex;
    border-bottom: 4px solid gray;
    height: 5vh;
`;

const IconContainer = styled.div`
    justify-content: left;
    margin-left: 2vh;
`;

const Icon = styled.img`
    height: 4vh;
    width: 2vw;
`;

const Heading = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
`;

const SidebarContent = styled.aside`
    background: #d8dcd6;
    transition: width 0.3s;
    width: ${(props) => (props.isExpanded ? "20vw" : "0vw")};
`;

const Content = styled.div`
    align-items: center;
    justify-content: center;
    width: 100vw;
`;
