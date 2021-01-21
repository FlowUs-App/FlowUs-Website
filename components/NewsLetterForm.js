import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import initFirebase from "../utils/firebase";

initFirebase();

function NewsLetterForm() {
  const date = new Date();
  const router = useRouter();
  const db = firebase.firestore();
  const [registered, alreadyRegistered] = useState(false);
  const [mail, setMail] = useState("");

  useEffect(() => {
    if (router.asPath.includes("?")) {
      setMail(
        router.asPath.substring(
          router.asPath.indexOf("?") + 1,
          router.asPath.length
        )
      );
    } else {
      setMail("");
    }
  }, []);

  const checkRoute = () => {
    if (router.pathname.includes("launchticket")) {
      if (mail.includes("@")) {
        if (registered == false) {
          db.collection("launchtickets")
            .add({
              mail: mail,
              date: date,
            })
            .then(function (docRef) {
              setMail("");
              alreadyRegistered(true);
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });
        } else {
          setMail("You already registered yourself");
        }
      }
    } else {
      router.push("/launchticket?" + mail);
    }
  };

  return (
    <div className="input-box">
      <input
        type="email"
        placeholder="Your e-mail"
        className="textColorWhite"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <button onClick={() => checkRoute()}>
        <i className="ion-android-arrow-forward" />
      </button>
    </div>
  );
}

export default NewsLetterForm;
