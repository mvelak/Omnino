import React from "react";
import styled from "styled-components";

const RightBlock = ({heading, body}) => {
    return (
        <Section>
            <Heading>{heading}</Heading>
            <Body>{body}</Body>
        </Section>
    );
}

const Heading = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Section = styled.div`
    background: whitesmoke;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: right;
`;

const Body = styled.div`

`;
export default RightBlock;