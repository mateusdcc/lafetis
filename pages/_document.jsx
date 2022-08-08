// import Link from "next/link";
import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
      <Html lang='br' className="scroll-smooth">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&family=Bebas+Neue&family=Oleo+Script+Swash+Caps&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
  );
}

export default Document
