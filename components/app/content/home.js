import React from "react";
import styled from "styled-components";
import { useStateContext } from "@/context/StateContext";
import { signIn, signOut, useSession } from "next-auth/react";
import Loading from "@/components/app/loading";

const Home = () => {
    const { user, userInfo } = useStateContext();
    const { data: session } = useSession();

    return (
        (user === undefined || user === null || userInfo === undefined || userInfo === null)
            ? <Loading />
            :
                <Container>
                    { session ? <Header>Welcome {userInfo.name}!</Header>
                        : <Header>Welcome {userInfo.name}! Link your social media accounts below</Header>
                    }
                    <SignInContainer>
                        { session ? <button onClick={() => signOut()}>Unlink Twitter</button>
                            : <button onClick={() => signIn()}>Link Twitter</button>
                        }
                    </SignInContainer>
                </Container>
        );
}

const Container = styled.div`
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Header = styled.div`
    height: 20%;
    font-size: 32px;
    align-items: center;
    justify-content: center;
`

const SignInContainer = styled.div`
    height: 80%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default Home;