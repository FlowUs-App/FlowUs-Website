import "../styles/globals.scss";
import "../index.scss";
import "swiper/swiper.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="FlowUs keeps you in touch with your best friends and connects you with new people through sport."
        />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Lucas Goldner" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
