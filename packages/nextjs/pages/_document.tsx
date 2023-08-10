import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html prefix="og: http://ogp.me/ns#">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/darklogo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/darklogo.png" />
        <link rel="shortcut icon" type="image/svg" href="/assets/darklogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/darklogo.png" />

        <link rel="mask-icon" href="/assets/darklogo.png" color="#ff2151" />
        <meta name="msapplication-TileColor" content="#ff2151" />
        <meta name="theme-color" content="#ff2151" />
        <meta name="title" content="Beatbridge" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Beatbridge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
