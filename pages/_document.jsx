// import Link from "next/link";
import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
      <Html lang='br' data-theme="garden" className="scroll-smooth">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link
            href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&family=Bebas+Neue&family=Bitter&family=Oleo+Script+Swash+Caps&display=swap"
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
