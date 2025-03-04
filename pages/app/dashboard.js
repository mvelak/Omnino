import React, { useState } from "react";
import { useStateContext } from "@/context/StateContext";
import styled from "styled-components";
import Loading from "@/components/app/loading";
import Logo from "@/components/logo";
import Sidebar from "@/components/app/sidebar";
import Home from "@/components/app/content/home";
import Create from "@/components/app/content/create";
import Interact from "@/components/app/content/interact";
import Analytics from "@/components/app/content/analytics";



export default function Dashboard() {
    const context = useStateContext();

    const [isExpanded, setExpanded] = useState(false);
    const [selectedContent, setSelectedContent] = useState("Home");

    const toggleDrawer = () => {
        setExpanded((prev) => !prev);
        console.log();
    };

    return (
        <Container>
            { context.user ?
                <>
                    <HeadingContainer>
                        <IconContainer onClick={toggleDrawer}>
                            <Icon src={isExpanded ? "/down.png" : "/menu.png"} alt="Sidebar Icon" />
                        </IconContainer>
                        <LogoContainer>
                            <Logo />
                        </LogoContainer>
                    </HeadingContainer>
                    <InnerContainer>
                        <SidebarContainer isExpanded={isExpanded}>
                            <Sidebar setSelectedContent={setSelectedContent}/>
                        </SidebarContainer>
                        <ContentContainer>
                            {selectedContent === "Home" ? <Home /> : null}
                            {selectedContent === "Create" ? <Create /> : null}
                            {selectedContent === "Interact" ? <Interact /> : null}
                            {selectedContent === "Analytics" ? <Analytics /> : null}
                        </ContentContainer>
                    </InnerContainer>
                </>
                : <Loading />}
        </Container>

    );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: white-smoke;
`;

const HeadingContainer = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
`;

const InnerContainer = styled.div`
    height: 95%;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 2%;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.img`
    height: 32px;
    width: 32px;
`;

const SidebarContainer = styled.aside`
    width: ${(props) => (props.isExpanded ? "15%" : "0%")};
    height: 100%;
    background: whitesmoke;
    transition: width 0.3s ease;
    border-right: 2px solid black;
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
`;
