import React, { useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import initFirebase from "../utils/firebase";

initFirebase();

function NewsLetterForm() {
  const date = new Date();
  const router = useRouter();
  const db = firebase.firestore();
  const [mail, setMail] = useState("");
  const checkRoute = () => {
    if (router.pathname.includes("launchticket")) {
      db.collection("launchtickets")
        .add({
          mail: input,
          date: date,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    } else {
      console.log("no firebase");
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
