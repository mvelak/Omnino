import Head from 'next/head'
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * 
  {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
  }
`

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

            <GlobalStyle />

            <StateContext>
                <Component {...pageProps} />
            </StateContext>
        </>
    )
}
