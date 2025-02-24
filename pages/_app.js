import Head from 'next/head'
import styled from "styled-components";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Omnino</title>
                <meta name="description" content="The go-to social media marketing app"/>
                <meta name="robots" content="index, follow"/>
                <link rel="apple-touch-icon" sizes="256x256" href="/colored-logo-256.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/colored-logo-32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/colored-logo-32.png"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    )
}

const Theme = styled.div`
    font-family: "Avenir", Helvetica, Arial, sans-serif;
`