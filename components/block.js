import React from 'react';
import styled from 'styled-components';

const Block = ({ text }) => {

    return (
        <Section>
            <MainText>{text}</MainText>
        </Section>
    )
}

const Section = styled.div`
    background: whitesmoke;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainText = styled.div`

`;
export default Block;