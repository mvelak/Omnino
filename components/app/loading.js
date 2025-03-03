import React from "react";
import styled, {keyframes} from "styled-components";

const Loading = () => {
    return (
        <Container>
            <Spinner />
        </Container>
    );
}

const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
`;

const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
`;

const Spinner = styled.div`
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: ${rotate} 2s linear infinite;
`;

export default Loading;