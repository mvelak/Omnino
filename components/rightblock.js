import React from "react";
import styled from "styled-components";

const RightBlock = ({heading, body}) => {
    return (
        <Container>
            <Column>
                <Body>{body}</Body>
            </Column>
            <Column>
                <Heading>{heading}</Heading>
            </Column>
        </Container>
    );
}

const Container = styled.div`
    align-items: center;
    justify-content: center;
    background: white;
    height: 50vh;
    display: flex;
`;

const Column = styled.div`   
    align-items: center;
    justify-content: center;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Heading = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Body = styled.div`
`;

export default RightBlock;