import "@/styles/globals.css";
import Head from "next/head";

Head.base = {
  target: "_blank",
  href: "https://duaruqyah.com",
};
Head.title = "Dua Ruqyah";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dua Ruqyah</title>
        
        {}
      </Head>
      {}
      
        <Component {...pageProps} />
      {}
    </>
  );
}
