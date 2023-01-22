import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Giphy Gifs" />
        <meta name="description" content="This is a Gif app that let you search all the gifs." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gif-app-lyart.vercel.app" />
        <meta property="og:title" content="Giphy Gifs" />
        <meta property="og:description" content="This is a Gif app that let you search all the gifs." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gif-app-lyart.vercel.app" />
        <meta property="twitter:title" content="Giphy Gifs" />
        <meta property="twitter:description" content="This is a Gif app that let you search all the gifs." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
