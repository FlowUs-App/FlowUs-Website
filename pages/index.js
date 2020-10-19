import styles from "../styles/Home.module.css";
import "normalize.css";
import PageOne from "../containers/PageOne"
import PageTwo from "../containers/PageTwo";

export default function Home() {
  return (
      <>
        <PageOne/>
        <PageTwo/>
      </>
  );
}
