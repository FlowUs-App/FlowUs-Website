import "../styles/globals.css";
import Head from "next/head";
import { firebase } from "../res/ApiKey";
import { FirebaseContext } from "../context/firebase";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FirebaseContext.Provider value={firebase}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </>
  );
}

export default MyApp;
