import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    
    <Html lang={props.locale && props.locale.includes('bn') ? 'bn' : 'en'}
      className={'light'  }
      style={{
        colorScheme: "light",
      }}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="next-head-count" content={2} />
      <link rel="icon" href="../assets/dua-logo.svg" />
      <title>Dua &amp; Ruqyah | All Duas Collection</title>

      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
