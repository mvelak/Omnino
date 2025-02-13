import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Omnino</title>
                <meta name="description" content="The go-to social media marketing app"/>
                <meta name="robots" content="index, follow"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon_package/site.webmanifest"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}