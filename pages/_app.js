import "../styles/globals.scss";
import "../index.scss";
import "swiper/swiper.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
