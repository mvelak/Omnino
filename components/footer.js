import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <Column>
                    <img src={"/white-logo-1200.png"} alt="Omnino Logo" height={140} width={140} />
                    <p>© 2025 Omnino</p>
                </Column>
                <Column>
                    <ColumnHeader>Company</ColumnHeader>
                    <Link href="#">About</Link>
                </Column>
                <Column>
                    <ColumnHeader>Platforms</ColumnHeader>
                    <Link href="#">Bluesky</Link>
                    <Link href="#">Mastodon</Link>
                </Column>
                <Column>
                    <ColumnHeader>Legal</ColumnHeader>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                </Column>
                <Column>
                    <ColumnHeader>Social Media</ColumnHeader>
                    <Link href="#">Facebook</Link>
                    <Link href="#">Twitter</Link>
                    <Link href="#">Instagram</Link>
                </Column>
            </FooterContainer>
        </Container>
    );
};

const Container = styled.footer`
    background: linear-gradient(180deg, rgba(47,47,50,1) 0%, rgba(0,0,0,1) 11%);
    color: white;
`

const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(185px, 1fr));
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 20px;
`;

const ColumnHeader = styled.h2`
    margin-top: 0;
    margin-bottom: 10;
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
    &:hover {color: slategray;}
`;

export default Footer;