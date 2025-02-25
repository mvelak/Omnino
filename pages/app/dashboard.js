import React from "react";
import styled from "styled-components";
import Menu from "@/components/app/Menu";

export default function Dashboard() {
    return (
        <Container>
            <Heading>Heading</Heading>
            <Content>
                <Sidebar />
                <Menu />
            </Content>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const Heading = styled.h1`
    display: flex;
`;

const Content = styled.div``

const Sidebar = styled.aside`
    background: #d8dcd6;
    width: 20vw;
`;

const PageContainer = styled.div`
    padding: 20px;
`;
