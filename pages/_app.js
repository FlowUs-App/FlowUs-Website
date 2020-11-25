import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LiFit App Social Media Fitness Network Landing Page</title>
        <meta
          name="description"
          content="The official landing page of the LiFit Social Media Fitness Network App. Catch up with our latest news or login into your dashboard."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
