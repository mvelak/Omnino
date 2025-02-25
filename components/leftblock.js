import React from "react";
import styled from "styled-components";

const LeftBlock = ({heading, body}) => {
    return (
        <Container>
            <Column>
                <Heading>{heading}</Heading>
            </Column>
            <Column>
                <Body>{body}</Body>
            </Column>
        </Container>
    );
}

const Container = styled.div`
    align-items: center;
    justify-content: center;
    background: whitesmoke;
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

const Heading = styled.div`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Body = styled.div`
    justify-content: center;

`;
export default LeftBlock;