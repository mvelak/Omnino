import React, { useState } from "react";
import styled from "styled-components";
import { useStateContext } from "@/context/StateContext";
import { signIn, signOut, useSession } from "next-auth/react";
import Loading from "@/components/app/loading";

const Home = () => {
    const { user, userInfo, setBlueskyIdentifier, setBlueskyPassword } = useStateContext();
    const { data: session } = useSession();

    const [isBlueskyLoggedIn, setIsBlueskyLoggedIn] = useState(false);
    const [tempBlueskyIdentifier, setTempBlueskyIdentifier] = useState(""); // Temporary state for username
    const [tempBlueskyPassword, setTempBlueskyPassword] = useState(""); // Temporary state for password

    const handleBlueskyLogin = () => {
        setBlueskyIdentifier(tempBlueskyIdentifier);
        setBlueskyPassword(tempBlueskyPassword);
        setIsBlueskyLoggedIn(true);
    };

    const handleBlueskyLogout = () => {
        setBlueskyIdentifier(null);
        setBlueskyPassword(null);
        setIsBlueskyLoggedIn(false);
    };

    return (
        (user === undefined || user === null || userInfo === undefined || userInfo === null)
            ? <Loading />
            :
            <Container>
                {session
                    ? <Header>Welcome {userInfo.name}!</Header>
                    : <Header>Welcome {userInfo.name}! Link your social media accounts below</Header>
                }
                <SignInContainer>
                    {session
                        ? <button onClick={() => signOut()}>Unlink Twitter</button>
                        : <button onClick={() => signIn()}>Link Twitter</button>
                    }
                    {!isBlueskyLoggedIn ? (
                        <div>
                            <input
                                type="text"
                                placeholder="Bluesky Username"
                                value={tempBlueskyIdentifier}
                                onChange={(e) => setTempBlueskyIdentifier(e.target.value)}
                            />
                            <input type="password"
                                placeholder="Bluesky Password"
                                value={tempBlueskyPassword}
                                onChange={(e) => setTempBlueskyPassword(e.target.value)}
                            />
                            <button onClick={handleBlueskyLogin}>Link Bluesky</button>
                        </div> )
                        : (
                        <div>
                            <button onClick={handleBlueskyLogout}>Unlink Bluesky</button>
                        </div>
                    )}
                </SignInContainer>
            </Container>
    );
};

const Container = styled.div`
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.div`
    height: 20%;
    font-size: 32px;
    align-items: center;
    justify-content: center;
`;

const SignInContainer = styled.div`
    height: 80%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default Home;
